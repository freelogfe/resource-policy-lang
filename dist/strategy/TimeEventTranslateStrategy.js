"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEventTranslateStrategy = void 0;
const StateTool_1 = require("../tools/StateTool");
class TimeEventTranslateStrategy {
    getEventName() {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        return {
            origin: event,
            content: `于${event.args["dateTime"]}，进入 ${StateTool_1.StateTool.report(event.state).content}`
        };
    }
}
exports.TimeEventTranslateStrategy = TimeEventTranslateStrategy;
TimeEventTranslateStrategy.EVENT_NAME = "TimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNsYXRlL3N0cmF0ZWd5L1RpbWVFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGtEQUE2QztBQUU3QyxNQUFhLDBCQUEwQjtJQUVuQyxZQUFZO1FBQ1IsT0FBTywwQkFBMEIsQ0FBQyxVQUFVLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFrQixFQUFFLE1BQWdCO1FBQzFDLE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8scUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUNwRixDQUFDO0lBQ04sQ0FBQzs7QUFYTCxnRUFjQztBQURVLHFDQUFVLEdBQVcsV0FBVyxDQUFDIn0=