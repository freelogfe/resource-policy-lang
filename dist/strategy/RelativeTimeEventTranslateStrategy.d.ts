import { EventTranslateInfo, EventTranslateStrategy } from "./EventTranslateStrategy";
import { EventEntity } from "../tools/EventTool";
export declare class RelativeTimeEventTranslateStrategy implements EventTranslateStrategy {
    translate4Strategy(event: EventEntity): EventTranslateInfo;
    translate4UnFinish(event: EventEntity): EventTranslateInfo;
    translate4Finished(event: EventEntity): EventTranslateInfo;
    getEventName(): string;
    static EVENT_NAME: string;
}
