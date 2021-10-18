"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEventTranslateStrategy = void 0;
const StateTool_1 = require("../tools/StateTool");
class TransactionEventTranslateStrategy {
    getEventName() {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }
    translate(event) {
        let account = event.args["account"];
        let regExp = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
        let symbolType = 0;
        if (account.match(regExp)) {
            // 环境变量
            symbolType = RegExp.$2 ? 2 : 0;
        }
        else {
            throw new Error("参数错误，提取参数信息失败");
        }
        let accountStr = symbolType == 2 ? "" : ` 到 ${account}`;
        return {
            origin: event,
            content: `支付 ${event.args["amount"]}枚 羽币${accountStr}，进入 ${StateTool_1.StateTool.report(event.state).content}`
        };
    }
}
exports.TransactionEventTranslateStrategy = TransactionEventTranslateStrategy;
TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";
TransactionEventTranslateStrategy.EVENT_NAME = "TransactionEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25FdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9UcmFuc2FjdGlvbkV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsa0RBQTZDO0FBRTdDLE1BQWEsaUNBQWlDO0lBSTFDLFlBQVk7UUFDUixPQUFPLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWtCO1FBQ3hCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsaUNBQWlDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM3RSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87WUFDUCxVQUFVLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQUM7UUFFeEQsT0FBTztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxVQUFVLE9BQU8scUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtTQUNyRyxDQUFDO0lBQ04sQ0FBQzs7QUF6QkwsOEVBNEJDO0FBMUJVLG1EQUFpQixHQUFHLG1DQUFtQyxDQUFDO0FBeUJ4RCw0Q0FBVSxHQUFXLGtCQUFrQixDQUFDIn0=