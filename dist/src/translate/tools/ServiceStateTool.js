"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStateInfo = exports.ServiceStateTool = void 0;
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
class ServiceStateInfo {
}
exports.ServiceStateInfo = ServiceStateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVN0YXRlVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvU2VydmljZVN0YXRlVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGdCQUFnQjtJQUV6QixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQXVCO1FBQ2pDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDcEQsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxLQUFLLElBQUksWUFBWSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxJQUFJLE1BQU0sR0FBRztnQkFDVCxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUM7YUFDbkQsQ0FBQztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBT0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQW9CO1FBQzVDLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsT0FBTyxZQUFZLENBQUM7U0FDdkI7SUFDTCxDQUFDOztBQS9CTCw0Q0FnQ0M7QUFaRyxhQUFhO0FBQ04sb0NBQW1CLEdBQUc7SUFDekIsUUFBUSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQztBQVdOLE1BQWEsZ0JBQWdCO0NBRzVCO0FBSEQsNENBR0MifQ==