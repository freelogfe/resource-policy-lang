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
                    if (fsmEntity.serviceStates == null || fsmEntity.serviceStates.indexOf("active") == -1) {
                        if (fsmEntityMap[fsmTransfer.fromState].events.length > 1) {
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
                    let isInTransferSet = false;
                    if (transferSetMapJson != null) {
                        let sourceKey = generateTransferSetKey(fsmEntity.name, event.name, event.toState);
                        if (sourceKey in transferSetMapJson) {
                            eventTranslateInfo.content = transferSetMapJson[sourceKey];
                            isInTransferSet = true;
                        }
                    }
                    if (fsmEntityMap[event.toState].events.length != 0) {
                        if (!isInTransferSet) {
                            eventTranslateInfo.content = this.generateEventServiceStatesStr(eventTranslateInfo.content, fsmEntityMap[event.toState].serviceStates);
                        }
                    }
                    else {
                        if (fsmEntityMap[event.toState].serviceStates == null || fsmEntityMap[event.toState].serviceStates.indexOf("active") == -1) {
                            if (fsmEntity.events.length > 1) {
                                eventTranslateInfo.content = `${eventTranslateInfo.content}，若未执行其它事件，合约将自动终止`;
                            }
                            else {
                                eventTranslateInfo.content = `${eventTranslateInfo.content}，合约将自动终止`;
                            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUVqRCxvQ0FBdUQ7QUFDdkQsaUdBQTRGO0FBRTVGLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQzs7R0FFRztBQUNILE1BQWEsT0FBTztJQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQXdCO1FBQ2xDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUMvQixJQUFJLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDMUQsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLGlFQUErQixDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLE1BQU0sR0FBRztnQkFDVCxTQUFTLEVBQUUscUJBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDM0MsaUJBQWlCLEVBQUUsbUNBQWdCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7Z0JBQ25FLG1CQUFtQixFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQzthQUNuRixDQUFDO1lBRUYsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQXdCLEVBQUUsWUFBMkIsRUFBRSxrQkFBbUI7UUFDdEYsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVCLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSw2QkFBNkIsR0FBRyxJQUFJLHFDQUE2QixFQUFFLENBQUM7UUFDeEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsU0FBUztZQUNULElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyx5QkFBeUI7WUFDekIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVoRCxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLFNBQVMsQ0FBQyxhQUFhLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDeEUsZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDekk7aUJBQU07Z0JBQ0gsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzlCLGdCQUFnQixHQUFHLEtBQUssQ0FBQztpQkFDNUI7YUFDSjtZQUVELE9BQU87WUFDUCxJQUFJLFFBQVEsR0FBRyxHQUFHLGdCQUFnQixJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6RCxTQUFTO1lBQ1QsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLFNBQVM7WUFDVCxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLEVBQUUsc0JBQXNCO2dCQUNuRCxJQUFJLFNBQVMsQ0FBQyxhQUFhLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUNwRixJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDOUIsWUFBWSxHQUFHLFlBQVksQ0FBQztxQkFDL0I7eUJBQU07d0JBQ0gsb0JBQW9CO3dCQUNwQixZQUFZLEdBQUcsY0FBYyxDQUFDO3FCQUNqQztpQkFDSjtxQkFBTTtvQkFDSCxZQUFZLEdBQUcsTUFBTSxDQUFDO2lCQUN6QjthQUNKO2lCQUFNO2dCQUNILElBQUksc0JBQXNCLEdBQUcsNkJBQTZCLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0csSUFBSSxrQkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RGLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQzVGO3FCQUFNO29CQUNILElBQUksU0FBUyxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ3BGLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDdkQsWUFBWSxHQUFHLEdBQUcsWUFBWSxrQkFBa0IsQ0FBQzt5QkFDcEQ7NkJBQU07NEJBQ0gsWUFBWSxHQUFHLEdBQUcsWUFBWSxVQUFVLENBQUM7eUJBQzVDO3FCQUNKO2lCQUNKO2FBQ0o7WUFFRCxTQUFTO1lBQ1QsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLFVBQVU7WUFDVixJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDeEIsU0FBUztZQUNULElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1lBRTlCLFNBQVM7WUFDVCxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNwRCxNQUFNLHNCQUFzQixHQUFHLFVBQVUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsT0FBZTtvQkFDdEYsT0FBTyxHQUFHLEtBQUssSUFBSSxTQUFTLE9BQU8sT0FBTyxFQUFFLENBQUM7Z0JBQ2pELENBQUMsQ0FBQztnQkFFRixjQUFjLEdBQUcsY0FBYyxDQUFDO2dCQUNoQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QyxJQUFJLGtCQUFrQixHQUF1Qiw2QkFBNkIsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7d0JBQ3pELElBQUksRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUN2QyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUk7d0JBQ3JCLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO3dCQUM3QyxLQUFLLEVBQUUsVUFBVTtxQkFDcEIsQ0FBQyxDQUFDO29CQUVILElBQUksZUFBZSxHQUFZLEtBQUssQ0FBQztvQkFDckMsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7d0JBQzVCLElBQUksU0FBUyxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2xGLElBQUksU0FBUyxJQUFJLGtCQUFrQixFQUFFOzRCQUNqQyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7NEJBQzNELGVBQWUsR0FBRyxJQUFJLENBQUM7eUJBQzFCO3FCQUNKO29CQUVELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDaEQsSUFBSSxDQUFDLGVBQWUsRUFBRTs0QkFDbEIsa0JBQWtCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt5QkFDMUk7cUJBQ0o7eUJBQU07d0JBQ0gsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUN4SCxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDN0Isa0JBQWtCLENBQUMsT0FBTyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxtQkFBbUIsQ0FBQzs2QkFDakY7aUNBQU07Z0NBQ0gsa0JBQWtCLENBQUMsT0FBTyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxVQUFVLENBQUM7NkJBQ3hFO3lCQUNKO3FCQUNKO29CQUVELG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO29CQUU5QyxVQUFVLEVBQUUsQ0FBQztvQkFFYixPQUFPLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDcEIsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFO2dCQUNsQixhQUFhLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7Z0JBQ3RFLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGNBQWM7Z0JBQzlCLGdCQUFnQixFQUFFLGdCQUFnQjtnQkFDbEMsb0JBQW9CLEVBQUUsb0JBQW9CO2FBQ3hCLENBQUMsQ0FBQztZQUV4QixPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQTtZQUM1QixJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMxQixPQUFPLElBQUksS0FBSyxZQUFZLElBQUksQ0FBQzthQUNwQztZQUNELElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxPQUFPLFFBQVEsSUFBSSxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLEtBQUssY0FBYyxJQUFJLENBQUM7YUFDdEM7WUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxTQUFTLGVBQWUsSUFBSSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPO1lBQ0gsa0JBQWtCLEVBQUUsa0JBQWtCO1lBQ3RDLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRUQsTUFBTSxDQUFDLHlCQUF5QixDQUFDLGFBQXVCO1FBQ3BELElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDcEYsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUNELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNLENBQUMsNkJBQTZCLENBQUMsUUFBZ0IsRUFBRSxhQUF1QjtRQUMxRSxJQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUM5QixJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSx5QkFBeUIsR0FBRyxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkksZ0JBQWdCLEdBQUcsS0FBSyx5QkFBeUIsRUFBRSxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxHQUFHLFFBQVEsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBc0U7UUFDL0YsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEksT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBaUIsRUFBRSxNQUEyQixFQUFFLEtBQXdCO1FBQy9GLFlBQVk7UUFDWixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzNDLFlBQVk7UUFDWixJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3BELGVBQWU7UUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ3RCLGVBQWU7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsRUFBRTtvQkFDQSxxQkFBcUI7b0JBQ3JCLElBQUksUUFBUSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztvQkFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDN0Q7YUFDSjtTQUNKO2FBQU07WUFDSCx5QkFBeUI7WUFDekIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQTJCO1FBQzVDLElBQUksWUFBWSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzdDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUN2QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQzlDO2FBQ0o7U0FDSjtRQUNELEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3RCLEtBQUssSUFBSSxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUN2QixJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQyxPQUFPLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNuRDtnQkFDRCxTQUFTO2dCQUNULE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdCLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNsRSxTQUFTO29CQUNULE9BQU8sQ0FBQyxLQUFLLEdBQUc7d0JBQ1osSUFBSSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSTt3QkFDeEIsT0FBTyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7cUJBQ25ELENBQUM7aUJBQ0w7YUFDSjtTQUNKO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUEyQixFQUFFLE9BQTRCLEVBQUUsT0FBK0I7UUFDM0csSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxHQUFHLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxFQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUssSUFBSSxLQUFLLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDcEIsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUNuQjtZQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBTyxFQUNILEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDeEM7WUFFRCxNQUFNLEVBQ0YsS0FBSyxJQUFJLE1BQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQixTQUFTO29CQUNULElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQ3hCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7NEJBQ3pCLFNBQVMsTUFBTSxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDSCxTQUFTO3lCQUNaO3FCQUNKO3lCQUFNO3dCQUNILElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQzdDLFNBQVMsTUFBTSxDQUFDO3lCQUNuQjtxQkFDSjtvQkFFRCxTQUFTO29CQUNULElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7d0JBQ3hCLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dDQUNqQyxTQUFTLE1BQU0sQ0FBQzs2QkFDbkI7aUNBQU07Z0NBQ0gsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0NBQ25DLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO3dDQUNwQyxTQUFTLE1BQU0sQ0FBQztxQ0FDbkI7aUNBQ0o7cUNBQU07b0NBQ0gsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTt3Q0FDekQsU0FBUyxNQUFNLENBQUM7cUNBQ25CO2lDQUNKOzZCQUNKO3lCQUNKO3FCQUNKO29CQUVELElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUUsRUFBSSxTQUFTO3dCQUN6QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFOzRCQUNqRSxTQUFTLE1BQU0sQ0FBQzt5QkFDbkI7NkJBQU07NEJBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQ0FDM0UsU0FBUyxNQUFNLENBQUM7NkJBQ25CO3lCQUNKO3FCQUNKO3lCQUFNLElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUUsRUFBSyxTQUFTO3dCQUNqRCxPQUFPO3FCQUNWO2lCQUNKO2dCQUVELFNBQVMsT0FBTyxDQUFDO2FBQ3BCO1lBRUwsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdEM7SUFDVCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQTJCLEVBQUUsT0FBNEIsRUFBRSxPQUErQjtRQUM3RyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoRixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsTUFBTSxDQUFDLE1BQU0sYUFBYSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqRjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BFO0lBQ0wsQ0FBQztDQUNKO0FBdlhELDBCQXVYQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxTQUFTO0NBT3JCO0FBUEQsOEJBT0M7QUFFRCxNQUFhLFdBQVc7Q0FldkI7QUFmRCxrQ0FlQztBQUVELE1BQWEsaUJBQWlCO0NBVzdCO0FBWEQsOENBV0M7QUFFRDs7R0FFRztBQUNILE1BQWEsT0FBTztDQUluQjtBQUpELDBCQUlDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLGVBQWU7Q0FJM0I7QUFKRCwwQ0FJQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxvQkFBb0I7Q0FLaEM7QUFMRCxvREFLQyJ9