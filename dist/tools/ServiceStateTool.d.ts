/**
 * 状态机色块工具
 */
export declare class ServiceStateTool {
    static report(serviceStates: string[]): ServiceStateInfo[];
    static getName4ServiceState(serviceState: string): string;
}
export declare class ServiceStateInfo {
    origin: any;
    content: string;
}
