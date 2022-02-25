import {EventEntity} from "../tools/EventTool";
import {ContractElementInfo} from "../index";

export interface EventTranslateStrategy {

    // 取事件名称
    getEventName(): string;

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo;

    translate4UnFinish(event: EventEntity): EventTranslateInfo;

    translate4Finished(event: EventEntity): EventTranslateInfo;
}

export class EventTranslateInfo extends ContractElementInfo {
    args?: object;
}
