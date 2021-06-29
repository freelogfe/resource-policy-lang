import { EventTranslateStrategy } from "./strategy/EventTranslateStrategy";
export declare class Event {
    name: string;
    args?: {};
    state?: string;
}
export declare class EventTool {
    static timeUnitNameMap: {
        year: string;
        month: string;
        week: string;
        day: string;
        hour: string;
        minute: string;
    };
    static getName4TimeUnit(timeUnit: string): any;
    static perSeconds4TimeUnit(timeUnit: string): number;
    static report(events: Event[]): string;
}
export declare class EventTranslateStrategyFactory {
    eventTranslateStrategyMap: Map<string, EventTranslateStrategy>;
    constructor();
    getEventTranslateStrategy(eventName: string): EventTranslateStrategy;
}
export declare class FSMState {
    name: string;
    serviceStates?: string[];
    events?: Event[];
}
export declare class FSMRouteElement {
    state: string;
    serviceStates: string[];
    event: Event;
}
export declare class FSMTool {
    /**
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states: any, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void;
    static compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void;
    static stateNameMap: {
        initial: string;
        finish: string;
    };
    static getName4State(state: string): any;
    static serviceStateNameMap: {
        active: string;
    };
    static getName4ServiceState(serviceState: string): any;
    static parseTransitionInfo(state: string): string;
    static report(fsmStates: FSMState[]): string;
}
export declare class CompareRoutesOptions {
    eventArgs: number;
    serviceStates: number;
}
export declare class Audience {
    name: string;
    type: string;
}
export declare class Contract {
    audiences: Audience[];
    fsmStates: FSMState[];
}
export declare class ContractTool {
    static parseAudienceInfo(audience: Audience): string;
    static report(contract: Contract): string;
}
