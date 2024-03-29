import {EventEntity} from "../tools/EventTool";
import {ContractElementInfo} from "../index";

export interface EventTranslateStrategy {

    // 取事件名称
    getEventName(): string;

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo;

    // 未执行
    translate4UnFinish(event: EventEntity): EventTranslateInfo;

    // 已执行
    translate4Finished(event: EventEntity): EventTranslateInfo;

    translate4EventArg(argName: string, argValue: string): string;
}

export class EventTranslateInfo extends ContractElementInfo {
}
