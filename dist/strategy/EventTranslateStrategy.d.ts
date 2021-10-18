import { EventEntity } from "../tools/EventTool";
import { ContractElementInfo } from "../index";
export interface EventTranslateStrategy {
    getEventName(): string;
    translate(event: EventEntity): EventTranslateInfo;
}
export declare class EventTranslateInfo extends ContractElementInfo {
    args?: object;
}
