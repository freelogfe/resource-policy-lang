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
    static transfer(fsmEntities, fsmTransfers, transferSetMapJson) {
        let fsmTransferResults = [];
        let content = "";
        let fsmEntityMap = {};
        fsmEntities.forEach(fsmEntity => {
            fsmEntityMap[fsmEntity.name] = fsmEntity;
        });
        let eventTranslateStrategyFactory = new index_1.EventTranslateStrategyFactory();
        for (let i = 0; i < fsmTransfers.length; i++) {
            // 当前扭转记录
            let fsmTransfer = fsmTransfers[i];
            // 当前扭转记录所在的state的状态机状态实体
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
            if (fsmTransfer.event == null) { // fsmTransfer.isFirst
                if (fsmEntity.serviceStates != null && fsmEntity.serviceStates.indexOf("active") != -1) {
                    if (fsmEntity.events.length != 0) {
                        stateInfoStr = "签约成功，已获得授权";
                    }
                    else {
                        // 起始状态且没有事件可跳转到其他状态
                        stateInfoStr = "签约成功，已获得永久授权";
                    }
                }
                else {
                    stateInfoStr = "签约成功";
                }
            }
            else {
                let eventTranslateStrategy = eventTranslateStrategyFactory.getEventTranslateStrategy(fsmTransfer.event.name);
                let eventTranslateInfo = eventTranslateStrategy.translate4Finished(fsmTransfer.event);
                stateInfoStr = eventTranslateInfo.content;
                if (fsmEntity.events.length != 0) {
                    stateInfoStr = this.generateEventServiceStatesStr(stateInfoStr, fsmEntity.serviceStates);
                }
                else {
                    if (fsmEntityMap[fsmTransfer.fromState].events.length > 1) {
                        stateInfoStr = `${stateInfoStr}，未执行其它事件，合约已自动终止`;
                    }
                    else {
                        stateInfoStr = `${stateInfoStr}，合约已自动终止`;
                    }
                }
            }
            // 当前事件翻译
            let eventStr = "";
            // 事件选项提示语
            let eventSelectStr = "";
            // 事件选项翻译
            let eventSectionStrs = [];
            let eventSectionEntities = [];
            // 最终流转状态
            if (fsmTransfer.isLast && fsmEntity.events.length != 0) {
                const generateTransferSetKey = function (state, eventName, toState) {
                    return `${state}.${eventName} => ${toState}`;
                };
                eventSelectStr = "请选择以下任一事件执行：";
                eventSectionStrs = fsmEntity.events.map(event => {
                    let eventTranslateInfo = eventTranslateStrategyFactory.getEventTranslateStrategy(event.name).translate4UnFinish(event);
                    if (transferSetMapJson != null) {
                        let sourceKey = generateTransferSetKey(fsmEntity.name, event.name, event.toState);
                        if (sourceKey in transferSetMapJson) {
                            eventTranslateInfo.content = transferSetMapJson[sourceKey];
                        }
                    }
                    if (fsmEntityMap[event.toState].events.length != 0) {
                        eventTranslateInfo.content = this.generateEventServiceStatesStr(eventTranslateInfo.content, fsmEntityMap[event.toState].serviceStates);
                    }
                    else {
                        if (fsmEntity.events.length > 1) {
                            eventTranslateInfo.content = `${eventTranslateInfo.content}，若未执行其它事件，合约将自动终止`;
                        }
                        else {
                            eventTranslateInfo.content = `${eventTranslateInfo.content}，合约将自动终止`;
                        }
                    }
                    eventSectionEntities.push(eventTranslateInfo);
                    return eventTranslateInfo.content;
                });
            }
            fsmTransferResults.push({
                id: fsmTransfer.id,
                serviceStates: this.generateServiceStatesCode(fsmEntity.serviceStates),
                time: fsmTransfer.time,
                stateStr: stateStr,
                stateInfoStr: stateInfoStr,
                eventStr: eventStr,
                eventSelectStr: eventSelectStr,
                eventSectionStrs: eventSectionStrs,
                eventSectionEntities: eventSectionEntities
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
    static generateServiceStatesCode(serviceStates) {
        if (serviceStates == null || serviceStates.length == 0) {
            return 128;
        }
        if (serviceStates.indexOf("active") != -1 && serviceStates.indexOf("testActive") != -1) {
            return 3;
        }
        if (serviceStates.indexOf("active") != -1) {
            return 1;
        }
        if (serviceStates.indexOf("testActive") != -1) {
            return 2;
        }
        return 128;
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
        // 当前状态可执行事件
        let events = states[stateName].transitions;
        // 当前状态包含的色块
        let serviceStates = states[stateName].serviceStates;
        // 说明是否finish状态
        if (events != null && events.length != 0) {
            for (let event of events) {
                // 是否与当前的路径形成环状
                if (route.some((e) => {
                    return e.state == event.toState;
                })) {
                    // 一旦形成环状路径，则不再继续往下寻找
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
            // 如果到了finish状态，则不再继续往下寻找
            let routeTmp = [...route];
            routeTmp.push({ state: stateName, serviceStates: serviceStates, event: null });
            routes.push(routeTmp);
        }
    }
    static cleanUpRoutes(routes) {
        let stateNameMap = new Map();
        let index = 0;
        for (let route of routes) {
            for (let element of route) {
                let stateName = element.state;
                if (!stateNameMap.has(stateName)) {
                    stateNameMap.set(stateName, `s${index++}`);
                }
            }
        }
        for (let route of routes) {
            for (let element of route) {
                if (stateNameMap.has(element.state)) {
                    element.state = stateNameMap.get(element.state);
                }
                // 对色块做排序
                element.serviceStates.sort();
                if (element.event != null && stateNameMap.has(element.event.toState)) {
                    // 处理事件字段
                    element.event = {
                        name: element.event.name,
                        toState: stateNameMap.get(element.event.toState)
                    };
                }
            }
        }
        return stateNameMap;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUVqRCxvQ0FBdUQ7QUFDdkQsaUdBQTRGO0FBRTVGOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBd0I7UUFDbEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxTQUFTLElBQUksV0FBVyxFQUFFO1lBQy9CLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxRCxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsaUVBQStCLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQzthQUMzRTtZQUNELElBQUksTUFBTSxHQUFHO2dCQUNULFNBQVMsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMzQyxpQkFBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDbkUsbUJBQW1CLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDO2FBQ25GLENBQUM7WUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBd0IsRUFBRSxZQUEyQixFQUFFLGtCQUFtQjtRQUN0RixJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FB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