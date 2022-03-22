import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity} from "../tools/EventTool";

export class TerminateEventTranslateStrategy implements EventTranslateStrategy {

    translate4EventArg(argName: string, argValue: string): string {
        return "";
    }

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo {
        if (serviceStates != null && serviceStates.indexOf("active") != -1) {
            return {
                origin: event,
                content: "已获得永久授权"
            };
        } else {
            return {
                origin: event,
                content: "停止接收事件"
            };
        }
    }

    translate4UnFinish(event: EventEntity): EventTranslateInfo {
        return this.translate4Strategy(event);
    }

    translate4Finished(event: EventEntity): EventTranslateInfo {
        return this.translate4Strategy(event);
    }

    getEventName(): string {
        return TerminateEventTranslateStrategy.EVENT_NAME;
    }

    static EVENT_NAME: string = "terminate";
}
