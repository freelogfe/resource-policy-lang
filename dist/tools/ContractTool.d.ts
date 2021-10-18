import { AudienceEntity, AudienceInfo } from "./AudienceTool";
import { FSMEntity, FSMInfo } from "./FSMTool";
export declare class ContractTool {
    static report(contract: ContractEntity, isSign?: boolean): ContractInfo;
}
/**
 * 合约实体
 */
export declare class ContractEntity {
    audiences: AudienceEntity[];
    fsmStates: FSMEntity[];
}
/**
 * 合约信息
 */
export declare class ContractInfo {
    audienceInfos: AudienceInfo[];
    fsmInfos: FSMInfo[];
    content: string;
}
