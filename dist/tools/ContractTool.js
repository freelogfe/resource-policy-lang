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
        let result = "";
        let audienceStr = contractInfo.audienceInfos.map(e => e.content).join("，");
        // 标的物
        result = "\n" + result + audienceStr + "\n";
        let fsmInfoMap = {};
        for (let fsmInfo of contractInfo.fsmInfos) {
            fsmInfoMap[fsmInfo.stateInfo.origin] = fsmInfo;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJhY3RUb29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zbGF0ZS90b29scy9Db250cmFjdFRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQTBFO0FBQzFFLHVDQUFzRDtBQUV0RDs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUVyQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQXdCO1FBQ2xDLElBQUksWUFBWSxHQUFHO1lBQ2YsYUFBYSxFQUFFLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDdEQsUUFBUSxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDNUMsT0FBTyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRSxNQUFNO1FBQ04sTUFBTSxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztRQUU1QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsS0FBSyxJQUFJLE9BQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUNsRDtRQUNELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksT0FBTyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDekMsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUUsSUFBSSxlQUFlLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsZUFBZSxHQUFHLElBQUksZUFBZSxHQUFHLENBQUM7YUFDNUM7WUFDRCxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJGLElBQUksTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLGVBQWUsUUFBUSxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RFLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFDRCxNQUFNO1FBQ04sTUFBTSxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUU5QyxZQUFZLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUU5QixPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUFyQ0Qsb0NBcUNDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLGNBQWM7Q0FHMUI7QUFIRCx3Q0FHQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxZQUFZO0NBSXhCO0FBSkQsb0NBSUMifQ==