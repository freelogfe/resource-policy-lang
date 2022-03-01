"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEntity = exports.EventTool = void 0;
const index_1 = require("../index");
const templates = {
    "CycleEndEvent": {
        "Strategy": "于%s%s后的第一个周期点，进入 %s",
        "UnFinish": "%s之后，将进入 %s",
        "Finished": "%s结束，已进入 %s"
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
    "minute": "分钟"
};
/**
 * 事件
 */
class EventEntity {
}
exports.EventEntity = EventEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9FdmVudFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXVEO0FBRXZELE1BQU0sU0FBUyxHQUFHO0lBQ2QsZUFBZSxFQUFFO1FBQ2IsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxVQUFVLEVBQUUsYUFBYTtRQUN6QixVQUFVLEVBQUUsYUFBYTtLQUM1QjtJQUNELG1CQUFtQixFQUFFO1FBQ2pCLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsVUFBVSxFQUFFLGVBQWU7UUFDM0IsVUFBVSxFQUFFLGVBQWU7S0FDOUI7SUFDRCxXQUFXLEVBQUU7UUFDVCxVQUFVLEVBQUUsV0FBVztLQUMxQjtJQUNELGtCQUFrQixFQUFFO1FBQ2hCLFVBQVUsRUFBRSxtQkFBbUI7UUFDL0IsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxVQUFVLEVBQUUsb0JBQW9CO0tBQ25DO0NBQ0osQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBYSxTQUFTO0lBRWxCOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQWlCLEVBQUUsTUFBYztRQUNoRCxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFxQixFQUFFLGFBQXVCO1FBQ3hELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEMsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFDQUE2QixFQUFFLENBQUM7UUFDbEQsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksc0JBQXNCLElBQUksSUFBSSxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLE1BQU0sR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFZRCxXQUFXO0lBQ1gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQWdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWTtJQUNaLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFnQjtRQUN2QyxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssTUFBTTtnQkFDUCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUM5QixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDN0IsS0FBSyxNQUFNO2dCQUNQLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEtBQUssS0FBSztnQkFDTixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLEtBQUssT0FBTztnQkFDUixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksTUFBTTtnQkFDTixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbkIsS0FBSyxRQUFRO2dCQUNULE9BQU8sRUFBRSxDQUFDO1lBQ2Q7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzFDO0lBQ0wsQ0FBQzs7QUFsRUwsOEJBbUVDO0FBcENHLFlBQVk7QUFDTCx5QkFBZSxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLElBQUk7SUFDYixNQUFNLEVBQUUsS0FBSztJQUNiLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLElBQUk7SUFDWixRQUFRLEVBQUUsSUFBSTtDQUNqQixDQUFDO0FBOEJOOztHQUVHO0FBQ0gsTUFBYSxXQUFXO0NBT3ZCO0FBUEQsa0NBT0MifQ==