import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";

export class TimeEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo {
        return {
            origin: event,
            content: `于${event.args["dateTime"]}，进入 ${StateTool.report(event.state).content}`
        };
    }

    static EVENT_NAME: string = "TimeEvent";
}
