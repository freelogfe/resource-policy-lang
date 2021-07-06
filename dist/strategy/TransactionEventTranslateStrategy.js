"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEventTranslateStrategy = void 0;
const StateTool_1 = require("../tools/StateTool");
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
        return {
            origin: event,
            content: `支付 ${event.args["amount"]}枚 羽币${accountStr}，进入 ${StateTool_1.StateTool.report(event.state).content}`
        };
    }
}
exports.TransactionEventTranslateStrategy = TransactionEventTranslateStrategy;
TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";
TransactionEventTranslateStrategy.EVENT_NAME = "TransactionEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25FdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9UcmFuc2FjdGlvbkV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsa0RBQTZDO0FBRTdDLE1BQWEsaUNBQWlDO0lBSTFDLFlBQVk7UUFDUixPQUFPLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWtCLEVBQUUsTUFBZ0I7UUFDMUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixPQUFPO2dCQUNQLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNKO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLE9BQU8sRUFBRSxDQUFDO1FBQ3hELE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sVUFBVSxPQUFPLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7U0FDckcsQ0FBQztJQUNOLENBQUM7O0FBMUJMLDhFQTZCQztBQTNCVSxtREFBaUIsR0FBRyxtQ0FBbUMsQ0FBQztBQTBCeEQsNENBQVUsR0FBVyxrQkFBa0IsQ0FBQyJ9