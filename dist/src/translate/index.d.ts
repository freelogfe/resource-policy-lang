import { EventTranslateStrategy } from "./strategy/EventTranslateStrategy";
import { CompareRoutesOptions, FSMRouteElement } from "./tools/FSMTool";
export declare class EventTranslateStrategyFactory {
    eventTranslateStrategyMap: Map<string, EventTranslateStrategy>;
    constructor();
    getEventTranslateStrategy(eventName: string): EventTranslateStrategy;
}
export declare class ContractElementInfo {
    origin: any;
    content: string;
}
export declare function compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void;
export declare function compareRoutesOS(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void;
export declare function parseRoutes(states: any, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void;
export declare function cleanUpRoutes(routes: FSMRouteElement[][]): void;
