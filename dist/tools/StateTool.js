"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateInfo = exports.StateTool = void 0;
class StateTool {
    static report(state) {
        return {
            origin: state,
            content: `${this.getName4State(state)}`
        };
    }
    static getName4State(state) {
        if (state in this.stateNameMap) {
            return this.stateNameMap[state];
        }
        else {
            return `状态${state}`;
        }
    }
}
exports.StateTool = StateTool;
// 状态机状态名称映射表
StateTool.stateNameMap = {
    "initial": "初始状态",
    "finish": "终止状态"
};
class StateInfo {
}
exports.StateInfo = StateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9TdGF0ZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxTQUFTO0lBRWxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUN2QixPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBUUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFhO1FBQzlCLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU07WUFDSCxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDOztBQXJCTCw4QkFzQkM7QUFiRyxhQUFhO0FBQ04sc0JBQVksR0FBRztJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtDQUNuQixDQUFDO0FBV04sTUFBYSxTQUFTO0NBR3JCO0FBSEQsOEJBR0MifQ==