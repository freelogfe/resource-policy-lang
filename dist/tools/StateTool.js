"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateInfo = exports.StateTool = void 0;
/**
 * 状态机状态工具
 */
class StateTool {
    static report(state) {
        return {
            origin: state,
            content: `${this.getName4State(state)}`
        };
    }
    // 取状态名
    static getName4State(state) {
        switch (state) {
            case "initial":
                return "初始状态";
            default:
                return `状态${state}`;
        }
    }
}
exports.StateTool = StateTool;
class StateInfo {
}
exports.StateInfo = StateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9TdGF0ZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0dBRUc7QUFDSCxNQUFhLFNBQVM7SUFFbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQ3ZCLE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDMUMsQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPO0lBQ1AsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFhO1FBQzlCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxTQUFTO2dCQUNWLE9BQU8sTUFBTSxDQUFDO1lBQ2xCO2dCQUNJLE9BQU8sS0FBSyxLQUFLLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7Q0FDSjtBQWxCRCw4QkFrQkM7QUFFRCxNQUFhLFNBQVM7Q0FLckI7QUFMRCw4QkFLQyJ9