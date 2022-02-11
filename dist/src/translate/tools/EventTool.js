"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity = exports.EventTool = void 0;
const index_1 = require("../index");
const templates = require(`${process.cwd()}/resources/translate_templates.json`);
/**
 * 状态机事件工具
 */
class EventTool {
    /**
     * 取翻译模板
     * @param eventName 事件名
     * @param status 事件状态（Strategy：策略 Unfinished：未执行 Finished：已执行）
     */
    static getTemplate(eventName, status) {
        return templates[eventName][status];
    }
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
            let result = eventTranslateStrategy.translate4Strategy(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9FdmVudFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXVEO0FBRXZELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUscUNBQXFDLENBQUMsQ0FBQztBQUVqRjs7R0FFRztBQUNILE1BQWEsU0FBUztJQUVsQjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFpQixFQUFFLE1BQWM7UUFDaEQsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBcUI7UUFDL0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELElBQUksT0FBTyxHQUFHLElBQUkscUNBQTZCLEVBQUUsQ0FBQztRQUNsRCxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN0QixJQUFJLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0UsSUFBSSxzQkFBc0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzQztZQUNELElBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBWUQsV0FBVztJQUNYLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDWixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBZ0I7UUFDdkMsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLE1BQU07Z0JBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDOUIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEtBQUssTUFBTTtnQkFDUCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QixLQUFLLEtBQUs7Z0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QixLQUFJLE1BQU07Z0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUssUUFBUTtnQkFDVCxPQUFPLEVBQUUsQ0FBQztZQUNkO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7O0FBbEVMLDhCQW1FQztBQXBDRyxZQUFZO0FBQ0wseUJBQWUsR0FBRztJQUNyQixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQThCTjs7R0FFRztBQUNILE1BQWEsV0FBVztDQU92QjtBQVBELGtDQU9DIn0=