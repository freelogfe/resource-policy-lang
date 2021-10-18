import {EventEntity, EventTool} from "./EventTool";
import {ServiceStateInfo, ServiceStateTool} from "./ServiceStateTool";
import {StateInfo, StateTool} from "./StateTool";
import {EventTranslateInfo} from "../strategy/EventTranslateStrategy";

export class FSMTool {

    static report(fsmEntities: FSMEntity[]): FSMInfo[] {
        let results = [];

        let fsmEntityMap = new Map();
        for (let fsmEntity of fsmEntities) {
            fsmEntityMap.set(fsmEntity.name, fsmEntity);
        }

        for (let fsmEntity of fsmEntities) {
            let result = {
                stateInfo: StateTool.report(fsmEntity.name),
                serviceStateInfos: ServiceStateTool.report(fsmEntity.serviceStates),
                eventTranslateInfos: EventTool.report(fsmEntity.events)
            };

            results.push(result);
        }

        return results;
    }

    /**
     * @param states 状态机
     * @param stateName 起始状态名
     * @param routes 路由集合（结果）
     * @param route 路由
     */
    static parseRoutes(states, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void {
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

    static compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void {
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
}

/**
 * 状态机实体
 */
export class FSMEntity {
    name: string;
    serviceStates?: string[];
    events?: EventEntity[];
}

/**
 * 状态机信息
 */
export class FSMInfo {
    stateInfo: StateInfo;
    serviceStateInfos: ServiceStateInfo[];
    eventTranslateInfos: EventTranslateInfo[];
}

/**
 * 状态机路由元素
 */
export class FSMRouteElement {
    state: string;
    serviceStates: string[];
    event: EventEntity;
}

/**
 * 比较路由参数选项
 */
export class CompareRoutesOptions {
    // 是否做参数校验 0:否 1:是
    eventArgs: number;
    // 是否做色块校验 0:否 1:是 2:包含
    serviceStates: number;
}
