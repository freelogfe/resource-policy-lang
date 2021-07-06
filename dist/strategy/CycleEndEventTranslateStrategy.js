"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleEndEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const moment = require("moment");
class CycleEndEventTranslateStrategy {
    getEventName() {
        return CycleEndEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        if (isSign) {
            let seconds = cycleCount * EventTool_1.EventTool.perSeconds4TimeUnit(timeUnit);
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
                cycleCount *= 4;
                timeUnit = "hour";
            }
            return {
                origin: event,
                content: `于${cycleCount}${EventTool_1.EventTool.getName4TimeUnit(timeUnit)}后的第一个周期点，进入 ${StateTool_1.StateTool.report(event.state).content}`
            };
        }
    }
}
exports.CycleEndEventTranslateStrategy = CycleEndEventTranslateStrategy;
CycleEndEventTranslateStrategy.EVENT_NAME = "CycleEndEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGVFbmRFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9DeWNsZUVuZEV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQTBEO0FBQzFELGtEQUE2QztBQUM3QyxpQ0FBa0M7QUFFbEMsTUFBYSw4QkFBOEI7SUFFdkMsWUFBWTtRQUNSLE9BQU8sOEJBQThCLENBQUMsVUFBVSxDQUFDO0lBQ3JELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBa0IsRUFBRSxNQUFnQjtRQUMxQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUcscUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRSxJQUFJLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxPQUFPO29CQUNILE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtpQkFDakcsQ0FBQzthQUNMO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPO29CQUNILE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO2lCQUNyRyxDQUFDO2FBQ0w7U0FDSjthQUFNO1lBQ0gsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUNyQixVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNoQixRQUFRLEdBQUcsTUFBTSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTztnQkFDSCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsSUFBSSxVQUFVLEdBQUcscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO2FBQ3ZILENBQUM7U0FDTDtJQUNMLENBQUM7O0FBcENMLHdFQXVDQztBQURVLHlDQUFVLEdBQVcsZUFBZSxDQUFDIn0=