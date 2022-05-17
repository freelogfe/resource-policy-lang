"use strict"

const antlr4 = require("antlr4");
const gen_dir = "./gen";
const LexToken = require(`${gen_dir}/LexToken`);
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const {FSMTool} = require("./dist/src/translate/tools/FSMTool");
const {ContractTool} = require("./dist/src/translate/tools/ContractTool");
const {UserPolicyErrorListener} = require("./UserPolicyErrorListener");
const {UserPolicyErrorLexerListener} = require("./UserPolicyErrorLexerListener");
const {EventTool} = require("./dist/src/translate/tools/EventTool");
const {StateTool} = require("./dist/src/translate/tools/StateTool");
const {AudienceTool} = require("./dist/src/translate/tools/AudienceTool")
const UserPolicyCustomVisitor = require("./UserPolicyCustomVisitor").UserPolicyCustomVisitor;

const eventDefinitionMap = {};
{
    let eventDefinitionArrayTmp = require("./resources/event_definition.json");
    for (let eventDefinition of eventDefinitionArrayTmp) {
        eventDefinitionMap[eventDefinition["code"]] = eventDefinition;
    }
}

exports.translateState = function (stateName) {
    return StateTool.getName4State(stateName);
}

exports.translateEventArg = function (eventName, argName, argValue) {
    return EventTool.translateEventArg(eventName, argName, argValue);
}

exports.reportAudiences = function (audiences) {
    let audienceInfos = AudienceTool.report(audiences);
    // 标的物翻译
    let audienceStr = audienceInfos.map(e => e.content).join("，");

    return audienceStr;
}

exports.report = function (contract) {
    let fsmStates = [];
    for (let state in contract.states) {
        fsmStates.push({
            name: state,
            serviceStates: contract.states[state].serviceStates,
            events: contract.states[state].transitions
        });
    }
    for (let fsmState of fsmStates) {
        for (let event of fsmState.events) {
            if (event.name == null && event.code != null && eventDefinitionMap[event.code] != null) {
                event.name = eventDefinitionMap[event.code].name;
            }
        }
    }

    return ContractTool.report({audiences: contract.audiences, fsmStates: fsmStates});
}

exports.transfer = function (states, fsmTransfers) {
    let fsmEntities = [];
    for (let state in states) {
        fsmEntities.push({
            name: state,
            serviceStates: states[state]["serviceStates"],
            events: states[state]["transitions"]
        });
    }

    fsmTransfers.forEach(fsmTransfer => {
        fsmTransfer.state = fsmTransfer.toState;
    });
    // 排序扭转记录
    fsmTransfers.sort(((a, b) => {
        if (a.time < b.time) {
            return -1;
        } else if (a.time > b.time) {
            return 1;
        } else {
            return 0;
        }
    }));

    return FSMTool.transfer(fsmEntities, fsmTransfers);
}

exports.compareRoutes = function (routes, routesB, options) {
    FSMTool.compareRoutes(routes, routesB, options);
}

exports.parseRoutes = function (states, stateName, routes, route) {
    FSMTool.parseRoutes(states, stateName, routes, route);
}

exports.cleanUpRoutes = function (routes) {
    return FSMTool.cleanUpRoutes(routes);
}

exports.compile = async function (policyText, targetType, targetUrl, env) {
    let chars = new antlr4.InputStream(policyText);

    let lexer = new LexToken.LexToken(chars);
    lexer.removeErrorListeners();
    let lexerErrorListener = new UserPolicyErrorLexerListener();
    lexer.addErrorListener(lexerErrorListener);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new resourcePolicy.resourcePolicy(stream);
    parser.removeErrorListeners();
    let errorListener = new UserPolicyErrorListener();
    parser.addErrorListener(errorListener);
    // 关闭恢复机制
    // parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.policy();
    if (lexerErrorListener.errors.length !== 0) {
        return {
            errors: lexerErrorListener.errors,
            errorObjects: lexerErrorListener.errorObjects
        };
    }

    let visitor = new UserPolicyCustomVisitor(targetType, targetUrl, env);
    visitor.visit(tree);
    await visitor.verify();
    return {
        state_machine: visitor.state_machine,
        warnings: visitor.warningObjects.map(wo => wo.msg),
        warningObjects: visitor.warningObjects,
        errors: [...errorListener.errors, ...visitor.errorObjects.map(eo => eo.msg)],
        errorObjects: [...errorListener.errorObjects, ...visitor.errorObjects]
    };
}
