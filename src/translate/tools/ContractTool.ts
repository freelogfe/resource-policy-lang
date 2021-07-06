import {AudienceEntity, AudienceInfo, AudienceTool} from "./AudienceTool";
import {FSMEntity, FSMInfo, FSMTool} from "./FSMTool";

export class ContractTool {

    static report(contract: ContractEntity): ContractInfo {
        let contractInfo = {
            audienceInfos: AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool.report(contract.fsmStates),
            content: ""
        };

        let result = "";
        let audienceStr = contractInfo.audienceInfos.map(e => e.content).join("，");
        // 标的物
        result = "\n" + result + audienceStr + "\n";

        let fsmStrArray = [];
        for (let fsmInfo of contractInfo.fsmInfos) {
            let stateStr = fsmInfo.stateInfo.content;
            let serviceStateStr = fsmInfo.serviceStateInfos.map(e => e.content).join("，");
            if (serviceStateStr.length != 0) {
                serviceStateStr = `[${serviceStateStr}]`;
            }
            let eventTranslateStr = fsmInfo.eventTranslateInfos.map(e => e.content).join("\n\t");

            let fsmStr = `${stateStr}${serviceStateStr}：\n\t${eventTranslateStr}`;
            fsmStrArray.push(fsmStr);
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
