import { EventTranslateInfo } from "../strategy/EventTranslateStrategy";
/**
 * 状态机事件工具
 */
export declare class EventTool {
    /**
     * 取翻译模板
     * @param eventName 事件名
     * @param status 事件状态（Strategy：策略 Unfinished：未执行 Finished：已执行）
     */
    static getTemplate(eventName: string, status: string): string;
    static translateEventArg(eventName: string, argName: string, argValue: string): string;
    static report(events: EventEntity[], serviceStates: string[]): EventTranslateInfo[];
    static timeUnitNameMap: {
        year: string;
        month: string;
        week: string;
        day: string;
        hour: string;
        minute: string;
        cycle: string;
    };
    static getName4TimeUnit(timeUnit: string): string;
    static perSeconds4TimeUnit(timeUnit: string): number;
}
/**
 * 事件
 */
export declare class EventEntity {
    code?: string;
    name: string;
    args?: {};
    toState?: string;
}
