import { EventTranslateInfo, EventTranslateStrategy } from "./EventTranslateStrategy";
import { EventEntity } from "../tools/EventTool";
export declare class TransactionEventTranslateStrategy implements EventTranslateStrategy {
    static REGEX_ARG_ACCOUNT: string;
    getEventName(): string;
    translate(event: EventEntity): EventTranslateInfo;
    static EVENT_NAME: string;
}
