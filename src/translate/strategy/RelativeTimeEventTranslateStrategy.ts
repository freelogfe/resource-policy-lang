import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";
import moment = require("moment");

export class RelativeTimeEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];

        if (isSign) {
            let seconds = elapsed * EventTool.perSeconds4TimeUnit(timeUnit);
            if (seconds <= 60 * 60 * 24) {
                let date = new Date(seconds * 1000);
                return {
                    content: `${moment(date).utc().format("HH:mm")}之后，进入 ${StateTool.report(event.state).content}`
                };
            } else {
                let date = new Date();
                date.setSeconds(date.getSeconds() + seconds);
                return {
                    content: `于${moment(date).format("YYYY/MM/DD HH:mm")}，进入 ${StateTool.report(event.state).content}`
                };
            }
        } else {
            if (timeUnit == "cycle") {
                elapsed *= 4;
                timeUnit = "hour";
            }
            return {
                content: `${elapsed}${EventTool.getName4TimeUnit(timeUnit)}之后，进入 ${StateTool.report(event.state).content}`
            };
        }
    }

    static EVENT_NAME: string = "RelativeTimeEvent";
}
