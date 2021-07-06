import { EventTranslateInfo, EventTranslateStrategy } from "./EventTranslateStrategy";
import { EventEntity } from "../tools/EventTool";
export declare class TerminateEventTranslateStrategy implements EventTranslateStrategy {
    getEventName(): string;
    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo;
    static EVENT_NAME: string;
}
