export class AudienceTool {

    static report(audiences: AudienceEntity[]): AudienceInfo[] {
        let results = [];

        for (let audience of audiences) {
            let result = {
                origin: audience,
                content: this.parseAudienceInfo(audience)
            };

            results.push(result);
        }

        return results;
    }

    static parseAudienceInfo(audience: AudienceEntity): string {
        switch (audience.type) {
            case "public":
                return "公开（所有缔约方可签约）";
            default:
                return audience.name;
        }
    }
}

export class AudienceEntity {
    name: string;
    type: string;
}

export class AudienceInfo {
    origin: any;
    content: string;
}
