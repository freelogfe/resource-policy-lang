import { EventEntity } from "../tools/EventTool";
import { ContractElementInfo } from "../index";
export interface EventTranslateStrategy {
    getEventName(): string;
    translate4Strategy(event: EventEntity): EventTranslateInfo;
    translate4UnFinish(event: EventEntity): EventTranslateInfo;
    translate4Finished(event: EventEntity): EventTranslateInfo;
}
export declare class EventTranslateInfo extends ContractElementInfo {
    args?: object;
}
