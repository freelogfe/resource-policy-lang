"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareRoutesOptions = exports.FSMRouteElement = exports.FSMInfo = exports.FsmTransferResult = exports.FsmTransfer = exports.FSMEntity = exports.FSMTool = void 0;
const EventTool_1 = require("./EventTool");
const ServiceStateTool_1 = require("./ServiceStateTool");
const StateTool_1 = require("./StateTool");
const index_1 = require("../index");
const TerminateEventTranslateStrategy_1 = require("../strategy/TerminateEventTranslateStrategy");
const crypto = require('crypto');
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
                let eventIndex = 0;
                eventSectionStrs = fsmEntity.events.map(event => {
                    let eventTranslateInfo = eventTranslateStrategyFactory.getEventTranslateStrategy(event.name).translate4UnFinish(event);
                    eventTranslateInfo.origin["id"] = this.generateEventHashCode({
                        code: eventTranslateInfo.origin["code"],
                        state: fsmEntity.name,
                        toState: eventTranslateInfo.origin["toState"],
                        index: eventIndex
                    });
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
                    eventIndex++;
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
    static generateEventHashCode(event) {
        let hashCode = crypto.createHash("SHA256").update(`${event.code}-${event.state}-${event.toState}-${event.index}`).digest("hex");
        return hashCode.substring(0, 8);
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
    /**
     * 比较路由 顺序相关 OS(ordered sensitive)
     * @param routes
     * @param routesB
     * @param options
     */
    static compareRoutesOS(routes, routesB, options) {
        if (routes == null || routesB == null || routes.length == 0 || routesB.length == 0) {
            throw new Error("参数错误");
        }
        if (routes.length != routesB.length) {
            throw new Error(`路径数目不同，routes[${routes.length}]，routesB[${routesB.length}]`);
        }
        for (let i = 0; i < routes.length; i++) {
            this.compareRoutes([[...routes[i]]], [[...routesB[i]]], options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUVqRCxvQ0FBdUQ7QUFDdkQsaUdBQTRGO0FBRTVGLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQzs7R0FFRztBQUNILE1BQWEsT0FBTztJQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQXdCO1FBQ2xDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUMvQixJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDMUQsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLGlFQUErQixDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLE1BQU0sR0FBRztnQkFDVCxTQUFTLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDM0MsaUJBQWlCLEVBQUUsbUNBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7Z0JBQ25FLG1CQUFtQixFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQzthQUNuRixDQUFDO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQXdCLEVBQUUsWUFBMkIsRUFBRSxrQkFBbUI7UUFDdEYs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