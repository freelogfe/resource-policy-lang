"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStateInfo = exports.ServiceStateTool = void 0;
/**
 * 状态机色块工具
 */
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
        switch (serviceState) {
            case "active":
                return "授权";
            case "testActive":
                return "测试授权";
            default:
                return serviceState;
        }
    }
}
exports.ServiceStateTool = ServiceStateTool;
class ServiceStateInfo {
}
exports.ServiceStateInfo = ServiceStateInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZVN0YXRlVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvU2VydmljZVN0YXRlVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNILE1BQWEsZ0JBQWdCO0lBRXpCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBdUI7UUFDakMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRCxPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELEtBQUssSUFBSSxZQUFZLElBQUksYUFBYSxFQUFFO1lBQ3BDLElBQUksTUFBTSxHQUFHO2dCQUNULE1BQU0sRUFBRSxZQUFZO2dCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQzthQUNuRCxDQUFDO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsWUFBb0I7UUFDNUMsUUFBUSxZQUFZLEVBQUU7WUFDbEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sSUFBSSxDQUFDO1lBQ2hCLEtBQUssWUFBWTtnQkFDYixPQUFPLE1BQU0sQ0FBQTtZQUNqQjtnQkFDSSxPQUFPLFlBQVksQ0FBQztTQUMzQjtJQUNMLENBQUM7Q0FDSjtBQTlCRCw0Q0E4QkM7QUFFRCxNQUFhLGdCQUFnQjtDQUc1QjtBQUhELDRDQUdDIn0=