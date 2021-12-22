class UserPolicyDecompiler {

    decompile(result) {
        let stateMachine = result["state_machine"];

        let content = "";
        content += `\n${this.decompileAudiences(stateMachine["audiences"])}`;
        content += `\n${this.decompileDeclarations(stateMachine["declarations"])}`;
        content += `\n${this.decompileStateMachine(stateMachine["states"])}`;

        return content;
    }

    decompileAudiences(audiences) {
        return `for ${audiences.map(audience => audience.name).join(", ")}`;
    }

    decompileDeclarations(declarations) {
        let content = "";

        content += `\n${this.decompileExpressions(declarations["expressions"])}`;
        content += `\n${this.decompileServiceStateConstants(declarations["serviceStateConstants"])}`;

        return content;
    }

    decompileExpressions(expressions) {
        let content = "";
        expressions.forEach(expression => {
            content += `\n${this.decompileExpression(expression)}`;
        });
        return content;
    }

    decompileExpression(expression) {
        return `${expression["funcName"]}(${expression["funcArgs"].join(", ")})=${expression["funcBody"]}`;
    }

    decompileServiceStateConstants(serviceStateConstants) {
        let content = "";
        serviceStateConstants.forEach(serviceStateConstant => {
            content += `\n${serviceStateConstant["scope"]} ${serviceStateConstant["state"]}`;
        });
        return content;
    }

    decompileStateMachine(stateMachine) {
        let content = "";
        for (let state in stateMachine) {
            content += `\n${this.decompileMachineState(stateMachine[state], state)}`;
        }

        return content;
    }

    decompileMachineState(machineState, state) {
        let serviceStates = machineState["serviceStates"];
        let serviceStatesStr = "";
        if (serviceStates != null && serviceStates.length !== 0) {
            serviceStatesStr = `[${serviceStates.join(", ")}]`
        }

        return `${state}${serviceStatesStr}:${this.decompileTransitions(machineState["transitions"])}`;
    }

    decompileTransitions(transitions) {
        if (transitions === null || transitions.length === 0) {
            return "\n\tterminate";
        }

        let content = "";
        transitions.forEach(transition => {
            content += `\n${this.decompileTransition(transition)}`;
        });

        return content;
    }

    decompileTransition(transition) {
        let path = transition["path"];
        let pathStr = path != null ? `${path}.` : "";
        let args = transition["args"];
        let argsStr = "";
        if (args != null) {
            let argArray = [];
            for (let key in args) {
                argArray.push(`"${args[key]}"`);
            }
            argsStr = argArray.join(", ");
        }
        let eventStr = `~${transition["service"]}.${pathStr}${transition["name"]}(${argsStr}) => ${transition["toState"]}`;

        return `\t${eventStr}`;
    }
}


exports.UserPolicyDecompiler = UserPolicyDecompiler;
