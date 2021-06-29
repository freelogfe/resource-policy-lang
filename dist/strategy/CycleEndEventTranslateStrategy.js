"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleEndEventTranslateStrategy = void 0;
const index_1 = require("../index");
const moment = require("moment");
class CycleEndEventTranslateStrategy {
    getEventName() {
        return CycleEndEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        if (isSign) {
            let seconds = cycleCount * index_1.EventTool.perSeconds4TimeUnit(timeUnit);
            if (seconds <= 60 * 60 * 24) {
                let date = new Date(seconds * 1000);
                return `${moment(date).utc().format("HH:mm")}之后，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
            }
            else {
                let date = new Date();
                date.setSeconds(date.getSeconds() + seconds);
                return `于${moment(date).format("YYYY/MM/DD HH:mm")}，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
            }
        }
        else {
            if (timeUnit == "cycle") {
                cycleCount *= 4;
                timeUnit = "hour";
            }
            return `于${cycleCount}${index_1.EventTool.getName4TimeUnit(timeUnit)}后的第一个周期点，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
        }
    }
}
exports.CycleEndEventTranslateStrategy = CycleEndEventTranslateStrategy;
CycleEndEventTranslateStrategy.EVENT_NAME = "CycleEndEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ljbGVFbmRFdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9DeWNsZUVuZEV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQW1EO0FBQ25ELGlDQUFrQztBQUVsQyxNQUFhLDhCQUE4QjtJQUV2QyxZQUFZO1FBQ1IsT0FBTyw4QkFBOEIsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsTUFBZ0I7UUFDcEMsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFHLGlCQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsSUFBSSxPQUFPLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sZUFBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ2hHO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGVBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQzthQUNwRztTQUNKO2FBQU07WUFDSCxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7Z0JBQ3JCLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLFFBQVEsR0FBRyxNQUFNLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksVUFBVSxHQUFHLGlCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFlBQVksZUFBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ3RIO0lBQ0wsQ0FBQzs7QUEzQkwsd0VBOEJDO0FBRFUseUNBQVUsR0FBVyxlQUFlLENBQUMifQ==