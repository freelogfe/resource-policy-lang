"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeTimeEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const util = require("util");
class RelativeTimeEventTranslateStrategy {
    translate4Strategy(event) {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Strategy"), elapsed, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content),
        };
    }
    translate4UnFinish(event) {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "UnFinish"), elapsed, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content)
        };
    }
    translate4Finished(event) {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Finished"), elapsed, EventTool_1.EventTool.getName4TimeUnit(timeUnit), StateTool_1.StateTool.report(event.toState).content)
        };
    }
    getEventName() {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }
}
exports.RelativeTimeEventTranslateStrategy = RelativeTimeEventTranslateStrategy;
RelativeTimeEventTranslateStrategy.EVENT_NAME = "RelativeTimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrREFBMEQ7QUFDMUQsa0RBQTZDO0FBRzdDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QixNQUFhLGtDQUFrQztJQUUzQyxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsOEJBQThCO1FBQzlCLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxDQUFDO1lBQ2IsUUFBUSxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUVELE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3ZLLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLDhCQUE4QjtRQUM5QixJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUNiLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDckI7UUFFRCxPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN2SyxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0Qyw4QkFBOEI7UUFDOUIsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDYixRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3JCO1FBRUQsT0FBTztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDdkssQ0FBQztJQUNOLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUM7SUFDekQsQ0FBQzs7QUFqREwsZ0ZBb0RDO0FBRFUsNkNBQVUsR0FBVyxtQkFBbUIsQ0FBQyJ9