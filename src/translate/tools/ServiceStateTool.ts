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

    // 状态机色块名称映射表
    static serviceStateNameMap = {
        "active": "已授权"
    };

    static getName4ServiceState(serviceState: string): string {
        if (serviceState in this.serviceStateNameMap) {
            return this.serviceStateNameMap[serviceState];
        } else {
            return serviceState;
        }
    }
}

export class ServiceStateInfo {
    origin: any;
    content: string;
}
