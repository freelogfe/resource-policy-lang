"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfo = exports.ContractEntity = exports.ContractTool = void 0;
const AudienceTool_1 = require("./AudienceTool");
const FSMTool_1 = require("./FSMTool");
class ContractTool {
    static report(contract) {
        let contractInfo = {
            audienceInfos: AudienceTool_1.AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool_1.FSMTool.report(contract.fsmStates),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9Db250cmFjdFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTBFO0FBQzFFLHVDQUFzRDtBQUV0RCxNQUFhLFlBQVk7SUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUF3QjtRQUNsQyxJQUFJLFlBQVksR0FBRztZQUNmLGFBQWEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3RELFFBQVEsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsTUFBTTtRQUNOLE1BQU0sR0FBRyxJQUFJLEdBQUcsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFNUMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssSUFBSSxPQUFPLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RSxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM3QixlQUFlLEdBQUcsSUFBSSxlQUFlLEdBQUcsQ0FBQzthQUM1QztZQUNELElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckYsSUFBSSxNQUFNLEdBQUcsR0FBRyxRQUFRLEdBQUcsZUFBZSxRQUFRLGlCQUFpQixFQUFFLENBQUM7WUFDdEUsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUNELE1BQU07UUFDTixNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRTlDLFlBQVksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRTlCLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7Q0FDSjtBQWpDRCxvQ0FpQ0M7QUFFRDs7R0FFRztBQUNILE1BQWEsY0FBYztDQUcxQjtBQUhELHdDQUdDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLFlBQVk7Q0FJeEI7QUFKRCxvQ0FJQyJ9