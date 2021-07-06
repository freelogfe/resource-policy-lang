"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceInfo = exports.AudienceEntity = exports.AudienceTool = void 0;
const index_1 = require("../index");
class AudienceTool {
    static report(audiences) {
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
    static parseAudienceInfo(audience) {
        switch (audience.type) {
            case "public":
                return "公开（所有人可签约）";
            default:
                return audience.name;
        }
    }
}
exports.AudienceTool = AudienceTool;
class AudienceEntity {
}
exports.AudienceEntity = AudienceEntity;
class AudienceInfo extends index_1.ContractElementInfo {
}
exports.AudienceInfo = AudienceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaWVuY2VUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9BdWRpZW5jZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQTZDO0FBRTdDLE1BQWEsWUFBWTtJQUVyQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQTJCO1FBQ3JDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLE1BQU0sR0FBRztnQkFDVCxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7YUFDNUMsQ0FBQztZQUVGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQXdCO1FBQzdDLFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxZQUFZLENBQUM7WUFDeEI7Z0JBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztDQUNKO0FBekJELG9DQXlCQztBQUVELE1BQWEsY0FBYztDQUcxQjtBQUhELHdDQUdDO0FBRUQsTUFBYSxZQUFhLFNBQVEsMkJBQW1CO0NBQ3BEO0FBREQsb0NBQ0MifQ==