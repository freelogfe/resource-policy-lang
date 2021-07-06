import { EventTranslateInfo } from "../strategy/EventTranslateStrategy";
/**
 * 事件工具
 */
export declare class EventTool {
    static report(events: EventEntity[]): EventTranslateInfo[];
    static timeUnitNameMap: {
        year: string;
        month: string;
        week: string;
        day: string;
        hour: string;
        minute: string;
    };
    static getName4TimeUnit(timeUnit: string): string;
    static perSeconds4TimeUnit(timeUnit: string): number;
}
/**
 * 事件
 */
export declare class EventEntity {
    id?: string;
    name: string;
    args?: {};
    state?: string;
}
