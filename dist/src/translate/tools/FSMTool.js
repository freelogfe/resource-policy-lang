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
                        return this.generateEventServiceStatesStr(eventTranslateInfo.content, fsmEntityMap[event.toState].serviceStates);
                    }
                    else {
                        if (fsmEntity.events.length > 1) {
                            return `${eventTranslateInfo.content}，若未执行其它事件，合约将自动终止`;
                        }
                        else {
                            return `${eventTranslateInfo.content}，合约将自动终止`;
                        }
                    }
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