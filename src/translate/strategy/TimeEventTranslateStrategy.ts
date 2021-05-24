import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event} from "../index";

export class TimeEventTranslateStrategy implements EventTranslateStrategy{
    getEventName(): string {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }

    translate(event:Event): string {
        return `于${event.args["dateTime"]}，合约转变到状态${event.state}`;
    }
    static EVENT_NAME: string = "TimeEvent";
}
