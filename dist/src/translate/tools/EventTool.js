"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity = exports.EventTool = void 0;
const index_1 = require("../index");
const templates = {
    "CycleEndEvent": {
        "Strategy": "于%s%s后的第一个周期点，进入 %s",
        "UnFinish": "%s%s之后，将进入 %s",
        "Finished": "%s%s结束，已进入 %s"
    },
    "RelativeTimeEvent": {
        "Strategy": "于%s%s后的第一个周期点，进入 %s",
        "UnFinish": "%s%s之后，将进入 %s",
        "Finished": "%s%s结束，已进入 %s"
    },
    "TimeEvent": {
        "Strategy": "于%s，进入 %s"
    },
    "TransactionEvent": {
        "Strategy": "支付 %s枚 羽币%s，进入 %s",
        "UnFinish": "支付 %s枚 羽币%s，可进入 %s",
        "Finished": "已支付 %s枚 羽币%s，进入 %s"
    }
};
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
    static translateEventArg(eventName, argName, argValue) {
        let factory = new index_1.EventTranslateStrategyFactory();
        let strategy = factory.getEventTranslateStrategy(eventName);
        if (strategy != null) {
            return strategy.translate4EventArg(argName, argValue);
        }
        return "";
    }
    static report(events, serviceStates) {
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
            let result = eventTranslateStrategy.translate4Strategy(event, serviceStates);
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
    "minute": "分钟",
    "cycle": "个周期"
};
/**
 * 事件
 */
class EventEntity {
}
exports.EventEntity = EventEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9FdmVudFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXVEO0FBRXZELE1BQU0sU0FBUyxHQUFHO0lBQ2QsZUFBZSxFQUFFO1FBQ2IsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxVQUFVLEVBQUUsZUFBZTtRQUMzQixVQUFVLEVBQUUsZUFBZTtLQUM5QjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsVUFBVSxFQUFFLGVBQWU7UUFDM0IsVUFBVSxFQUFFLGVBQWU7S0FDOUI7SUFDRCxXQUFXLEVBQUU7UUFDVCxVQUFVLEVBQUUsV0FBVztLQUMxQjtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxVQUFVLEVBQUUsb0JBQW9CO0tBQ25DO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBYSxTQUFTO0lBRWxCOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsTUFBYztRQUNoRCxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsT0FBZSxFQUFFLFFBQWdCO1FBQ3pFLElBQUksT0FBTyxHQUFHLElBQUkscUNBQTZCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sUUFBUSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBcUIsRUFBRSxhQUF1QjtRQUN4RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQ0FBNkIsRUFBRSxDQUFDO1FBQ2xELEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRSxJQUFJLHNCQUFzQixJQUFJLElBQUksRUFBRTtnQkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxNQUFNLEdBQUcsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBYUQsV0FBVztJQUNYLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFnQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDWixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBZ0I7UUFDdkMsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLE1BQU07Z0JBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDOUIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEtBQUssTUFBTTtnQkFDUCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QixLQUFLLEtBQUs7Z0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUN4QixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2QixLQUFJLE1BQU07Z0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUssUUFBUTtnQkFDVCxPQUFPLEVBQUUsQ0FBQztZQUNkO2dCQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMxQztJQUNMLENBQUM7O0FBN0VMLDhCQThFQztBQXJDRyxZQUFZO0FBQ0wseUJBQWUsR0FBRztJQUNyQixNQUFNLEVBQUUsR0FBRztJQUNYLE9BQU8sRUFBRSxJQUFJO0lBQ2IsTUFBTSxFQUFFLEtBQUs7SUFDYixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBOEJOOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0NBT3ZCO0FBUEQsa0NBT0MifQ==