"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStateInfo = exports.ServiceStateTool = void 0;
const index_1 = require("../index");
class ServiceStateTool {
    static report(serviceStates) {
        let results = [];
        if (serviceStates == null || serviceStates.length == 0) {
            return results;
        }
        for (let serviceState of serviceStates) {
            let result = {
                origin: serviceState,
                content: this.getName4ServiceState(serviceState)
            };
            results.push(result);
        }
        return results;
    }
    static getName4ServiceState(serviceState) {
        if (serviceState in this.serviceStateNameMap) {
            return this.serviceStateNameMap[serviceState];
        }
        else {
            return serviceState;
        }
    }
}
exports.ServiceStateTool = ServiceStateTool;
// 状态机色块名称映射表
ServiceStateTool.serviceStateNameMap = {
    "active": "已授权"
};
class ServiceStateInfo extends index_1.ContractElementInfo {
}
exports.ServiceStateInfo = ServiceStateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVN0YXRlVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvU2VydmljZVN0YXRlVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQ0FBNkM7QUFFN0MsTUFBYSxnQkFBZ0I7SUFFekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUF1QjtRQUNqQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxhQUFhLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3BELE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsS0FBSyxJQUFJLFlBQVksSUFBSSxhQUFhLEVBQUU7WUFDcEMsSUFBSSxNQUFNLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDO2FBQ25ELENBQUM7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQU9ELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxZQUFvQjtRQUM1QyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILE9BQU8sWUFBWSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7QUEvQkwsNENBZ0NDO0FBWkcsYUFBYTtBQUNOLG9DQUFtQixHQUFHO0lBQ3pCLFFBQVEsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFXTixNQUFhLGdCQUFpQixTQUFRLDJCQUFtQjtDQUN4RDtBQURELDRDQUNDIn0=