import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event} from "../index";

export class TerminateEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return TerminateEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: Event, isSign?: boolean): string {
        return "停止接收事件";
    }

    static EVENT_NAME: string = "terminate";
}
