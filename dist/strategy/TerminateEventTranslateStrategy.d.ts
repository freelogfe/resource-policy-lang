import { EventTranslateStrategy } from "./EventTranslateStrategy";
import { Event } from "../index";
export declare class TerminateEventTranslateStrategy implements EventTranslateStrategy {
    getEventName(): string;
    translate(event: Event, isSign?: boolean): string;
    static EVENT_NAME: string;
}
