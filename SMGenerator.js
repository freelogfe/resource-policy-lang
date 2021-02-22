const gen_dir = "./gen";
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const resourcePolicyVisitor = require('./gen/resourcePolicyVisitor').resourcePolicyVisitor;
const TransitionEventArgsMatchUtil = require('./TransitionEventArgsMatchUtil');
const path = require('path');
const fs = require("fs");
const http = require("http");

const transitionEventArgsMatchUtil = new TransitionEventArgsMatchUtil.TransitionEventArgsMatchUtil();
const serviceStateResourceAddressMap = JSON.parse(fs.readFileSync(path.join(__dirname, "./resources/service_state_resource_addresses.json")));
const eventDefinitionMap = {};
{
    let eventDefinitionArrayTmp = JSON.parse(fs.readFileSync(path.join(__dirname, "./resources/event_definition.json")));
    for (let eventDefinition of eventDefinitionArrayTmp) {
        eventDefinitionMap[eventDefinition["name"]] = eventDefinition;
    }
}

class SMGenerator extends resourcePolicyVisitor {

    /**
     * @param subjectType 标的物类型
     * @param targetUrl 目标服务器地址前缀
     * @param env 环境
     */
    constructor(subjectType, targetUrl, env) {
        super();
        if (subjectType == null || !(subjectType in serviceStateResourceAddressMap)) {
            throw new Error("参数错误${subjectType}");
        }
        this.subjectType = subjectType.toLowerCase();

        this.targetUrl = targetUrl;

        if (env == null || !(env in serviceStateResourceAddressMap[subjectType])) {
            throw new Error("参数错误${env}");
        }
        this.env = env.toLowerCase();

        if (targetUrl == null) {
            switch (env) {
                case "dev":
                    this.targetUrl = "http://api.testfreelog.com";
                    break;
                case "prod":
                    this.targetUrl = "http://api.freelog.com";
                    break;
                default:
                    // 即便${env}在服务器地址映射表中，但是却没有默认的前缀赋值，故抛出错误
                    throw new Error("参数错误${env}");
            }
        }

        this.state_machine = {};
        // 当前状态
        this.current_state = null;
        // 当前表述
        this.current_expression = null;
        // 色块常量映射
        this.service_state_constant_map = new Map();
        // 状态机状态转换过程事件集合
        this.transitionEvents = [];
        /**
         * @see SMGenerator#init_keywords_state()
         * 状态机状态名称关键字集合
         */
        this.keywords_state = null;
        /**
         * @see SMGenerator#init_necessary_states()
         * 状态机状态名称必要的集合
         */
        this.necessary_states = null;

        this.init_keywords();
        this.init_necessary();
    }

    visitPolicy(ctx) {
        this.state_machine['audiences'] = [];
        // this.state_machine["contract"] = {};
        this.state_machine['declarations'] = {};
        let declarations = this.state_machine["declarations"];
        declarations["serviceStates"] = []; // 色块定义
        declarations["serviceStateConstants"] = []; // 全局色块
        declarations["expressions"] = []; // 表述

        this.state_machine['states'] = {};

        return super.visitPolicy(ctx);
    }

    visitAudience(ctx) {
        let audience = ctx.getChild(0);
        let name = audience.getText();
        let type = null;
        switch (audience.getSymbol().type) {
            case resourcePolicy.resourcePolicy.USER_ID:
                type = "userId";
                break;
            default:
                type = audience.getText();
        }

        let repeated = false;
        for (let audienceInstance of this.state_machine["audiences"]) {
            if (audienceInstance["type"] === type) {
                if (type === "userId") {
                    if (audienceInstance["name"] === name) {
                        repeated = true;
                    }
                } else {
                    repeated = true;
                }
            }
        }

        if (!repeated) {
            let audienceInstance = {
                name: name,
                type: type
            }
            this.state_machine["audiences"].push(audienceInstance);
        }

        return super.visitAudience(ctx);
    }

    visitSubject(ctx) {
        // let contract = this.state_machine["contract"];
        // contract["service"] = ctx.subject_service().getText().substring(1);
        // contract["organization"] = ctx.user_organization_name().getText().substring(1);
        // contract["id"] = ctx.SUBJECT_ID().getText().substring(1);

        return super.visitSubject(ctx);
    }

    visitService_state_constant(ctx) {
        this.service_state_constant_map.set(ctx.service_state_scope().getText(), ctx.service_state().getText());
        let service_state_constants = this.state_machine["declarations"]["serviceStateConstants"];
        let service_state = {
            scope: ctx.service_state_scope().getText(),
            state: ctx.service_state().getText()
        };

        // // 色块校验
        // this.checkServiceState(service_state["state"]);

        service_state_constants.push(service_state);

        return super.visitService_state_constant(ctx);
    }

