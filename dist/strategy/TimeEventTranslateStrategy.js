"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEventTranslateStrategy = void 0;
const index_1 = require("../index");
class TimeEventTranslateStrategy {
    getEventName() {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        return `于${event.args["dateTime"]}，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
    }
}
exports.TimeEventTranslateStrategy = TimeEventTranslateStrategy;
TimeEventTranslateStrategy.EVENT_NAME = "TimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNsYXRlL3N0cmF0ZWd5L1RpbWVFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG9DQUF3QztBQUV4QyxNQUFhLDBCQUEwQjtJQUVuQyxZQUFZO1FBQ1IsT0FBTywwQkFBMEIsQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsTUFBZ0I7UUFDcEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksZUFBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQ3BGLENBQUM7O0FBUkwsZ0VBV0M7QUFEVSxxQ0FBVSxHQUFXLFdBQVcsQ0FBQyJ9