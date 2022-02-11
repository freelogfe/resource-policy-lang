/**
 * 状态机状态工具
 */
export declare class StateTool {
    static report(state: string): StateInfo;
    static getName4State(state: string): string;
}
export declare class StateInfo {
    origin: any;
    content: string;
}
