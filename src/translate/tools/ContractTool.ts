import {AudienceEntity, AudienceInfo, AudienceTool} from "./AudienceTool";
import {FSMEntity, FSMInfo, FSMTool} from "./FSMTool";
import {EventEntity} from "./EventTool";
import {TerminateEventTranslateStrategy} from "../strategy/TerminateEventTranslateStrategy";

export class ContractTool {

    static report(contract: ContractEntity, isSign?: boolean): ContractInfo {
        let contractInfo = {
            audienceInfos: AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool.report(contract.fsmStates),
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
                } else {
                    if (fsmInfo.eventTranslateInfos[0].origin.name == TerminateEventTranslateStrategy.EVENT_NAME) {
                        serviceStateStr = "已终止";
                    }
                }

                for (let eventTranslateInfo of fsmInfo.eventTranslateInfos) {
                    let event: EventEntity = eventTranslateInfo.origin;
                    // 取目标状态
                    let state = event.state;
                    if (!state) {
                        eventTranslateInfo.content = "合约已自动终止";
                    } else {
                        let targetFsmInfo = fsmInfoMap[state];
                        // 通过色块判断
                        let serviceStates = targetFsmInfo.serviceStateInfos.map(ssi => ssi.origin);
                        if (serviceStates.indexOf("active") != -1) {
                            eventTranslateInfo.content = eventTranslateInfo.content + " 获得授权";
                        } else {
                            eventTranslateInfo.content = eventTranslateInfo.content + " 授权结束";
                        }
                        // 通过事件判断
                        if (targetFsmInfo.eventTranslateInfos.length == 1) {
                            let targetEvent: EventEntity = targetFsmInfo.eventTranslateInfos[0].origin;
                            if (targetEvent.name == TerminateEventTranslateStrategy.EVENT_NAME) {
                                if (fsmInfo.eventTranslateInfos.length > 1) {
                                    eventTranslateInfo.content = eventTranslateInfo.content + "，若未执行其它事件，合约将自动终止";
                                } else {
                                    eventTranslateInfo.content = eventTranslateInfo.content + "，合约将自动终止"
                                }
                            }
                        }
                    }
                }
                let eventTranslateStr = fsmInfo.eventTranslateInfos.map(e => e.content).join("\n\t");

                let fsmStr = `${serviceStateStr} \n\t${eventTranslateStr}`;
                fsmStrArray.push(fsmStr);
            } else {
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

/**
 * 合约实体
 */
export class ContractEntity {
    audiences: AudienceEntity[];
    fsmStates: FSMEntity[];
}

/**
 * 合约信息
 */
export class ContractInfo {
    audienceInfos: AudienceInfo[];
    fsmInfos: FSMInfo[];
    content: string;
}
