"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudienceInfo = exports.AudienceEntity = exports.AudienceTool = void 0;
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
class AudienceInfo {
}
exports.AudienceInfo = AudienceInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaWVuY2VUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9BdWRpZW5jZVRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBMkI7UUFDckMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO1lBQzVCLElBQUksTUFBTSxHQUFHO2dCQUNULE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzthQUM1QyxDQUFDO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBd0I7UUFDN0MsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssUUFBUTtnQkFDVCxPQUFPLFlBQVksQ0FBQztZQUN4QjtnQkFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0NBQ0o7QUF6QkQsb0NBeUJDO0FBRUQsTUFBYSxjQUFjO0NBRzFCO0FBSEQsd0NBR0M7QUFFRCxNQUFhLFlBQVk7Q0FHeEI7QUFIRCxvQ0FHQyJ9