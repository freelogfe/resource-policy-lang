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
    // 取状态名
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
    initial: "初始状态"
};
class StateInfo {
}
exports.StateInfo = StateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9TdGF0ZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxTQUFTO0lBRWxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUN2QixPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBT0QsT0FBTztJQUNQLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBYTtRQUM5QixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0gsT0FBTyxLQUFLLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7QUFyQkwsOEJBc0JDO0FBYkcsYUFBYTtBQUNOLHNCQUFZLEdBQUc7SUFDbEIsT0FBTyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztBQVlOLE1BQWEsU0FBUztDQUtyQjtBQUxELDhCQUtDIn0=