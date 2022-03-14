import { EventEntity } from "./EventTool";
import { ServiceStateInfo } from "./ServiceStateTool";
import { StateInfo } from "./StateTool";
import { EventTranslateInfo } from "../strategy/EventTranslateStrategy";
/**
 * 状态机工具
 */
export declare class FSMTool {
    static report(fsmEntities: FSMEntity[]): FSMInfo[];
    static transfer(fsmEntities: FSMEntity[], fsmTransfers: FsmTransfer[]): any;
    static generateServiceStatesCode(serviceStates: string[]): number;
    static generateEventServiceStatesStr(eventStr: string, serviceStates: string[]): string;
    /**
     * 解析路由
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states: any, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void;
    static cleanUpRoutes(routes: FSMRouteElement[][]): Map<string, string>;
    /**
     * 比较路由
     * @param routes
     * @param routesB
     * @param options
     */
    static compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void;
}
/**
 * 状态机实体
 */
export declare class FSMEntity {
    name: string;
    serviceStates?: string[];
    events?: EventEntity[];
}
export declare class FsmTransfer {
    id: any;
    state: string;
    fromState: string;
    toState: string;
    isLast?: boolean;
    time: string;
    event: EventEntity;
}
export declare class FsmTransferResult {
    stateStr: string;
    stateInfoStr: string;
    eventStr: string;
    eventSelectStr: string;
    eventSectionStrs: string[];
}
/**
 * 状态机信息
 */
export declare class FSMInfo {
    stateInfo: StateInfo;
    serviceStateInfos: ServiceStateInfo[];
    eventTranslateInfos: EventTranslateInfo[];
}
/**
 * 状态机路由元素
 */
export declare class FSMRouteElement {
    state: string;
    serviceStates: string[];
    event: EventEntity;
}
/**
 * 比较路由参数选项
 */
export declare class CompareRoutesOptions {
    eventArgs: number;
    serviceStates: number;
}
