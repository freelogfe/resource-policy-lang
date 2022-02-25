import {EventTranslateInfo, EventTranslateStrategy} from "./EventTranslateStrategy";
import {EventEntity, EventTool} from "../tools/EventTool";
import {StateTool} from "../tools/StateTool";

const util = require("util");

export class TransactionEventTranslateStrategy implements EventTranslateStrategy {

    static REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";

    translate4Strategy(event: EventEntity, serviceStates?: string[]): EventTranslateInfo {
        let accountStr = this.generateAccountStr(event.args["account"]);

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Strategy"), event.args["amount"], accountStr, StateTool.report(event.toState).content)
        };
    }

    translate4UnFinish(event: EventEntity): EventTranslateInfo {
        let accountStr = this.generateAccountStr(event.args["account"]);

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "UnFinish"), event.args["amount"], accountStr, StateTool.report(event.toState).content)
        };
    }

    translate4Finished(event: EventEntity): EventTranslateInfo {
        let accountStr = this.generateAccountStr(event.args["account"]);

        return {
            origin: event,
            content: util.format(EventTool.getTemplate(this.getEventName(), "Finished"), event.args["amount"], accountStr, StateTool.report(event.toState).content)
        };
    }

    // 取账号翻译字符串
    generateAccountStr(account): string {
        let regExp = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
        let symbolType = 0;
        if (account.match(regExp)) {
            // 环境变量
            symbolType = RegExp.$2 ? 2 : 0;
        } else {
            throw new Error("参数错误，提取参数信息失败");
        }

        return symbolType == 2 ? "" : ` 到 ${account}`;
    }

    getEventName(): string {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }

    static EVENT_NAME: string = "TransactionEvent";
}
