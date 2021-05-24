import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event} from "../index";

export class TransactionEventTranslateStrategy implements EventTranslateStrategy{
    getEventName(): string {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }

    translate(event:Event): string {
        return `支付${event.args["account"]}到${event.args["account"]}，合约转变到状态${event.state}`;
    }

    static EVENT_NAME: string = "TransactionEvent";
}
