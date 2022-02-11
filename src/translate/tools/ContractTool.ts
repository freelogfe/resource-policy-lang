import {AudienceEntity, AudienceInfo, AudienceTool} from "./AudienceTool";
import {FSMEntity, FSMInfo, FSMTool} from "./FSMTool";

/**
 * 状态机合约工具
 */
export class ContractTool {

    static report(contract: ContractEntity): ContractInfo {
        let contractInfo = {
            audienceInfos: AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool.report(contract.fsmStates),
            content: ""
        };
        // 标的物翻译
        let audienceStr = contractInfo.audienceInfos.map(e => e.content).join("，");

        let fsmInfoMap = {};
        for (let fsmInfo of contractInfo.fsmInfos) {
            fsmInfoMap[fsmInfo.stateInfo.origin] = fsmInfo;
        }
        let fsmStrArray = [];
        for (let fsmInfo of contractInfo.fsmInfos) {
            // 状态机状态翻译
            let stateStr = fsmInfo.stateInfo.content;
            // 状态机色块翻译
            let serviceStateStr = fsmInfo.serviceStateInfos.map(e => e.content).join("，");
            if (serviceStateStr.length != 0) {
                serviceStateStr = `[${serviceStateStr}]`;
            }

            let fsmStr = "";
            fsmStr += `${stateStr}${serviceStateStr}：\n`;
            for (let eventTranslateInfo of fsmInfo.eventTranslateInfos) {
                fsmStr += `  ${eventTranslateInfo.content}\n`;
            }
            fsmStrArray.push(fsmStr);
        }

        let result = "";
        result += `${audienceStr}\n\n`
        result += `${fsmStrArray.join("")}\n`;

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
