"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateInfo = exports.StateTool = void 0;
const TerminateEventTranslateStrategy_1 = require("../strategy/TerminateEventTranslateStrategy");
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
    static reportByFSMEntity(fsmEntity) {
        return {
            origin: fsmEntity.name,
            content: `${this.getName4StateByFSMEntity(fsmEntity)}`
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
    static getName4StateByFSMEntity(fsmEntity) {
        if (fsmEntity.events[0].name == TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy.EVENT_NAME) {
            return "终止状态";
        }
        else {
            return this.getName4State(fsmEntity.name);
        }
    }
}
exports.StateTool = StateTool;
class StateInfo {
}
exports.StateInfo = StateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGVUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9TdGF0ZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUdBQTRGO0FBRTVGOztHQUVHO0FBQ0gsTUFBYSxTQUFTO0lBRWxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUN2QixPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQzFDLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQW9CO1FBQ3pDLE9BQU87WUFDSCxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDdEIsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxFQUFFO1NBQ3pELENBQUE7SUFDTCxDQUFDO0lBRUQsT0FBTztJQUNQLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBYTtRQUM5QixRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssU0FBUztnQkFDVixPQUFPLE1BQU0sQ0FBQztZQUNsQjtnQkFDSSxPQUFPLEtBQUssS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQW9CO1FBQ2hELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksaUVBQStCLENBQUMsVUFBVSxFQUFFO1lBQ3hFLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztDQUNKO0FBakNELDhCQWlDQztBQUVELE1BQWEsU0FBUztDQUtyQjtBQUxELDhCQUtDIn0=