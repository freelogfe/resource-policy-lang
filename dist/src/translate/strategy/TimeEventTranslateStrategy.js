"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const util = require("util");
class TimeEventTranslateStrategy {
    translate4Strategy(event, serviceStates) {
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Strategy"), event.args["dateTime"], StateTool_1.StateTool.report(event.toState).content)
        };
    }
    translate4UnFinish(event) {
        return this.translate4Strategy(event);
    }
    translate4Finished(event) {
        return this.translate4Strategy(event);
    }
    getEventName() {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }
}
exports.TimeEventTranslateStrategy = TimeEventTranslateStrategy;
TimeEventTranslateStrategy.EVENT_NAME = "TimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdHJhbnNsYXRlL3N0cmF0ZWd5L1RpbWVFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUEwRDtBQUMxRCxrREFBNkM7QUFFN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLE1BQWEsMEJBQTBCO0lBRW5DLGtCQUFrQixDQUFDLEtBQWtCLEVBQUUsYUFBd0I7UUFDM0QsT0FBTztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUNoSixDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sMEJBQTBCLENBQUMsVUFBVSxDQUFDO0lBQ2pELENBQUM7O0FBbkJMLGdFQXNCQztBQURVLHFDQUFVLEdBQVcsV0FBVyxDQUFDIn0=