    visitExpression_assignment(ctx) {
        let expressions = this.state_machine["declarations"]["expressions"];

        let func_name = ctx.expression_handle().getText();
        for (let ex of expressions) {
            if (ex["funcName"] === func_name) {
                throw new Error("存在相同的函数名：" + func_name);
            }
        }
        let func_args = [];
        for (let func_arg of ctx.ID()) {
            if (func_args.indexOf(func_arg.getText()) > -1) {
                throw new Error("存在相同的参数名：" + func_arg.getText());
            }
            func_args.push(func_arg.getText());
        }

        let expression = {
            funcName: func_name,
            funcArgs: func_args,
            funcBody: ctx.expression().getText()
        };
        expressions.push(expression);
        this.current_expression = func_name;

        return super.visitExpression_assignment(ctx);
    }

    visitVariableArg(ctx) {
        let expressions = this.state_machine["declarations"]["expressions"];
        let expression = null;
        for (let ex of expressions) {
            if (ex["funcName"] === this.current_expression) {
                expression = ex;
                break;
            }
        }
        if (expression["funcArgs"].indexOf(ctx.ID().getText()) === -1) {
            throw new Error("无效的参数名：" + ctx.ID().getText());
        }

        return super.visitVariableArg(ctx);
    }

    visitState_definition_section(ctx) {
        let result = super.visitState_definition_section(ctx);
        // 状态机状态完整性校验
        this.checkStateComplete();

        return result;
    }

    visitState_definition(ctx) {
        this.current_state = ctx.state_name().getText();

        // 状态机状态校验
        this.checkState(this.current_state);

        let service_states = [];
        for (let scope of this.service_state_constant_map.keys()) {
            if (scope === "always") {
                service_states.push(this.service_state_constant_map.get(scope));
            }
        }
        this.state_machine["states"][this.current_state] = {
            // authorization: [],
            transition: {},
            serviceStates: service_states
        };
        if (this.current_state === "initial") {
            this.state_machine["states"][this.current_state]["isInitial"] = true;
        }

        return super.visitState_definition(ctx);
    }

    visitService_state_definition(ctx) {
        // 染色集
        let service_states = this.state_machine["states"][this.current_state]["serviceStates"];

        for (let st_ctx of ctx.service_state()) {
            if (service_states.indexOf(st_ctx.getText()) === -1) {
                // 色块校验
                // this.checkServiceState(st_ctx.getText());

                service_states.push(st_ctx.getText());
            }
        }

        return super.visitService_state_definition(ctx);
    }

    visitState_transition(ctx) {
        let transition = this.state_machine["states"][this.current_state]["transition"];
        if (ctx.terminate == null) {
            transition[ctx.state_name().getText()] = {};

            let event = {};
            event["service"] = ctx.event().eventService.text;
            if (ctx.event().event_path() != null) {
                event["path"] = ctx.event().event_path().getText();
            }
            event["name"] = ctx.event().eventName.text;
            if (ctx.event().event_args() != null) {
                let args = [];
                for (let event_arg of ctx.event().event_args().EVENT_ARG()) {
                    args.push(event_arg.getText().substring(1, event_arg.getText().length - 1));
                }
                event["args"] = args;
            }

            transition[ctx.state_name().getText()]["event"] = event;
            this.transitionEvents.push(event);
        } else {
            this.state_machine["states"][this.current_state]["transition"] = null;
        }

        return super.visitState_transition(ctx);
    }

    /**
     * 初始化关键字集合
     */
    init_keywords() {
        this.init_keywords_state();
    }

    /**
     * 初始化状态机状态名称关键字集合
     */
    init_keywords_state() {
        this.keywords_state = new Set();
    }

    /**
     * 初始化必要的集合
     */
    init_necessary() {
        this.init_necessary_states();
    }

    /**
     * 初始化状态机状态名称必要的集合
     */
    init_necessary_states() {
        this.necessary_states = new Set(["initial"]);
    }

    /**
     * 校验
     */
    verify() {
        return new Promise((resolve, reject) => {
            this.fetchServiceStates()
                .then(() => this.verifyServiceStates())
                .then(() => this.verifyExpressions())
                .then(() => this.verifyEvents())
                .then(() => {
                    resolve()
                })
                .catch((e) => {
                    reject(e);
                });
        });
    }

