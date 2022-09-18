import { EventEntity } from "../tools/EventTool";
import { ContractElementInfo } from "../index";
export interface EventTranslateStrategy {
    getEventName(): string;
    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo;
    translate4UnFinish(event: EventEntity): EventTranslateInfo;
    translate4Finished(event: EventEntity): EventTranslateInfo;
    translate4EventArg(argName: string, argValue: string): string;
}
export declare class EventTranslateInfo extends ContractElementInfo {
}
