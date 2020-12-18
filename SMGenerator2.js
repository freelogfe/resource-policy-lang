var resourcePolicyVisitor = require('./gen2/resourcePolicyVisitor').resourcePolicyVisitor
var fs = require("fs");

class SMGenerator2 extends resourcePolicyVisitor {

    constructor(errors) {
        super();
        this.errors = errors;
        this.state_machine = {};
        // 当前状态
        this.current_state = null;
        // 当前表述
        this.current_expression = null;
        // 色块常量映射
        this.service_state_constant_map = new Map();
        /**
         * @see SMGenerator2#init_keywords_state()
         * 状态机状态名称关键字集合
         */
        this.keywords_state = null;
        /**
         * @see SMGenerator2#init_necessary_states()
         * 状态机状态名称必要的集合
         */
        this.necessary_states = null;

        this.init_keywords();
        this.init_necessary();
    }

    visitPolicy(ctx) {
        // this.state_machine["contract"] = {};
        this.state_machine['declarations'] = {}
        this.state_machine['states'] = {};

        return super.visitPolicy(ctx);
    }

    visitSubject(ctx) {
        // let contract = this.state_machine["contract"];
        // contract["service"] = ctx.subject_service().getText().substring(1);
        // contract["organization"] = ctx.user_organization_name().getText().substring(1);
        // contract["id"] = ctx.SUBJECT_ID().getText().substring(1);

        return super.visitSubject(ctx);
    }

    visitDeclaration_section(ctx) {
        let declarations = this.state_machine["declarations"];
        declarations["serviceStates"] = this.fetchServiceStates(); // 色块定义
        declarations["serviceStateConstants"] = []; // 全局色块
        declarations["expressions"] = []; // 表述

        return super.visitDeclaration_section(ctx);
    }

    visitService_state_constant(ctx) {
        this.service_state_constant_map.set(ctx.type.getText(), ctx.service_state().getText());
        let service_state_constants = this.state_machine["declarations"]["serviceStateConstants"];
        let service_state = {
            scope: ctx.type.getText(),
            state: ctx.service_state().getText()
        };

        // 色块校验
        this.checkServiceState(service_state["state"]);

        service_state_constants.push(service_state);

        return super.visitService_state_constant(ctx);
    }

    visitExpression_assignment(ctx) {
        let expressions = this.state_machine["declarations"]["expressions"];

        let func_name = ctx.expression_handle().getText();
        for (let ex of expressions) {
            if (ex["funcName"] === func_name) {
                throw ("存在相同的函数名：" + func_name);
            }
        }
        let func_args = [];
        for (let func_arg of ctx.ID()) {
            if (func_args.indexOf(func_arg.getText()) > -1) {
                throw ("存在相同的参数名：" + func_arg.getText());
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
            }
        }
        if (expression["funcArgs"].indexOf(ctx.ID().getText()) === -1) {
            throw ("无效的参数名：" + ctx.ID().getText());
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
        if (this.current_state === "finish") {
            this.state_machine["states"][this.current_state]["isFinish"] = true;
        }

        return super.visitState_definition(ctx);
    }

    visitService_state_definition(ctx) {
        // 染色集
        let service_states = this.state_machine["states"][this.current_state]["serviceStates"];

        for (let st_ctx of ctx.service_state()) {
            if (service_states.indexOf(st_ctx.getText()) === -1) {
                // 色块校验
                this.checkServiceState(st_ctx.getText());

                service_states.push(st_ctx.getText());
            }
        }

        return super.visitService_state_definition(ctx);
    }

    visitState_transition(ctx) {
        let transition = this.state_machine["states"][this.current_state]["transition"];
        if (this.current_state !== "finish") {
            transition[ctx.state_name().getText()] = {};

            let event = {};
            event["service"] = ctx.event().event_service().getText().substring(1);
            if (ctx.event().event_path() != null) {
                event["path"] = ctx.event().event_path().getText();
            }
            event["name"] = ctx.event().event_name().getText();
            if (ctx.event().event_args() != null) {
                let args = [];
                for (let event_arg of ctx.event().event_args().ID()) {
                    if (args.indexOf(event_arg.getText()) > -1) {
                        throw ("存在相同的参数名：" + event_arg.getText());
                    }
                    args.push(event_arg.getText());
                }
                event["args"] = args;
            }

            transition[ctx.state_name().getText()]["event"] = event;
        } else {
            transition[ctx.getText()] = null;
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
        // todo
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
        // todo
        this.necessary_states = new Set(["initial", "finish"]);
    }

    /**
     * 取色块定义相关的内容
     */
    fetchServiceStates() {
        let service_states = null;
        try {
            // todo
            service_states = JSON.parse(fs.readFileSync('./fixtures/service-states.json', 'utf-8'));
        } catch (e) {
            console.error(e)
            throw ("取色块定义出错！");
        }

        return service_states;
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

        throw("不合法的色块：" + state);
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

    checkStateSingle(state) {
        if (state in this.state_machine["states"]) {
            throw ("状态机名称冲突：" + state);
        }
    }

    checkStateKeyword(state) {
        if (this.keywords_state.has(state)) {
            throw ("关键字冲突：" + state);
        }
    }

    /**
     * 状态机状态完整性校验
     */
    checkStateComplete() {
        for (let necessary_state of this.necessary_states) {
            if (!necessary_state in this.state_machine["states"]) throw ("缺少必要的状态：" + necessary_state);
        }
    }
}

exports.SMGenerator = SMGenerator2;
