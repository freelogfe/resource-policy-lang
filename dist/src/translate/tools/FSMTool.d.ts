import { EventEntity } from "./EventTool";
import { ServiceStateInfo } from "./ServiceStateTool";
import { StateInfo } from "./StateTool";
import { EventTranslateInfo } from "../strategy/EventTranslateStrategy";
export declare class FSMTool {
    static report(fsmEntities: FSMEntity[]): FSMInfo[];
    /**
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states: any, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void;
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
