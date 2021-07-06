import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";
import moment = require("moment");

export class CycleEndEventTranslateStrategy implements EventTranslateStrategy {

    getEventName(): string {
        return CycleEndEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];

        if (isSign) {
            let seconds = cycleCount * EventTool.perSeconds4TimeUnit(timeUnit);
            if (seconds <= 60 * 60 * 24) {
                let date = new Date(seconds * 1000);
                return {
                    origin: event,
                    content: `${moment(date).utc().format("HH:mm")}之后，进入 ${StateTool.report(event.state).content}`
                };
            } else {
                let date = new Date();
                date.setSeconds(date.getSeconds() + seconds);
                return {
                    origin: event,
                    content: `于${moment(date).format("YYYY/MM/DD HH:mm")}，进入 ${StateTool.report(event.state).content}`
                };
            }
        } else {
            if (timeUnit == "cycle") {
                cycleCount *= 4;
                timeUnit = "hour";
            }
            return {
                origin: event,
                content: `于${cycleCount}${EventTool.getName4TimeUnit(timeUnit)}后的第一个周期点，进入 ${StateTool.report(event.state).content}`
            };
        }
    }

    static EVENT_NAME: string = "CycleEndEvent";
}
