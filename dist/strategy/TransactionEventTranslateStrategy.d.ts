import { EventTranslateStrategy } from "./EventTranslateStrategy";
import { Event } from "../index";
export declare class TransactionEventTranslateStrategy implements EventTranslateStrategy {
    static REGEX_ARG_ACCOUNT: string;
    getEventName(): string;
    translate(event: Event, isSign?: boolean): string;
    static EVENT_NAME: string;
}
