import { EventTranslateStrategy } from "./strategy/EventTranslateStrategy";
export declare class EventTranslateStrategyFactory {
    eventTranslateStrategyMap: Map<string, EventTranslateStrategy>;
    constructor();
    getEventTranslateStrategy(eventName: string): EventTranslateStrategy;
}
export declare class ContractElementInfo {
    origin: any;
    content: string;
}
