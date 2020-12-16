var resourcePolicyVisitor = require('./gen2/resourcePolicyVisitor').resourcePolicyVisitor

class SMGenerator2 extends resourcePolicyVisitor {

    constructor(errors) {
        super();
        this.errors = errors;
        this.state_machine = {};
        this.current_state = null;
        this.current_expression = null;
        this.service_state_constant_map = new Map();
    }

    visitPolicy(ctx) {
        this.state_machine["contract"] = {};
        this.state_machine['declarations'] = {}
        this.state_machine['states'] = {};

        return super.visitPolicy(ctx);
    }

    visitSubject(ctx) {
        let contract = this.state_machine["contract"];
        contract["service"] = ctx.subject_service().getText().substring(1);
        contract["organization"] = ctx.user_organization_name().getText().substring(1);
        contract["id"] = ctx.SUBJECT_ID().getText().substring(1);

        return super.visitSubject(ctx);
    }

    visitDeclaration_section(ctx) {
        let declarations = this.state_machine["declarations"];
        declarations["service_state_constants"] = [];
        declarations["expressions"] = [];

        return super.visitDeclaration_section(ctx);
    }

    visitService_state_constant(ctx) {
        this.service_state_constant_map.set(ctx.type.text, ctx.service_state().getText());
        let service_state_constants = this.state_machine["declarations"]["service_state_constants"];
        let service_state = {
            scope: ctx.type.text,
            state: ctx.service_state().getText()
        };
        service_state_constants.push(service_state);

        return super.visitService_state_constant(ctx);
    }

    visitExpression_assignment(ctx) {
        let expressions = this.state_machine["declarations"]["expressions"];

        let func_name = ctx.expression_handle().getText();
        for (let ex of expressions) {
            if (ex["func_name"] === func_name) {
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
            func_name: func_name,
            func_args: func_args,
            func_body: ctx.expression().getText()
        };
        expressions.push(expression);
        this.current_expression = func_name;

        return super.visitExpression_assignment(ctx);
    }

    visitVariableArg(ctx) {
        let expressions = this.state_machine["declarations"]["expressions"];
        let expression = null;
        for (let ex of expressions) {
            if (ex["func_name"] === this.current_expression) {
                expression = ex;
            }
        }
        if (expression["func_args"].indexOf(ctx.ID().getText()) === -1) {
            throw ("无效的参数名：" + ctx.ID().getText());
        }

        return super.visitVariableArg(ctx);
    }

    visitState_definition(ctx) {
        this.current_state = ctx.state_name().getText();

        let service_states = [];
        for (let scope of this.service_state_constant_map.keys()) {
            if (scope === "always") {
                service_states.push(this.service_state_constant_map.get(scope));
            }
        }
        this.state_machine["states"][this.current_state] = {
            authorization: [],
            transition: {},
            service_states: service_states
        };

        return super.visitState_definition(ctx);
    }

    visitService_state_definition(ctx) {
        let service_states = this.state_machine["states"][this.current_state]["service_states"];

        for (let st_ctx of ctx.service_state()) {
            if (service_states.indexOf(st_ctx.getText()) === -1) {
                service_states.push(st_ctx.getText());
            }
        }

        return super.visitService_state_definition(ctx);
    }

    visitState_transition(ctx) {
        let transition = this.state_machine["states"][this.current_state]["transition"];
        if (ctx.state_name() != null) {
            transition[ctx.state_name().getText()] = null;

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

            transition["event"] = event;
        } else {
            transition["terminate"] = null;
        }

        return super.visitState_transition(ctx);
    }
}

exports.SMGenerator = SMGenerator2;
