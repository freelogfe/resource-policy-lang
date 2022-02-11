import { AudienceEntity, AudienceInfo } from "./AudienceTool";
import { FSMEntity, FSMInfo } from "./FSMTool";
/**
 * 状态机合约工具
 */
export declare class ContractTool {
    static report(contract: ContractEntity): ContractInfo;
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
