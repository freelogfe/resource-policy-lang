"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfo = exports.ContractEntity = exports.ContractTool = void 0;
const AudienceTool_1 = require("./AudienceTool");
const FSMTool_1 = require("./FSMTool");
const TerminateEventTranslateStrategy_1 = require("../strategy/TerminateEventTranslateStrategy");
class ContractTool {
    static report(contract, isSign) {
        let contractInfo = {
            audienceInfos: AudienceTool_1.AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool_1.FSMTool.report(contract.fsmStates),
            content: ""
        };
        let result = "";
        let audienceStr = contractInfo.audienceInfos.map(e => e.content).join("，");
        // 标的物
        result = "\n" + result + audienceStr + "\n";
        let fsmInfoMap = {};
        for (let fsmInfo of contractInfo.fsmInfos) {
            fsmInfoMap[fsmInfo.stateInfo.origin] = fsmInfo;
        }
        let fsmStrArray = [];
        for (let fsmInfo of contractInfo.fsmInfos) {
            if (isSign) {
                // 取第一个色块
                let serviceState = fsmInfo.serviceStateInfos.length != 0 ? fsmInfo.serviceStateInfos[0] : null;
                let serviceStateStr = "未授权";
                if (serviceState != null) {
                    serviceStateStr = serviceState.content;
                }
                else {
                    if (fsmInfo.eventTranslateInfos[0].origin.name == TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy.EVENT_NAME) {
                        serviceStateStr = "已终止";
                    }
                }
                for (let eventTranslateInfo of fsmInfo.eventTranslateInfos) {
                    let event = eventTranslateInfo.origin;
                    // 取目标状态
                    let state = event.state;
                    if (!state) {
                        eventTranslateInfo.content = "合约已自动终止";
                    }
                    else {
                        let targetFsmInfo = fsmInfoMap[state];
                        // 通过色块判断
                        let serviceStates = targetFsmInfo.serviceStateInfos.map(ssi => ssi.origin);
                        if (serviceStates.indexOf("active") != -1) {
                            eventTranslateInfo.content = eventTranslateInfo.content + " 获得授权";
                        }
                        else {
                            eventTranslateInfo.content = eventTranslateInfo.content + " 授权结束";
                        }
                        // 通过事件判断
                        if (targetFsmInfo.eventTranslateInfos.length == 1) {
                            let targetEvent = targetFsmInfo.eventTranslateInfos[0].origin;
                            if (targetEvent.name == TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy.EVENT_NAME) {
                                if (fsmInfo.eventTranslateInfos.length > 1) {
                                    eventTranslateInfo.content = eventTranslateInfo.content + "，若未执行其它事件，合约将自动终止";
                                }
                                else {
                                    eventTranslateInfo.content = eventTranslateInfo.content + "，合约将自动终止";
                                }
                            }
                        }
                    }
                }
                let eventTranslateStr = fsmInfo.eventTranslateInfos.map(e => e.content).join("\n\t");
                let fsmStr = `${serviceStateStr} \n\t${eventTranslateStr}`;
                fsmStrArray.push(fsmStr);
            }
            else {
                let stateStr = fsmInfo.stateInfo.content;
                let serviceStateStr = fsmInfo.serviceStateInfos.map(e => e.content).join("，");
                if (serviceStateStr.length != 0) {
                    serviceStateStr = `[${serviceStateStr}]`;
                }
                let eventTranslateStr = fsmInfo.eventTranslateInfos.map(e => e.content).join("\n\t");
                let fsmStr = `${stateStr}${serviceStateStr}：\n\t${eventTranslateStr}`;
                fsmStrArray.push(fsmStr);
            }
        }
        // 状态机
        result = "\n" + fsmStrArray.join("\n") + "\n";
        contractInfo.content = result;
        return contractInfo;
    }
}
exports.ContractTool = ContractTool;
/**
 * 合约实体
 */
class ContractEntity {
}
exports.ContractEntity = ContractEntity;
/**
 * 合约信息
 */
class ContractInfo {
}
exports.ContractInfo = ContractInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9Db250cmFjdFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTBFO0FBQzFFLHVDQUFzRDtBQUV0RCxpR0FBNEY7QUFFNUYsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBd0IsRUFBRSxNQUFnQjtRQUNwRCxJQUFJLFlBQVksR0FBRztZQUNmLGFBQWEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3RELFFBQVEsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsTUFBTTtRQUNOLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFNUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBSSxPQUFPLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsS0FBSyxJQUFJLE9BQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLElBQUksTUFBTSxFQUFFO2dCQUNSLFNBQVM7Z0JBQ1QsSUFBSSxZQUFZLEdBQUcsT0FBTyxD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