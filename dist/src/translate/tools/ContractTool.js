"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfo = exports.ContractEntity = exports.ContractTool = void 0;
const AudienceTool_1 = require("./AudienceTool");
const FSMTool_1 = require("./FSMTool");
/**
 * 状态机合约工具
 */
class ContractTool {
    static report(contract) {
        let contractInfo = {
            audienceInfos: AudienceTool_1.AudienceTool.report(contract.audiences),
            fsmInfos: FSMTool_1.FSMTool.report(contract.fsmStates),
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
        result += `${audienceStr}\n\n`;
        result += `${fsmStrArray.join("")}\n`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9Db250cmFjdFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTBFO0FBQzFFLHVDQUFzRDtBQUV0RDs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUVyQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQXdCO1FBQ2xDLElBQUksWUFBWSxHQUFHO1lBQ2YsYUFBYSxFQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDdEQsUUFBUSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDNUMsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBQ0YsUUFBUTtRQUNSLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUzRSxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJLE9BQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUNsRDtRQUNELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkMsVUFBVTtZQUNWLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3pDLFVBQVU7WUFDVixJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RSxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM3QixlQUFlLEdBQUcsSUFBSSxlQUFlLEdBQUcsQ0FBQzthQUM1QztZQUVELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsZUFBZSxLQUFLLENBQUM7WUFDN0MsS0FBSyxJQUFJLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtnQkFDeEQsTUFBTSxJQUFJLEtBQUssa0JBQWtCLENBQUMsT0FBTyxJQUFJLENBQUM7YUFDakQ7WUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sSUFBSSxHQUFHLFdBQVcsTUFBTSxDQUFBO1FBQzlCLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUV0QyxZQUFZLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUF4Q0Qsb0NBd0NDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLGNBQWM7Q0FHMUI7QUFIRCx3Q0FHQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxZQUFZO0NBSXhCO0FBSkQsb0NBSUMifQ==