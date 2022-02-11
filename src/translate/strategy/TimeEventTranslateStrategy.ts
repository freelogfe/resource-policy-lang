import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";

const util = require("util");

export class TimeEventTranslateStrategy implements EventTranslateStrategy {

    translate4Strategy(event: EventEntity): EventTranslateInfo {
        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Strategy"), event.args["dateTime"], StateTool.report(event.toState).content)
        };
    }

    translate4UnFinish(event: EventEntity): EventTranslateInfo {
        return this.translate4Strategy(event);
    }

    translate4Finished(event: EventEntity): EventTranslateInfo {
        return this.translate4Strategy(event);
    }

    getEventName(): string {
        return TimeEventTranslateStrategy.EVENT_NAME;
    }

    static EVENT_NAME: string = "TimeEvent";
}
