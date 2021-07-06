import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";

export class TransactionEventTranslateStrategy implements EventTranslateStrategy {

    static REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";

    getEventName(): string {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }

    translate(event: EventEntity, isSign?: boolean): EventTranslateInfo {
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
        return {
            content: `支付 ${event.args["amount"]}枚 羽币${accountStr}，进入 ${StateTool.report(event.state).content}`
        };
    }

    static EVENT_NAME: string = "TransactionEvent";
}
