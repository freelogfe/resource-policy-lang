import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event, FSMTool} from "../index";

export class TimeEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: Event, isSign?: boolean): string {
        return `于${event.args["dateTime"]}，${FSMTool.parseTransitionInfo(event.state)}`;
    }

    static EVENT_NAME: string = "TimeEvent";
}
