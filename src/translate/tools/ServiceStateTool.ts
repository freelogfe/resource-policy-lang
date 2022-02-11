/**
 * 状态机色块工具
 */
export class ServiceStateTool {

    static report(serviceStates: string[]): ServiceStateInfo[] {
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

    static getName4ServiceState(serviceState: string): string {
        switch (serviceState) {
            case "active":
                return "授权";
            case "testActive":
                return "测试授权"
            default:
                return serviceState;
        }
    }
}

export class ServiceStateInfo {
    origin: any;
    content: string;
}
