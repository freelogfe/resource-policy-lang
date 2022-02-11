"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const util = require("util");
class TimeEventTranslateStrategy {
    translate4Strategy(event) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNsYXRlL3N0cmF0ZWd5L1RpbWVFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGtEQUEwRDtBQUMxRCxrREFBNkM7QUFFN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdCLE1BQWEsMEJBQTBCO0lBRW5DLGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDaEosQ0FBQztJQUNOLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLDBCQUEwQixDQUFDLFVBQVUsQ0FBQztJQUNqRCxDQUFDOztBQW5CTCxnRUFzQkM7QUFEVSxxQ0FBVSxHQUFXLFdBQVcsQ0FBQyJ9