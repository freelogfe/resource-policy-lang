import {EventTranslateInfo} from "../strategy/EventTranslateStrategy";
import {EventTranslateStrategyFactory} from "../index";

/**
 * 事件工具
 */
export class EventTool {

    static report(events: EventEntity[]): EventTranslateInfo[] {
        let results = [];

        if (events == null || events.length == 0) {
            return results;
        }

        let factory = new EventTranslateStrategyFactory();
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

    // 时间单位名称映射表
    static timeUnitNameMap = {
        "year": "年",
        "month": "个月",
        "week": "个星期",
        "day": "天",
        "hour": "小时",
        "minute": "分钟"
    };

    // 取时间单位的名称
    static getName4TimeUnit(timeUnit: string): string {
        return this.timeUnitNameMap[timeUnit];
    }

    // 将时间单位换算成秒
    static perSeconds4TimeUnit(timeUnit: string): number {
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
            case"hour":
                return 60 * 60;
            case "minute":
                return 60;
            default:
                throw new Error("参数错误${timeUnit}");
        }
    }
}

/**
 * 事件
 */
export class EventEntity {
    id?: string;
    name: string;
    args?: {};
    state?: string;
}
