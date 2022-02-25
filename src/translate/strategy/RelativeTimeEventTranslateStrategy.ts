import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";


const util = require("util");

export class RelativeTimeEventTranslateStrategy implements EventTranslateStrategy {

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Strategy"), elapsed, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content),
        };
    }

    translate4UnFinish(event: EventEntity): EventTranslateInfo {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "UnFinish"), elapsed, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content)
        };
    }

    translate4Finished(event: EventEntity): EventTranslateInfo {
        let elapsed = event.args["elapsed"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            elapsed *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Finished"), elapsed, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content)
        };
    }

    getEventName(): string {
        return RelativeTimeEventTranslateStrategy.EVENT_NAME;
    }

    static EVENT_NAME: string = "RelativeTimeEvent";
}
