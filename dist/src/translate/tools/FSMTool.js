"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareRoutesOptions = exports.FSMRouteElement = exports.FSMInfo = exports.FsmTransferResult = exports.FsmTransfer = exports.FSMEntity = exports.FSMTool = void 0;
const EventTool_1 = require("./EventTool");
const ServiceStateTool_1 = require("./ServiceStateTool");
const StateTool_1 = require("./StateTool");
const index_1 = require("../index");
const TerminateEventTranslateStrategy_1 = require("../strategy/TerminateEventTranslateStrategy");
/**
 * 状态机工具
 */
class FSMTool {
    static report(fsmEntities) {
        let results = [];
        for (let fsmEntity of fsmEntities) {
            if (fsmEntity.events == null || fsmEntity.events.length == 0) {
                fsmEntity.events = [{ name: TerminateEventTranslateStrategy_1.TerminateEventTranslateStrategy.EVENT_NAME }];
            }
            let result = {
                stateInfo: StateTool_1.StateTool.report(fsmEntity.name),
                serviceStateInfos: ServiceStateTool_1.ServiceStateTool.report(fsmEntity.serviceStates),
                eventTranslateInfos: EventTool_1.EventTool.report(fsmEntity.events, fsmEntity.serviceStates)
            };
            results.push(result);
        }
        return results;
    }
    static transfer(fsmEntities, fsmTransfers) {
        let fsmTransferResults = [];
        let content = "";
        let fsmEntityMap = {};
        fsmEntities.forEach(fsmEntity => {
            fsmEntityMap[fsmEntity.name] = fsmEntity;
        });
        let eventTranslateStrategyFactory = new index_1.EventTranslateStrategyFactory();
        for (let i = 0; i < fsmTransfers.length; i++) {
            let fsmTransfer = fsmTransfers[i];
            let fsmEntity = fsmEntityMap[fsmTransfer.state];
            let serviceStatesStr = "未授权";
            if (fsmEntity.serviceStates != null && fsmEntity.serviceStates.length != 0) {
                serviceStatesStr = `已${ServiceStateTool_1.ServiceStateTool.report(fsmEntity.serviceStates).map(serviceStateInfo => serviceStateInfo.content).join("，")}`;
            }
            else {
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
                    }
                    else {
                        // 起始状态且没有事件可跳转到其他状态
                        stateInfoStr = "签约成功，已获得永久授权";
                    }
                }
            }
            else {
                if (i != 0) {
                    let preTransfer = fsmTransfers[i - 1];
                    let eventTranslateStrategy = eventTranslateStrategyFactory.getEventTranslateStrategy(preTransfer.event.name);
                    let eventTranslateInfo = eventTranslateStrategy.translate4Finished(preTransfer.event);
                    stateInfoStr = eventTranslateInfo.content;
                    if (fsmEntity.events.length != 0) {
                        stateInfoStr = this.generateEventServiceStatesStr(stateInfoStr, fsmEntity.serviceStates);
                    }
                    else {
                        if (fsmEntityMap[preTransfer.state].events.length > 1) {
                            stateInfoStr = `${stateInfoStr}，未执行其它事件，合约已自动终止`;
                        }
                        else {
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
                        let stateInfo = StateTool_1.StateTool.report(fsmTransfer.event.toState);
                        eventSelectStr = `${stateInfo.content} 下可选择执行以下事件：`;
                        eventSection = fsmEntityMap[fsmTransfer.event.toState].events;
                    }
                    else {
                        eventStr = `${eventStr}，合约将自动终止`;
                    }
                }
                else if (fsmEntity.events.length != 0) {
                    eventSelectStr = "请选择以下任一事件执行：";
                    eventSection = fsmEntity.events;
                }
                eventSectionStrs = eventSection.map(event => {
                    let eventTranslateInfo = eventTranslateStrategyFactory.getEventTranslateStrategy(event.name).translate4UnFinish(event);
                    if (fsmEntityMap[event.toState].events.length != 0) {
                        return this.generateEventServiceStatesStr(eventTranslateInfo.content, fsmEntityMap[event.toState].serviceStates);
                    }
                    else {
                        if (eventSection.length > 1) {
                            return `${eventTranslateInfo.content}，若未执行其它事件，合约将自动终止`;
                        }
                        else {
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
            });
            content += `· ${stateStr}\n`;
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
    static generateEventServiceStatesStr(eventStr, serviceStates) {
        let serviceStatesStr = "授权结束";
        if (serviceStates != null && serviceStates.length != 0) {
            let nextServiceStatesStrArray = ServiceStateTool_1.ServiceStateTool.report(serviceStates).map(serviceStateInfo => serviceStateInfo.content).join("，");
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
    /**
     * 比较路由
     * @param routes
     * @param routesB
     * @param options
     */
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
}
exports.FSMTool = FSMTool;
/**
 * 状态机实体
 */
class FSMEntity {
}
exports.FSMEntity = FSMEntity;
class FsmTransfer {
}
exports.FsmTransfer = FsmTransfer;
class FsmTransferResult {
}
exports.FsmTransferResult = FsmTransferResult;
/**
 * 状态机信息
 */
class FSMInfo {
}
exports.FSMInfo = FSMInfo;
/**
 * 状态机路由元素
 */
class FSMRouteElement {
}
exports.FSMRouteElement = FSMRouteElement;
/**
 * 比较路由参数选项
 */
class CompareRoutesOptions {
}
exports.CompareRoutesOptions = CompareRoutesOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUVqRCxvQ0FBdUQ7QUFDdkQsaUdBQTRGO0FBRTVGOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBd0I7UUFDbEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO1lBQy9CLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxRCxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsaUVBQStCLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQzthQUMzRTtZQUNELElBQUksTUFBTSxHQUFHO2dCQUNULFNBQVMsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMzQyxpQkFBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDbkUsbUJBQW1CLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDO2FBQ25GLENBQUM7WUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBd0IsRUFBRSxZQUEyQjtRQUNqRSxJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7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