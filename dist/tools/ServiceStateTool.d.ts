import { ContractElementInfo } from "../index";
export declare class ServiceStateTool {
    static report(serviceStates: string[]): ServiceStateInfo[];
    static serviceStateNameMap: {
        active: string;
    };
    static getName4ServiceState(serviceState: string): string;
}
export declare class ServiceStateInfo extends ContractElementInfo {
}
