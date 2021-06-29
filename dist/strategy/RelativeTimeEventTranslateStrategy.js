"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeTimeEventTranslateStrategy = void 0;
const index_1 = require("../index");
const moment = require("moment");
class RelativeTimeEventTranslateStrategy {
    getEventName() {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        if (isSign) {
            let seconds = elapsed * index_1.EventTool.perSeconds4TimeUnit(timeUnit);
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
                elapsed *= 4;
                timeUnit = "hour";
            }
            return `${elapsed}${index_1.EventTool.getName4TimeUnit(timeUnit)}之后，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
        }
    }
}
exports.RelativeTimeEventTranslateStrategy = RelativeTimeEventTranslateStrategy;
RelativeTimeEventTranslateStrategy.EVENT_NAME = "RelativeTimeEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvUmVsYXRpdmVUaW1lRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxvQ0FBbUQ7QUFDbkQsaUNBQWtDO0FBRWxDLE1BQWEsa0NBQWtDO0lBRTNDLFlBQVk7UUFDUixPQUFPLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUFnQjtRQUNwQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsaUJBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxJQUFJLE9BQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxlQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7YUFDaEc7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksZUFBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ3BHO1NBQ0o7YUFBTTtZQUNILElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsQ0FBQztnQkFDYixRQUFRLEdBQUcsTUFBTSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxHQUFHLE9BQU8sR0FBRyxpQkFBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLGVBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztTQUM1RztJQUVMLENBQUM7O0FBNUJMLGdGQStCQztBQURVLDZDQUFVLEdBQVcsbUJBQW1CLENBQUMifQ==