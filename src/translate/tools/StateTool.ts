import {FSMEntity} from "./FSMTool";
import {TerminateEventTranslateStrategy} from "../strategy/TerminateEventTranslateStrategy";

/**
 * 状态机状态工具
 */
export class StateTool {

    static report(state: string): StateInfo {
        return {
            origin: state,
            content: `${this.getName4State(state)}`
        };
    }

    static reportByFSMEntity(fsmEntity: FSMEntity): StateInfo {
        return {
            origin: fsmEntity.name,
            content: `${this.getName4StateByFSMEntity(fsmEntity)}`
        }
    }

    // 取状态名
    static getName4State(state: string): string {
        switch (state) {
            case "initial":
                return "初始状态";
            default:
                return `状态${state}`;
        }
    }

    static getName4StateByFSMEntity(fsmEntity: FSMEntity): string {
        if (fsmEntity.events[0].name == TerminateEventTranslateStrategy.EVENT_NAME) {
            return "终止状态";
        } else {
            return this.getName4State(fsmEntity.name);
        }
    }
}

export class StateInfo {
    // 原始内容
    origin: any;
    // 翻译文本
    content: string;
}
