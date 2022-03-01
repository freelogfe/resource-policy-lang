import {EventEntity, EventTool} from "./EventTool";
import {ServiceStateInfo, ServiceStateTool} from "./ServiceStateTool";
import {StateInfo, StateTool} from "./StateTool";
import {EventTranslateInfo} from "../strategy/EventTranslateStrategy";
import {EventTranslateStrategyFactory} from "../index";
import {TerminateEventTranslateStrategy} from "../strategy/TerminateEventTranslateStrategy";

/**
 * 状态机工具
 */
export class FSMTool {

    static report(fsmEntities: FSMEntity[]): FSMInfo[] {
        let results = [];

        for (let fsmEntity of fsmEntities) {
            if (fsmEntity.events == null || fsmEntity.events.length == 0) {
                fsmEntity.events = [{name: TerminateEventTranslateStrategy.EVENT_NAME}];
            }
            let result = {
                stateInfo: StateTool.report(fsmEntity.name),
                serviceStateInfos: ServiceStateTool.report(fsmEntity.serviceStates),
                eventTranslateInfos: EventTool.report(fsmEntity.events, fsmEntity.serviceStates)
            };

            results.push(result);
        }

        return results;
    }

    static transfer(fsmEntities: FSMEntity[], fsmTransfers: FsmTransfer[]): any {
        let fsmTransferResults = [];
        let content = "";

        let fsmEntityMap = {};
        fsmEntities.forEach(fsmEntity => {
            fsmEntityMap[fsmEntity.name] = fsmEntity;
        });

        let eventTranslateStrategyFactory = new EventTranslateStrategyFactory();
        for (let i = 0; i < fsmTransfers.length; i++) {
            let fsmTransfer = fsmTransfers[i];
            let fsmEntity = fsmEntityMap[fsmTransfer.state];

            let serviceStatesStr = "未授权";
            if (fsmEntity.serviceStates != null && fsmEntity.serviceStates.length != 0) {
                serviceStatesStr = `已${ServiceStateTool.report(fsmEntity.serviceStates).map(serviceStateInfo => serviceStateInfo.content).join("，")}`;
            } else {
                if (fsmEntity.events.length == 0) {
                    serviceStatesStr = "已终止";
                }
            }
            // 状态翻译
            let stateStr = `${serviceStatesStr} ${fsmTransfer.time}`;
            // 状态信息翻译
            let stateInfoStr = "";
            // 是否起始状态
            if (fsmTransfer.fromState == null) {
                if (fsmEntity.serviceStates != null && fsmEntity.serviceStates.indexOf("active") != -1) {
                    if (fsmEntity.events.length != 0) {
                        stateInfoStr = "签约成功，已获得授权";
                    } else {
                        // 起始状态且没有事件可跳转到其他状态
                        stateInfoStr = "签约成功，已获得永久授权";
                    }
                }
            } else {
                if (i != 0) {
                    let preTransfer = fsmTransfers[i - 1];
                    let eventTranslateStrategy = eventTranslateStrategyFactory.getEventTranslateStrategy(preTransfer.event.name);
                    let eventTranslateInfo = eventTranslateStrategy.translate4Finished(preTransfer.event);
                    stateInfoStr = eventTranslateInfo.content;
                    if (fsmEntity.events.length != 0) {
                        stateInfoStr = this.generateEventServiceStatesStr(stateInfoStr, fsmEntity.serviceStates);
                    } else {
                        if (fsmEntityMap[preTransfer.state].events.length > 1) {
                            stateInfoStr = `${stateInfoStr}，未执行其它事件，合约已自动终止`;
                        } else {
                            stateInfoStr = `${stateInfoStr}，合约已自动终止`;
                        }
                    }
                }
            }

            // 当前事件翻译
            let eventStr = "";
            // 事件选项提示语
            let eventSelectStr = "";
            // 事件选项翻译
            let eventSectionStrs = [];

            // 最终流转状态
            if (fsmTransfer.toState == null) {
                let eventSection = [];
                if (fsmTransfer.event != null) {
                    let eventTranslateStrategy = eventTranslateStrategyFactory.getEventTranslateStrategy(fsmTransfer.event.name);
                    let eventTranslateInfo = eventTranslateStrategy.translate4UnFinish(fsmTransfer.event);
                    eventStr = eventTranslateInfo.content;
                    if (fsmEntityMap[fsmTransfer.event.toState].events.length != 0) {
                        eventStr = this.generateEventServiceStatesStr(eventStr, fsmEntityMap[fsmTransfer.event.toState].serviceStates);

                        let stateInfo = StateTool.report(fsmTransfer.event.toState);
                        eventSelectStr = `${stateInfo.content} 下可选择执行以下事件：`;

                        eventSection = fsmEntityMap[fsmTransfer.event.toState].events;
                    } else {
                        eventStr = `${eventStr}，合约将自动终止`;
                    }
                } else if (fsmEntity.events.length != 0) {
                    eventSelectStr = "请选择以下任一事件执行："

                    eventSection = fsmEntity.events;
                }

                eventSectionStrs = eventSection.map(event => {
                    let eventTranslateInfo = eventTranslateStrategyFactory.getEventTranslateStrategy(event.name).translate4UnFinish(event);
                    if (fsmEntityMap[event.toState].events.length != 0) {
                        return this.generateEventServiceStatesStr(eventTranslateInfo.content, fsmEntityMap[event.toState].serviceStates);
                    } else {
                        if (eventSection.length > 1) {
                            return `${eventTranslateInfo.content}，若未执行其它事件，合约将自动终止`;
                        } else {
                            return `${eventTranslateInfo.content}，合约将自动终止`;
                        }
                    }
                });
            }

            fsmTransferResults.push({
                stateStr: stateStr,
                stateInfoStr: stateInfoStr,
                eventStr: eventStr,
                eventSelectStr: eventSelectStr,
                eventSectionStrs: eventSectionStrs
            } as FsmTransferResult);

            content += `· ${stateStr}\n`
            if (stateInfoStr.length != 0) {
                content += `  ${stateInfoStr}\n`;
            }
            if (eventStr.length != 0) {
                content += `  > ${eventStr}\n`;
            }
            if (eventSelectStr.length != 0) {
                content += `  ${eventSelectStr}\n`;
            }
            eventSectionStrs.forEach(eventSectionStr => {
                content += `    ^ ${eventSectionStr}\n`;
            });
        }

        return {
            fsmTransferResults: fsmTransferResults,
            content: content
        };
    }

    static generateEventServiceStatesStr(eventStr: string, serviceStates: string[]) {
        let serviceStatesStr = "授权结束";
        if (serviceStates != null && serviceStates.length != 0) {
            let nextServiceStatesStrArray = ServiceStateTool.report(serviceStates).map(serviceStateInfo => serviceStateInfo.content).join("，");
            serviceStatesStr = `获得${nextServiceStatesStrArray}`;
        }
        return `${eventStr}，${serviceStatesStr}`;
    }

    /**
     * 解析路由
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

    /**
     * 比较路由
     * @param routes
     * @param routesB
     * @param options
     */
    static compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options ?: CompareRoutesOptions): void {
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
    // 状态名称
    name: string;
    // 色块集合
    serviceStates?: string[];
    // 事件集合
    events?: EventEntity[];
}

export class FsmTransfer {
    fromState: string;
    state: string;
    toState: string;
    time: string;
    event: EventEntity;
}

export class FsmTransferResult {
    // 状态翻译
    stateStr: string;
    // 状态信息翻译
    stateInfoStr: string;
    // 当前事件翻译
    eventStr: string;
    // 事件选项提示语
    eventSelectStr: string;
    // 事件选项翻译
    eventSectionStrs: string[];
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
