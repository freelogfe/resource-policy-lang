import {CycleEndEventTranslateStrategy} from "./strategy/CycleEndEventTranslateStrategy";
import {EventTranslateStrategy} from "./strategy/EventTranslateStrategy";
import {TransactionEventTranslateStrategy} from "./strategy/TransactionEventTranslateStrategy";
import {TimeEventTranslateStrategy} from "./strategy/TimeEventTranslateStrategy";
import {RelativeTimeEventTranslateStrategy} from "./strategy/RelativeTimeEventTranslateStrategy";
import {TerminateEventTranslateStrategy} from "./strategy/TerminateEventTranslateStrategy";

export class Event {
    name: string;
    args?: {};
    state?: string;
}

export class EventTool {

    // 时间单位名称映射表
    static timeUnitNameMap = {
        "year": "年",
        "month": "个月",
        "week": "个星期",
        "day": "天",
        "hour": "小时",
        "minute": "分钟"
    };

    static getName4TimeUnit(timeUnit: string) {
        return this.timeUnitNameMap[timeUnit];
    }

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
            if (eventTranslateStrategy == null) {
                throw new Error(`不支持该事件：${event.name}`);
            }
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
        this.eventTranslateStrategyMap.set(TerminateEventTranslateStrategy.EVENT_NAME, new TerminateEventTranslateStrategy());
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
    serviceStates: string[];
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
        let events = states[stateName].transitions;
        let serviceStates = states[stateName].serviceStates;
        if (events != null && events.length != 0) {
            for (let event of events) {
                if (route.some((e) => {
                    return e.state == event.toState
                })) {
                    let routeTmp = [...route];
                    routeTmp.push({state: stateName, serviceStates: serviceStates, event: event});
                    routes.push(routeTmp);
                } else {
                    let routeTmp = [...route];
                    routeTmp.push({state: stateName, serviceStates: serviceStates, event: event});
                    this.parseRoutes(states, event.toState, routes, routeTmp);
                }
            }
        } else {
            let routeTmp = [...route];
            routeTmp.push({state: stateName, serviceStates: serviceStates, event: null});
            routes.push(routeTmp);
        }
    }

    static compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions) {
        if (routes == null || routesB == null || routes.length == 0 || routesB.length == 0) {
            throw new Error("参数错误");
        }
        if (routes.length != routesB.length) {
            throw new Error(`路径数目不同，routes[${routes.length}]，routesB[${routesB.length}]`);
        }
        if (options == null) {
            options = {eventArgs: 0, serviceStates: 0};
        }

        let routeBMap = new Map();
        for (let route of routesB) {
            let routeArray = routeBMap.get(route.length);
            if (routeArray == null) {
                routeArray = [];
            }
            routeArray.push(route);
            routeBMap.set(route.length, routeArray);
        }

        outside:
            for (let route of routes) {
                let len = route.length;
                if (routeBMap.get(len) == null) {
                    throw new Error(`不能够匹配到路径：${route}`);
                }

                inside:
                    for (let routeB of routeBMap.get(len)) {
                        for (let i = 0; i < len; i++) {
                            // 比较事件名称
                            if (route[i].event == null) {
                                if (routeB[i].event != null) {
                                    continue inside;
                                } else {
                                    continue;
                                }
                            } else {
                                if (route[i].event.name != routeB[i].event.name) {
                                    continue inside;
                                }
                            }

                            // 比较事件参数
                            if (options.eventArgs == 1) {
                                for (let name in route[i].event.args) {
                                    if (!(name in routeB[i].event.args)) {
                                        continue inside;
                                    } else {
                                        if (route[i].event.args[name] == null) {
                                            if (routeB[i].event.args[name] != null) {
                                                continue inside;
                                            }
                                        } else {
                                            if (route[i].event.args[name] != routeB[i].event.args[name]) {
                                                continue inside;
                                            }
                                        }
                                    }
                                }
                            }

                            if (options.serviceStates == 1) {   // 色块等价校验
                                if (route[i].serviceStates.length != routeB[i].serviceStates.length) {
                                    continue inside;
                                } else {
                                    if (!routeB[i].serviceStates.every(re => route[i].serviceStates.includes(re))) {
                                        continue inside;
                                    }
                                }
                            } else if (options.serviceStates == 2) {    // 色块包含校验
                                // todo
                            }
                        }

                        continue outside;
                    }

                let msg = route.map(re => re.event ? re.event.name : "null").join(" => ");
                throw new Error(`不能够匹配到路径：${msg}`);
            }
    }

    // 状态机状态名称映射表
    static stateNameMap = {
        "initial": "初始状态",
        "finish": "终止状态"
    };

    static getName4State(state: string) {
        if (state in this.stateNameMap) {
            return this.stateNameMap[state];
        } else {
            return `状态${state}`;
        }
    }

    // 状态机色块名称映射表
    static serviceStateNameMap = {
        "active": "已授权"
    };

    static getName4ServiceState(serviceState: string) {
        if (serviceState in this.serviceStateNameMap) {
            return this.serviceStateNameMap[serviceState];
        } else {
            return serviceState;
        }
    }

    static parseTransitionInfo(state: string) {
        return `进入 ${this.getName4State(state)}`;
    }

    static report(fsmStates: FSMState[]) {
        let result = "";
        for (let fsmState of fsmStates) {
            let serviceStates = "";
            if (fsmState.serviceStates) {
                serviceStates = `[${fsmState.serviceStates.map(ss => this.getName4ServiceState(ss))}]`;
            }
            let content = `${this.getName4State(fsmState.name)}${serviceStates}:${EventTool.report(fsmState.events)}`;
            result = result + "\n" + content;
        }
        return result;
    }
}

export class CompareRoutesOptions {
    // 是否做参数校验 0:否 1:是
    eventArgs: number;
    // 是否做色块校验 0:否 1:是 2:包含
    serviceStates: number;
}

export class Audience {
    name: string;
    type: string;
}

export class Contract {
    audiences: Audience[];
    fsmStates: FSMState[];
}

export class ContractTool {

    static parseAudienceInfo(audience: Audience) {
        switch (audience.type) {
            case "public":
                return "公开（所有人可签约）";
            default:
                return audience.name;
        }
    }

    static report(contract: Contract) {
        let result = "";

        let audiencesStr = "";
        for (let audience of contract.audiences) {
            audiencesStr += this.parseAudienceInfo(audience);
        }
        result = result + "\n" + audiencesStr;

        let fsmStatesStr = FSMTool.report(contract.fsmStates);
        result = result + "\n" + fsmStatesStr;

        return result;
    }
}
