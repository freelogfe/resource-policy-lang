"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEventTranslateStrategy = void 0;
const EventTool_1 = require("../tools/EventTool");
const StateTool_1 = require("../tools/StateTool");
const util = require("util");
class TransactionEventTranslateStrategy {
    translate4EventArg(argName, argValue) {
        if (argName == "amount") {
            return argValue;
        }
        if (argName == "account") {
            let reg = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
            let rst = argValue.match(reg);
            if (rst[1] != null) {
                return argValue;
            }
            else {
                return "自己";
            }
        }
        return "";
    }
    translate4Strategy(event, serviceStates) {
        let accountStr = this.generateAccountStr(event.args["account"]);
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Strategy"), event.args["amount"], accountStr, StateTool_1.StateTool.report(event.toState).content)
        };
    }
    translate4UnFinish(event) {
        let accountStr = this.generateAccountStr(event.args["account"]);
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "UnFinish"), event.args["amount"], accountStr, StateTool_1.StateTool.report(event.toState).content)
        };
    }
    translate4Finished(event) {
        let accountStr = this.generateAccountStr(event.args["account"]);
        return {
            origin: event,
            content: util.format(EventTool_1.EventTool.getTemplate(this.getEventName(), "Finished"), event.args["amount"], accountStr, StateTool_1.StateTool.report(event.toState).content)
        };
    }
    // 取账号翻译字符串
    generateAccountStr(account) {
        let regExp = new RegExp(TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT);
        let symbolType = 0;
        if (account.match(regExp)) {
            // 环境变量
            symbolType = RegExp.$2 ? 2 : 0;
        }
        else {
            throw new Error("参数错误，提取参数信息失败");
        }
        return symbolType == 2 ? "" : ` 到 ${account}`;
    }
    getEventName() {
        return TransactionEventTranslateStrategy.EVENT_NAME;
    }
}
exports.TransactionEventTranslateStrategy = TransactionEventTranslateStrategy;
TransactionEventTranslateStrategy.REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";
TransactionEventTranslateStrategy.EVENT_NAME = "TransactionEvent";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25FdmVudFRyYW5zbGF0ZVN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS9zdHJhdGVneS9UcmFuc2FjdGlvbkV2ZW50VHJhbnNsYXRlU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQTBEO0FBQzFELGtEQUE2QztBQUU3QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsTUFBYSxpQ0FBaUM7SUFFMUMsa0JBQWtCLENBQUMsT0FBZSxFQUFFLFFBQWdCO1FBQ2hELElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTtZQUNyQixPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzFFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNoQixPQUFPLFFBQVEsQ0FBQzthQUNuQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFJRCxrQkFBa0IsQ0FBQyxLQUFrQixFQUFFLGFBQXdCO1FBQzNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsT0FBTztZQUNILE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDMUosQ0FBQztJQUNOLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzFKLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUVoRSxPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMxSixDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7SUFDWCxrQkFBa0IsQ0FBQyxPQUFPO1FBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGlDQUFpQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0UsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixPQUFPO1lBQ1AsVUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sT0FBTyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDOztBQWhFTCw4RUFtRUM7QUFoRFUsbURBQWlCLEdBQUcsbUNBQW1DLENBQUM7QUErQ3hELDRDQUFVLEdBQVcsa0JBQWtCLENBQUMifQ==