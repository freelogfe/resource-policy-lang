import {CycleEndEventTranslateStrategy} from "./strategy/CycleEndEventTranslateStrategy";
import {EventTranslateStrategy} from "./strategy/EventTranslateStrategy";
import {TransactionEventTranslateStrategy} from "./strategy/TransactionEventTranslateStrategy";
import {TimeEventTranslateStrategy} from "./strategy/TimeEventTranslateStrategy";
import {RelativeTimeEventTranslateStrategy} from "./strategy/RelativeTimeEventTranslateStrategy";
import {TerminateEventTranslateStrategy} from "./strategy/TerminateEventTranslateStrategy";
import {ContractEntity, ContractInfo, ContractTool} from "./tools/ContractTool";
import {CompareRoutesOptions, FSMRouteElement, FSMTool} from "./tools/FSMTool";

export class EventTranslateStrategyFactory {

    eventTranslateStrategyMap = new Map<string, EventTranslateStrategy>();

    constructor() {
        this.eventTranslateStrategyMap.set(TransactionEventTranslateStrategy.EVENT_NAME, new TransactionEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(TimeEventTranslateStrategy.EVENT_NAME, new TimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(RelativeTimeEventTranslateStrategy.EVENT_NAME, new RelativeTimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(CycleEndEventTranslateStrategy.EVENT_NAME, new CycleEndEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(TerminateEventTranslateStrategy.EVENT_NAME, new TerminateEventTranslateStrategy());
    }

    getEventTranslateStrategy(eventName: string): EventTranslateStrategy {
        return this.eventTranslateStrategyMap.get(eventName);
    }
}

export class ContractElementInfo {
    origin: any;
    content: string;
}

export function report(contract: ContractEntity, isSign?: boolean): ContractInfo {
    return ContractTool.report(contract, isSign);
}

export function compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void {
    FSMTool.compareRoutes(routes, routesB, options);
}

export function parseRoutes(states, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void {
    FSMTool.parseRoutes(states, stateName, routes, route);
}