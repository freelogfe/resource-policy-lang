export interface StateMachine {
    audiences: Audience[];
    declarations: Declarations;
    states: States;
    description: {
        symbolArgs: {
            envArgs: string[];
        };
    };
}
export interface Audience {
    name: string;
    type: string;
}
export interface Declarations {
    serviceStates: ServiceState[];
    serviceStateConstants: ServiceStateConstant[];
    expressions: Expression[];
}
export interface ServiceState {
    name: string;
    type: string;
}
export interface ServiceStateConstant {
    scope: string;
    state: string;
}
export interface Expression {
    functionName: string;
    functionArgs: string[];
    functionBody: string;
}
export interface States {
    state: {
        serviceStates: string[];
        transitions: Transition[];
        isInitial: boolean;
    };
}
export interface Transition {
    name: string;
    service: string;
    path: string;
    toState: string;
    args: {
        argName: string;
    };
    code: string;
    description: string;
    isSingleton: boolean;
}
