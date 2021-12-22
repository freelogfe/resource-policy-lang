"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeTimeEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const moment = require("moment");
class RelativeTimeEventTranslateStrategy {
    getEventName() {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        if (isSign) {
            let seconds = elapsed * EventTool_1.EventTool.perSeconds4TimeUnit(timeUnit);
            if (seconds <= 60 * 60 * 24) {
                let date = new Date(seconds * 1000);
                return {
                    origin: event,
                    content: `${moment(date).utc().format("HH:mm")}之后，进入 ${StateTool_1.StateTool.report(event.state).content}`
                };
            }
            else {
                let date = new Date();
                date.setSeconds(date.getSeconds() + seconds);
                return {
                    origin: event,
                    content: `于${moment(date).format("YYYY/MM/DD HH:mm")}，进入 ${StateTool_1.StateTool.report(event.state).content}`
                };
            }
        }
        else {
            if (timeUnit == "cycle") {
                elapsed *= 4;
                timeUnit = "hour";
            }
            return {
                origin: event,
                content: `${elapsed}${EventTool_1.EventTool.getName4TimeUnit(timeUnit)}之后，进入 ${StateTool_1.StateTool.report(event.state).content}`
            };
        }
    }
}
exports.RelativeTimeEventTranslateStrategy = RelativeTimeEventTranslateStrategy;
RelativeTimeEventTranslateStrategy.EVENT_NAME = "RelativeTimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxrREFBMEQ7QUFDMUQsa0RBQTZDO0FBQzdDLGlDQUFrQztBQUVsQyxNQUFhLGtDQUFrQztJQUUzQyxZQUFZO1FBQ1IsT0FBTyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUM7SUFDekQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFrQixFQUFFLE1BQWdCO1FBQzFDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0QyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksT0FBTyxHQUFHLE9BQU8sR0FBRyxxQkFBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLElBQUksT0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLE9BQU87b0JBQ0gsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO2lCQUNqRyxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE9BQU87b0JBQ0gsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7aUJBQ3JHLENBQUM7YUFDTDtTQUNKO2FBQU07WUFDSCxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxHQUFHLE1BQU0sQ0FBQzthQUNyQjtZQUNELE9BQU87Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLEdBQUcsT0FBTyxHQUFHLHFCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTthQUM3RyxDQUFDO1NBQ0w7SUFDTCxDQUFDOztBQXBDTCxnRkF1Q0M7QUFEVSw2Q0FBVSxHQUFXLG1CQUFtQixDQUFDIn0=