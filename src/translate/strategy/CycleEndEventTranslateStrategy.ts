import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";


const util = require("util");

export class CycleEndEventTranslateStrategy implements EventTranslateStrategy {

    translate4EventArg(argName: string, argValue: string): string {
        if (argName == "cycleCount") {
            return argValue;
        }
        if (argName == "timeUnit") {
            return EventTool.getName4TimeUnit(argValue);
        }
        return "";
    }

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Strategy"), cycleCount, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content),
        };
    }

    translate4UnFinish(event: EventEntity): EventTranslateInfo {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "UnFinish"), cycleCount, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content),
        };
    }

    translate4Finished(event: EventEntity): EventTranslateInfo {
        let cycleCount = event.args["cycleCount"];
        let timeUnit = event.args["timeUnit"];
        // 如果timeUnit是cycle，则将其转化成hour
        if (timeUnit == "cycle") {
            cycleCount *= 4;
            timeUnit = "hour";
        }

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Finished"), cycleCount, EventTool.getName4TimeUnit(timeUnit), StateTool.report(event.toState).content),
        };
    }

    getEventName(): string {
        return CycleEndEventTranslateStrategy.EVENT_NAME;
    }

    static EVENT_NAME: string = "CycleEndEvent";
}
