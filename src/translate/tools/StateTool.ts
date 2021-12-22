export class StateTool {

    static report(state: string): StateInfo {
        return {
            origin: state,
            content: `${this.getName4State(state)}`
        };
    }

    // 状态机状态名称映射表
    static stateNameMap = {
        initial: "初始状态"
    };

    // 取状态名
    static getName4State(state: string): string {
        if (state in this.stateNameMap) {
            return this.stateNameMap[state];
        } else {
            return `状态${state}`;
        }
    }
}

export class StateInfo {
    // 原始内容
    origin: any;
    // 翻译文本
    content: string;
}