    /**
     * 取色块定义相关的内容
     */
    fetchServiceStates() {
        return new Promise((resolve, reject) => {
            let service_states = this.state_machine["declarations"]["serviceStates"];

            http.get(this.getRemoteUrl(), (res) => {
                let buffer = null;

                res.on("data", function (data) {
                    if (buffer == null) {
                        buffer = data;
                    } else {
                        buffer = buffer + data;
                    }
                })

                res.on("end", function () {
                    try {
                        let rspo = JSON.parse(buffer);
                        if (rspo["errCode"] !== 0) {
                            reject(new Error("取色块定义出错"));
                            return;
                        }

                        let data = rspo["data"];
                        data.map(x => {
                            delete x.value;
                            return x;
                        });
                        for (let key in data) {
                            service_states.push({name: data[key]["name"], type: data[key]["type"]});
                        }

                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                });
            }).on("error", (e) => {
                reject(e);
            });
        });
    }

    // 色块校验
    verifyServiceStates() {
        let serviceStateRecords = new Set();

        // 验证状态机色块值
        let states = this.state_machine["states"];
        for (let state in states) {
            for (let service_state of states[state]["serviceStates"]) {
                this.checkServiceState(service_state)

                // 记录使用的色块
                serviceStateRecords.add(service_state);
            }
        }
        if (serviceStateRecords.size === 0) {
            throw new Error("状态机状态至少包含一个色块");
        }

        // 验证全局色块定义
        let service_state_constants = this.state_machine["declarations"]["serviceStateConstants"];
        for (let service_state of service_state_constants) {
            this.checkServiceState(service_state["state"]);

            // 记录使用的色块
            serviceStateRecords.add(service_state["state"]);
        }

        // 清理色块定义
        let serviceStates = this.state_machine["declarations"]["serviceStates"];
        serviceStates = serviceStates.filter((serviceState => {
            return serviceStateRecords.has(serviceState["name"]);
        }));
        this.state_machine["declarations"]["serviceStates"] = serviceStates;

        // 清理全局色块
        if (this.state_machine["declarations"]["serviceStateConstants"].length === 0) {
            delete this.state_machine["declarations"]["serviceStateConstants"];
        }
    }

    /**
     * 色块校验
     */
    checkServiceState(state) {
        for (let service_state of this.state_machine["declarations"]["serviceStates"]) {
            if (service_state["name"] === state) {
                return;
            }
        }

        throw new Error("不合法的色块：" + state);
    }

    /**
     * 表达式校验
     */
    verifyExpressions() {
        if (this.state_machine["declarations"]["expressions"].length === 0) {
            delete this.state_machine["declarations"]["expressions"];
        }
    }

    /**
     * 事件校验
     */
    verifyEvents() {
        for (let event of this.transitionEvents) {
            if (event["service"] !== "freelog") {
                throw new Error("该事件服务不合法：" + JSON.stringify(event));
            }

            let eventDefinition = eventDefinitionMap[event["name"]];
            if (eventDefinition == null) {
                throw new Error("该事件未定义：" + JSON.stringify(event));
            }

            let params = eventDefinition["params"];
            if (params != null) {
                let args = event["args"];
                if (args == null || args.length !== params.length) {
                    throw new Error("该事件缺少参数：" + JSON.stringify(event));
                }

                for (let i = 0; i < params.length; i++) {
                    let param = params[i];
                    if (!transitionEventArgsMatchUtil.match(param, args[i])) {
                        throw new Error("该事件参数不合法：" + JSON.stringify(event));
                    }
                }
            }

            event["code"] = eventDefinition["code"];
            event["description"] = eventDefinition["description"];
            event["singleton"] = eventDefinition["singleton"];
        }
    }

    /**
     * 状态机状态校验
     */
    checkState(state) {
        // 是否状态机状态是单例的
        this.checkStateSingle(state);
        // 是否状态机状态名称与关键字冲突
        this.checkStateKeyword(state);
    }

    // 检查状态机名称是否重复
    checkStateSingle(state) {
        if (state in this.state_machine["states"]) {
            throw new Error("状态机名称冲突：" + state);
        }
    }

    // 检查状态机名称是否与关键字冲突
    checkStateKeyword(state) {
        if (this.keywords_state.has(state)) {
            throw new Error("关键字冲突：" + state);
        }
    }

    /**
     * 状态机状态完整性校验
     */
    checkStateComplete() {
        for (let necessary_state of this.necessary_states) {
            if (!necessary_state in this.state_machine["states"]) throw new Error("缺少必要的状态：" + necessary_state);
        }
    }

    getRemoteUrl() {
        return `${this.targetUrl}${serviceStateResourceAddressMap[this.subjectType][this.env]}`;
    }
}

exports.SMGenerator = SMGenerator;