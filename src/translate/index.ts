import {CycleEndEventTranslateStrategy} from "./strategy/CycleEndEventTranslateStrategy";
import {EventTranslateStrategy} from "./strategy/EventTranslateStrategy";
import {TransactionEventTranslateStrategy} from "./strategy/TransactionEventTranslateStrategy";
import {TimeEventTranslateStrategy} from "./strategy/TimeEventTranslateStrategy";
import {RelativeTimeEventTranslateStrategy} from "./strategy/RelativeTimeEventTranslateStrategy";

export class Event {
    name: string;
    args: {};
    state: string;
}

export class EventTool {
    static perSeconds4TimeUnit(timeUnit: string): number {
        switch (timeUnit) {
            case "year":
                return 60 * 60 * 24 * 365;
            case "month":
                return 60 * 60 * 24 * 30;
            case "week":
                return 60 * 60 * 24 * 7;
            case "day":
                return 60 * 60 * 24;
            case "cycle":
                return 60 * 60 * 4;
            case"hour":
                return 60 * 60;
            case "minute":
                return 60;
            default:
                throw new Error("参数错误${timeUnit}");
        }
    }

    static report(events: Event[]): string {
        let result = "";

        if (!events) {
            return result;
        }

        let factory = new EventTranslateStrategyFactory();
        for (let event of events) {
            let eventTranslateStrategy = factory.getEventTranslateStrategy(event.name);
            let content = eventTranslateStrategy.translate(event);
            result = result + "\n\t" + content;
        }

        return result;
    }
}

export class EventTranslateStrategyFactory {

    eventTranslateStrategyMap = new Map<string, EventTranslateStrategy>();

    constructor() {
        this.eventTranslateStrategyMap.set(TransactionEventTranslateStrategy.EVENT_NAME, new TransactionEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(TimeEventTranslateStrategy.EVENT_NAME, new TimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(RelativeTimeEventTranslateStrategy.EVENT_NAME, new RelativeTimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(CycleEndEventTranslateStrategy.EVENT_NAME, new CycleEndEventTranslateStrategy());
    }

    getEventTranslateStrategy(eventName: string): EventTranslateStrategy {
        return this.eventTranslateStrategyMap.get(eventName);
    }
}

export class FSMState {
    name: string;
    serviceStates?: string[];
    events?: Event[];
}

export class FSMRouteElement {
    state: string;
    event: Event;
}

export class FSMTool {

    /**
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]) {
        let routeTmp = [...route];
        let events = states[stateName].transition;
        if (events) {
            for (let event of events) {
                if (!routeTmp.some((e) => {
                    return e.state === event.toState
                })) {
                    routeTmp.push({state: stateName, event: event});
                    this.parseRoutes(states, event.toState, routes, routeTmp);
                } else {
                    routeTmp.push({state: stateName, event: event});
                    routes.push(routeTmp);
                }
            }
        } else {
            routeTmp.push({state: stateName, event: null});
            routes.push(routeTmp);
        }
    }

    static report(fsmStates: FSMState[]) {
        let result = "";
        for (let fsmState of fsmStates) {
            let serviceStates = "";
            if (fsmState.serviceStates) {
                serviceStates = `[${fsmState.serviceStates}]`;
            }
            let content = `状态${fsmState.name}${serviceStates}:${EventTool.report(fsmState.events)}`;
            result = result + "\n" + content;
        }
        return result;
    }
}
