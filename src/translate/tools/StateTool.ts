export class StateTool {

    static report(state: string): StateInfo {
        return {
            origin: state,
            content: `${this.getName4State(state)}`
        };
    }

    // 状态机状态名称映射表
    static stateNameMap = {
        initial: "初始状态",
        finish: "终止状态"
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
    origin: any;
    content: string;
}
