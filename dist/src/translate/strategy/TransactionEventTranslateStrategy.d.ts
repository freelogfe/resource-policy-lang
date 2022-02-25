import { EventTranslateInfo, EventTranslateStrategy } from "./EventTranslateStrategy";
import { EventEntity } from "../tools/EventTool";
export declare class TransactionEventTranslateStrategy implements EventTranslateStrategy {
    static REGEX_ARG_ACCOUNT: string;
    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo;
    translate4UnFinish(event: EventEntity): EventTranslateInfo;
    translate4Finished(event: EventEntity): EventTranslateInfo;
    generateAccountStr(account: any): string;
    getEventName(): string;
    static EVENT_NAME: string;
}
