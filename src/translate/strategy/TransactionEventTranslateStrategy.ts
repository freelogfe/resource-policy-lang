import {EventTranslateStrategy} from "./EventTranslateStrategy";
import {Event, FSMTool} from "../index";

export class TransactionEventTranslateStrategy implements EventTranslateStrategy {

    static REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";

    getEventName(): string {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: Event, isSign?: boolean): string {
        let account = event.args["account"];
        let regExp = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
        let symbolType = 0;
        if (account.match(regExp)) {
            if (symbolType === 0) {
                // 环境变量
                symbolType = RegExp.$2 ? 2 : 0;
            }
        } else {
            throw new Error("参数错误，提取参数信息失败");
        }

        let accountStr = symbolType == 2 ? "" : ` 到 ${account}`;
        return `支付 ${event.args["amount"]}枚 羽币${accountStr}，${FSMTool.parseTransitionInfo(event.state)}`;
    }

    static EVENT_NAME: string = "TransactionEvent";
}
