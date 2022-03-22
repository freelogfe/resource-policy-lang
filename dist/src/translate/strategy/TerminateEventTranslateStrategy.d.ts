import { EventTranslateInfo, EventTranslateStrategy } from "./EventTranslateStrategy";
import { EventEntity } from "../tools/EventTool";
export declare class TerminateEventTranslateStrategy implements EventTranslateStrategy {
    translate4EventArg(argName: string, argValue: string): string;
    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo;
    translate4UnFinish(event: EventEntity): EventTranslateInfo;
    translate4Finished(event: EventEntity): EventTranslateInfo;
    getEventName(): string;
    static EVENT_NAME: string;
}
