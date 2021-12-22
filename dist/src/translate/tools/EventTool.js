"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity = exports.EventTool = void 0;
const index_1 = require("../index");
/**
 * 事件工具
 */
class EventTool {
    static report(events) {
        let results = [];
        if (events == null || events.length == 0) {
            return results;
        }
        let factory = new index_1.EventTranslateStrategyFactory();
        for (let event of events) {
            let eventTranslateStrategy = factory.getEventTranslateStrategy(event.name);
            if (eventTranslateStrategy == null) {
                throw new Error(`不支持该事件：${event.name}`);
            }
            let result = eventTranslateStrategy.translate(event);
            results.push(result);
        }
        return results;
    }
    // 取时间单位的名称
    static getName4TimeUnit(timeUnit) {
        return this.timeUnitNameMap[timeUnit];
    }
    // 将时间单位换算成秒
    static perSeconds4TimeUnit(timeUnit) {
        switch (timeUnit) {
            case "year":
                return 60 * 60 * 24 * 365;
            case "month":
                return 60 * 60 * 24 * 30;
            case "week":
                return 60 * 60 * 24 * 7;
            case "day":
                return 60 * 60 * 24;
            case "cycle":
                return 60 * 60 * 4;
            case "hour":
                return 60 * 60;
            case "minute":
                return 60;
            default:
                throw new Error("参数错误${timeUnit}");
        }
    }
}
exports.EventTool = EventTool;
// 时间单位名称映射表
EventTool.timeUnitNameMap = {
    "year": "年",
    "month": "个月",
    "week": "个星期",
    "day": "天",
    "hour": "小时",
    "minute": "分钟"
};
/**
 * 事件
 */
class EventEntity {
}
exports.EventEntity = EventEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9FdmVudFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXVEO0FBRXZEOztHQUVHO0FBQ0gsTUFBYSxTQUFTO0lBRWxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBcUI7UUFDL0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELElBQUksT0FBTyxHQUFHLElBQUkscUNBQTZCLEVBQUUsQ0FBQztRQUNsRCxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN0QixJQUFJLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxzQkFBc0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzQztZQUNELElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQVlELFdBQVc7SUFDWCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO0lBQ1osTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQWdCO1FBQ3ZDLFFBQVEsUUFBUSxFQUFFO1lBQ2QsS0FBSyxNQUFNO2dCQUNQLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQzlCLEtBQUssT0FBTztnQkFDUixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUM3QixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUIsS0FBSyxLQUFLO2dCQUNOLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkIsS0FBSSxNQUFNO2dCQUNOLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxFQUFFLENBQUM7WUFDZDtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDOztBQXpETCw4QkEwREM7QUFwQ0csWUFBWTtBQUNMLHlCQUFlLEdBQUc7SUFDckIsTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUUsSUFBSTtJQUNiLE1BQU0sRUFBRSxLQUFLO0lBQ2IsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsSUFBSTtJQUNaLFFBQVEsRUFBRSxJQUFJO0NBQ2pCLENBQUM7QUE4Qk47O0dBRUc7QUFDSCxNQUFhLFdBQVc7Q0FLdkI7QUFMRCxrQ0FLQyJ9