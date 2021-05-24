import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event, EventTool} from "../index";
import moment = require("moment");

export class RelativeTimeEventTranslateStrategy implements EventTranslateStrategy{
    getEventName(): string {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }

    translate(event:Event): string {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];

        let seconds = elapsed * EventTool.perSeconds4TimeUnit(timeUnit);
        if (seconds <= 60 * 60 * 24) {
            let date = new Date(seconds * 1000);
            return `${moment(date).utc().format("HH:mm")}之后，合约转变到状态${event.state}`;
        } else {
            let date = new Date();
            date.setSeconds(date.getSeconds() + seconds);
            return `于${moment(date).format("YYYY/MM/DD HH:mm")}，合约转变到状态${event.state}`;
        }
    }
    static EVENT_NAME: string = "RelativeTimeEvent";
}
