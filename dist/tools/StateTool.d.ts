export declare class StateTool {
    static report(state: string): StateInfo;
    static stateNameMap: {
        initial: string;
        finish: string;
    };
    static getName4State(state: string): string;
}
export declare class StateInfo {
    origin: any;
    content: string;
}
