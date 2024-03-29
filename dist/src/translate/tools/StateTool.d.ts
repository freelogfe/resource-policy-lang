import { FSMEntity } from "./FSMTool";
/**
 * 状态机状态工具
 */
export declare class StateTool {
    static report(state: string): StateInfo;
    static reportByFSMEntity(fsmEntity: FSMEntity): StateInfo;
    static getName4State(state: string): string;
    static getName4StateByFSMEntity(fsmEntity: FSMEntity): string;
}
export declare class StateInfo {
    origin: any;
    content: string;
}
