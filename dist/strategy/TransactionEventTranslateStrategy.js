"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEventTranslateStrategy = void 0;
const index_1 = require("../index");
class TransactionEventTranslateStrategy {
    getEventName() {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        let account = event.args["account"];
        let regExp = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
        let symbolType = 0;
        if (account.match(regExp)) {
            if (symbolType === 0) {
                // 环境变量
                symbolType = RegExp.$2 ? 2 : 0;
            }
        }
        else {
            throw new Error("参数错误，提取参数信息失败");
        }
        let accountStr = symbolType == 2 ? "" : ` 到 ${account}`;
        return `支付 ${event.args["amount"]}枚 羽币${accountStr}，${index_1.FSMTool.parseTransitionInfo(event.state)}`;
    }
}
exports.TransactionEventTranslateStrategy = TransactionEventTranslateStrategy;
TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";
TransactionEventTranslateStrategy.EVENT_NAME = "TransactionEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25FdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9UcmFuc2FjdGlvbkV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esb0NBQXdDO0FBRXhDLE1BQWEsaUNBQWlDO0lBSTFDLFlBQVk7UUFDUixPQUFPLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUFnQjtRQUNwQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGlDQUFpQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0UsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixJQUFJLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLE9BQU87Z0JBQ1AsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDcEM7UUFFRCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQUM7UUFDeEQsT0FBTyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sVUFBVSxJQUFJLGVBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNyRyxDQUFDOztBQXZCTCw4RUEwQkM7QUF4QlUsbURBQWlCLEdBQUcsbUNBQW1DLENBQUM7QUF1QnhELDRDQUFVLEdBQVcsa0JBQWtCLENBQUMifQ==