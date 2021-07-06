import { ContractElementInfo } from "../index";
export declare class AudienceTool {
    static report(audiences: AudienceEntity[]): AudienceInfo[];
    static parseAudienceInfo(audience: AudienceEntity): string;
}
export declare class AudienceEntity {
    name: string;
    type: string;
}
export declare class AudienceInfo extends ContractElementInfo {
}
