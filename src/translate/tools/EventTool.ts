import {EventTranslateInfo} from "../strategy/EventTranslateStrategy";
import {EventTranslateStrategyFactory} from "../index";

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
export class EventTool {

    /**
     * 取翻译模板
     * @param eventName 事件名
     * @param status 事件状态（Strategy：策略 Unfinished：未执行 Finished：已执行）
     */
    static getTemplate(eventName: string, status: string): string {
        return templates[eventName][status];
    }

    static report(events: EventEntity[], serviceStates: string[]): EventTranslateInfo[] {
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
            let result = eventTranslateStrategy.translate4Strategy(event, serviceStates);
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
    code?: string;
    // 事件名
    name: string;
    args?: {};
    // 事件目标状态
    toState?: string;
}
