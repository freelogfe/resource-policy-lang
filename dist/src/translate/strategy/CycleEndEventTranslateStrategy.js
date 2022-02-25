"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleEndEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const util = require("util");
class CycleEndEventTranslateStrategy {
    translate4Strategy(event, serviceStates) {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Strategy"), cycleCount, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content),
        };
    }
    translate4UnFinish(event) {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "UnFinish"), cycleCount, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content),
        };
    }
    translate4Finished(event) {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Finished"), cycleCount, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content),
        };
    }
    getEventName() {
        return CycleEndEventTranslateStrategy.EVENT_NAME;
    }
}
exports.CycleEndEventTranslateStrategy = CycleEndEventTranslateStrategy;
CycleEndEventTranslateStrategy.EVENT_NAME = "CycleEndEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGVFbmRFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9DeWNsZUVuZEV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQTBEO0FBQzFELGtEQUE2QztBQUc3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsTUFBYSw4QkFBOEI7SUFFdkMsa0JBQWtCLENBQUMsS0FBa0IsRUFBRSxhQUF3QjtRQUMzRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsOEJBQThCO1FBQzlCLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUNyQixVQUFVLElBQUksQ0FBQyxDQUFDO1lBQ2hCLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMxSyxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0Qyw4QkFBOEI7UUFDOUIsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQ3JCLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDaEIsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUVELE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzFLLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLDhCQUE4QjtRQUM5QixJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDckIsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUNoQixRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsT0FBTztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDMUssQ0FBQztJQUNOLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyw4QkFBOEIsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQzs7QUFqREwsd0VBb0RDO0FBRFUseUNBQVUsR0FBVyxlQUFlLENBQUMifQ==