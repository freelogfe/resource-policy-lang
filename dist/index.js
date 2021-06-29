"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTool = exports.Contract = exports.Audience = exports.CompareRoutesOptions = exports.FSMTool = exports.FSMRouteElement = exports.FSMState = exports.EventTranslateStrategyFactory = exports.EventTool = exports.Event = void 0;
const CycleEndEventTranslateStrategy_1 = require("./strategy/CycleEndEventTranslateStrategy");
const TransactionEventTranslateStrategy_1 = require("./strategy/TransactionEventTranslateStrategy");
const TimeEventTranslateStrategy_1 = require("./strategy/TimeEventTranslateStrategy");
const RelativeTimeEventTranslateStrategy_1 = require("./strategy/RelativeTimeEventTranslateStrategy");
const TerminateEventTranslateStrategy_1 = require("./strategy/TerminateEventTranslateStrategy");
class Event {
}
exports.Event = Event;
class EventTool {
    static getName4TimeUnit(timeUnit) {
        return this.timeUnitNameMap[timeUnit];
    }
    static perSeconds4TimeUnit(timeUnit) {
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
            case "hour":
                return 60 * 60;
            case "minute":
                return 60;
            default:
                throw new Error("参数错误${timeUnit}");
        }
    }
    static report(events) {
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
exports.EventTool = EventTool;
// 时间单位名称映射表
EventTool.timeUnitNameMap = {
    "year": "年",
    "month": "个月",
    "week": "个星期",
    "day": "天",
    "hour": "小时",
    "minute": "分钟"
};
class EventTranslateStrategyFactory {
    constructor() {
        this.eventTranslateStrategyMap = new Map();
        this.eventTranslateStrategyMap.set(TransactionEventTranslateStrategy_1.TransactionEventTranslateStrategy.EVENT_NAME, new TransactionEventTranslateStrategy_1.TransactionEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(TimeEventTranslateStrategy_1.TimeEventTranslateStrategy.EVENT_NAME, new TimeEventTranslateStrategy_1.TimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(RelativeTimeEventTranslateStrategy_1.RelativeTimeEventTranslateStrategy.EVENT_NAME, new RelativeTimeEventTranslateStrategy_1.RelativeTimeEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(CycleEndEventTranslateStrategy_1.CycleEndEventTranslateStrategy.EVENT_NAME, new CycleEndEventTranslateStrategy_1.CycleEndEventTranslateStrategy());
        this.eventTranslateStrategyMap.set(TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy.EVENT_NAME, new TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy());
    }
    getEventTranslateStrategy(eventName) {
        return this.eventTranslateStrategyMap.get(eventName);
    }
}
exports.EventTranslateStrategyFactory = EventTranslateStrategyFactory;
class FSMState {
}
exports.FSMState = FSMState;
class FSMRouteElement {
}
exports.FSMRouteElement = FSMRouteElement;
class FSMTool {
    /**
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states, stateName, routes, route) {
        let events = states[stateName].transitions;
        let serviceStates = states[stateName].serviceStates;
        if (events != null && events.length != 0) {
            for (let event of events) {
                if (route.some((e) => {
                    return e.state == event.toState;
                })) {
                    let routeTmp = [...route];
                    routeTmp.push({ state: stateName, serviceStates: serviceStates, event: event });
                    routes.push(routeTmp);
                }
                else {
                    let routeTmp = [...route];
                    routeTmp.push({ state: stateName, serviceStates: serviceStates, event: event });
                    this.parseRoutes(states, event.toState, routes, routeTmp);
                }
            }
        }
        else {
            let routeTmp = [...route];
            routeTmp.push({ state: stateName, serviceStates: serviceStates, event: null });
            routes.push(routeTmp);
        }
    }
    static compareRoutes(routes, routesB, options) {
        if (routes == null || routesB == null || routes.length == 0 || routesB.length == 0) {
            throw new Error("参数错误");
        }
        if (routes.length != routesB.length) {
            throw new Error(`路径数目不同，routes[${routes.length}]，routesB[${routesB.length}]`);
        }
        if (options == null) {
            options = { eventArgs: 0, serviceStates: 0 };
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
        outside: for (let route of routes) {
            let len = route.length;
            if (routeBMap.get(len) == null) {
                throw new Error(`不能够匹配到路径：${route}`);
            }
            inside: for (let routeB of routeBMap.get(len)) {
                for (let i = 0; i < len; i++) {
                    // 比较事件名称
                    if (route[i].event == null) {
                        if (routeB[i].event != null) {
                            continue inside;
                        }
                        else {
                            continue;
                        }
                    }
                    else {
                        if (route[i].event.name != routeB[i].event.name) {
                            continue inside;
                        }
                    }
                    // 比较事件参数
                    if (options.eventArgs == 1) {
                        for (let name in route[i].event.args) {
                            if (!(name in routeB[i].event.args)) {
                                continue inside;
                            }
                            else {
                                if (route[i].event.args[name] == null) {
                                    if (routeB[i].event.args[name] != null) {
                                        continue inside;
                                    }
                                }
                                else {
                                    if (route[i].event.args[name] != routeB[i].event.args[name]) {
                                        continue inside;
                                    }
                                }
                            }
                        }
                    }
                    if (options.serviceStates == 1) { // 色块等价校验
                        if (route[i].serviceStates.length != routeB[i].serviceStates.length) {
                            continue inside;
                        }
                        else {
                            if (!routeB[i].serviceStates.every(re => route[i].serviceStates.includes(re))) {
                                continue inside;
                            }
                        }
                    }
                    else if (options.serviceStates == 2) { // 色块包含校验
                        // todo
                    }
                }
                continue outside;
            }
            let msg = route.map(re => re.event ? re.event.name : "null").join(" => ");
            throw new Error(`不能够匹配到路径：${msg}`);
        }
    }
    static getName4State(state) {
        if (state in this.stateNameMap) {
            return this.stateNameMap[state];
        }
        else {
            return `状态${state}`;
        }
    }
    static getName4ServiceState(serviceState) {
        if (serviceState in this.serviceStateNameMap) {
            return this.serviceStateNameMap[serviceState];
        }
        else {
            return serviceState;
        }
    }
    static parseTransitionInfo(state) {
        return `进入 ${this.getName4State(state)}`;
    }
    static report(fsmStates) {
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
exports.FSMTool = FSMTool;
// 状态机状态名称映射表
FSMTool.stateNameMap = {
    "initial": "初始状态",
    "finish": "终止状态"
};
// 状态机色块名称映射表
FSMTool.serviceStateNameMap = {
    "active": "已授权"
};
class CompareRoutesOptions {
}
exports.CompareRoutesOptions = CompareRoutesOptions;
class Audience {
}
exports.Audience = Audience;
class Contract {
}
exports.Contract = Contract;
class ContractTool {
    static parseAudienceInfo(audience) {
        switch (audience.type) {
            case "public":
                return "公开（所有人可签约）";
            default:
                return audience.name;
        }
    }
    static report(contract) {
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
exports.ContractTool = ContractTool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhGQUF5RjtBQUV6RixvR0FBK0Y7QUFDL0Ysc0ZBQWlGO0FBQ2pGLHNHQUFpRztBQUNqRyxnR0FBMkY7QUFFM0YsTUFBYSxLQUFLO0NBSWpCO0FBSkQsc0JBSUM7QUFFRCxNQUFhLFNBQVM7SUFZbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQWdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQWdCO1FBQ3ZDLFFBQVEsUUFBUSxFQUFFO1lBQ2QsS0FBSyxNQUFNO2dCQUNQLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQzlCLEtBQUssT0FBTztnQkFDUixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUM3QixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUIsS0FBSyxLQUFLO2dCQUNOLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDeEIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkIsS0FBSSxNQUFNO2dCQUNOLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxFQUFFLENBQUM7WUFDZDtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFlO1FBQ3pCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLDZCQUE2QixFQUFFLENBQUM7UUFDbEQsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNFLElBQUksc0JBQXNCLElBQUksSUFBSSxFQUFFO2dCQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzs7QUF2REwsOEJBd0RDO0FBdERHLFlBQVk7QUFDTCx5QkFBZSxHQUFHO0lBQ3JCLE1BQU0sRUFBRSxHQUFHO0lBQ1gsT0FBTyxFQUFFLElBQUk7SUFDYixNQUFNLEVBQUUsS0FBSztJQUNiLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLElBQUk7SUFDWixRQUFRLEVBQUUsSUFBSTtDQUNqQixDQUFDO0FBZ0ROLE1BQWEsNkJBQTZCO0lBSXRDO1FBRkEsOEJBQXlCLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7UUFHbEUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxxRUFBaUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxxRUFBaUMsRUFBRSxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyx1REFBMEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSx1REFBMEIsRUFBRSxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyx1RUFBa0MsQ0FBQyxVQUFVLEVBQUUsSUFBSSx1RUFBa0MsRUFBRSxDQUFDLENBQUM7UUFDNUgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQywrREFBOEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSwrREFBOEIsRUFBRSxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxpRUFBK0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxpRUFBK0IsRUFBRSxDQUFDLENBQUM7SUFDMUgsQ0FBQztJQUVELHlCQUF5QixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUFmRCxzRUFlQztBQUVELE1BQWEsUUFBUTtDQUlwQjtBQUpELDRCQUlDO0FBRUQsTUFBYSxlQUFlO0NBSTNCO0FBSkQsMENBSUM7QUFFRCxNQUFhLE9BQU87SUFFaEI7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFpQixFQUFFLE1BQTJCLEVBQUUsS0FBd0I7UUFDL0YsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFBO2dCQUNuQyxDQUFDLENBQUMsRUFBRTtvQkFDQSxJQUFJLFFBQVEsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7b0JBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzdEO2FBQ0o7U0FDSjthQUFNO1lBQ0gsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQTJCLEVBQUUsT0FBNEIsRUFBRSxPQUE4QjtRQUMxRyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoRixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsTUFBTSxDQUFDLE1BQU0sYUFBYSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLEdBQUcsRUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUMsQ0FBQztTQUM5QztRQUVELElBQUksU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUU7WUFDdkIsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0MsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUNwQixVQUFVLEdBQUcsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLEVBQ0gsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN4QztZQUVELE1BQU0sRUFDRixLQUFLLElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzFCLFNBQVM7b0JBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDeEIsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTs0QkFDekIsU0FBUyxNQUFNLENBQUM7eUJBQ25COzZCQUFNOzRCQUNILFNBQVM7eUJBQ1o7cUJBQ0o7eUJBQU07d0JBQ0gsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDN0MsU0FBUyxNQUFNLENBQUM7eUJBQ25CO3FCQUNKO29CQUVELFNBQVM7b0JBQ1QsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTt3QkFDeEIsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDbEMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ2pDLFNBQVMsTUFBTSxDQUFDOzZCQUNuQjtpQ0FBTTtnQ0FDSCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQ0FDbkMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7d0NBQ3BDLFNBQVMsTUFBTSxDQUFDO3FDQUNuQjtpQ0FDSjtxQ0FBTTtvQ0FDSCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dDQUN6RCxTQUFTLE1BQU0sQ0FBQztxQ0FDbkI7aUNBQ0o7NkJBQ0o7eUJBQ0o7cUJBQ0o7b0JBRUQsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRSxFQUFJLFNBQVM7d0JBQ3pDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7NEJBQ2pFLFNBQVMsTUFBTSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2dDQUMzRSxTQUFTLE1BQU0sQ0FBQzs2QkFDbkI7eUJBQ0o7cUJBQ0o7eUJBQU0sSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRSxFQUFLLFNBQVM7d0JBQ2pELE9BQU87cUJBQ1Y7aUJBQ0o7Z0JBRUQsU0FBUyxPQUFPLENBQUM7YUFDcEI7WUFFTCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN0QztJQUNULENBQUM7SUFRRCxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWE7UUFDOUIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILE9BQU8sS0FBSyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFPRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsWUFBb0I7UUFDNUMsSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDSCxPQUFPLFlBQVksQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBYTtRQUNwQyxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQXFCO1FBQy9CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUM1QixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxRQUFRLENBQUMsYUFBYSxFQUFFO2dCQUN4QixhQUFhLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDMUY7WUFDRCxJQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNwQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7O0FBOUpMLDBCQStKQztBQTNDRyxhQUFhO0FBQ04sb0JBQVksR0FBRztJQUNsQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsTUFBTTtDQUNuQixDQUFDO0FBVUYsYUFBYTtBQUNOLDJCQUFtQixHQUFHO0lBQ3pCLFFBQVEsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUE0Qk4sTUFBYSxvQkFBb0I7Q0FLaEM7QUFMRCxvREFLQztBQUVELE1BQWEsUUFBUTtDQUdwQjtBQUhELDRCQUdDO0FBRUQsTUFBYSxRQUFRO0NBR3BCO0FBSEQsNEJBR0M7QUFFRCxNQUFhLFlBQVk7SUFFckIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQWtCO1FBQ3ZDLFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxZQUFZLENBQUM7WUFDeEI7Z0JBQ0ksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBa0I7UUFDNUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixLQUFLLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDckMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUV0QyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxZQUFZLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBekJELG9DQXlCQyJ9