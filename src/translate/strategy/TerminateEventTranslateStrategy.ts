import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity} from "../tools/EventTool";

export class TerminateEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return TerminateEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo {
        return {
            origin: event,
            content: "停止接收事件"
        };
    }

    static EVENT_NAME: string = "terminate";
}
