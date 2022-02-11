"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareRoutesOptions = exports.FSMRouteElement = exports.FSMInfo = exports.FsmTransfer = exports.FSMEntity = exports.FSMTool = void 0;
const EventTool_1 = require("./EventTool");
const ServiceStateTool_1 = require("./ServiceStateTool");
const StateTool_1 = require("./StateTool");
const index_1 = require("../index");
/**
 * 状态机工具
 */
class FSMTool {
    static report(fsmEntities) {
        let results = [];
        for (let fsmEntity of fsmEntities) {
            if (fsmEntity.events == null || fsmEntity.events.length == 0) {
                fsmEntity.events = [{ name: "terminate" }];
            }
            let result = {
                stateInfo: StateTool_1.StateTool.report(fsmEntity.name),
                serviceStateInfos: ServiceStateTool_1.ServiceStateTool.report(fsmEntity.serviceStates),
                eventTranslateInfos: EventTool_1.EventTool.report(fsmEntity.events)
            };
            results.push(result);
        }
        return results;
    }
    static transfer(fsmEntities, fsmTransfers) {
        let result = "";
        let fsmEntityMap = {};
        fsmEntities.forEach(fsmEntity => {
            fsmEntityMap[fsmEntity.name] = fsmEntity;
        });
        let eventTranslateStrategyFactory = new index_1.EventTranslateStrategyFactory();
        for (let i = 0; i < fsmTransfers.length; i++) {
            let fsmTransfer = fsmTransfers[i];
            let fsmEntity = fsmEntityMap[fsmTransfer["state"]];
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
            if (fsmEntity.name == "initial") {
                if (fsmEntity.serviceStates != null && fsmEntity.serviceStates.indexOf("active") != -1) {
                    stateInfoStr = "签约成功，已获得授权";
                }
            }
            else {
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
            // 当前事件翻译
            let eventStr = "";
            // 事件选项提示语
            let eventSelectStr = "";
            // 事件选项翻译
            let eventSectionStrs = [];
            // 最终流转状态
            if (i == fsmTransfers.length - 1) {
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
            result += `· ${stateStr}\n`;
            if (stateInfoStr.length != 0) {
                result += `  ${stateInfoStr}\n`;
            }
            if (eventStr.length != 0) {
                result += `  > ${eventStr}\n`;
            }
            if (eventSelectStr.length != 0) {
                result += `  ${eventSelectStr}\n`;
            }
            eventSectionStrs.forEach(eventSectionStr => {
                result += `    ^ ${eventSectionStr}\n`;
            });
        }
        return result;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUVqRCxvQ0FBdUQ7QUFFdkQ7O0dBRUc7QUFDSCxNQUFhLE9BQU87SUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUF3QjtRQUNsQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsS0FBSyxJQUFJLFNBQVMsSUFBSSxXQUFXLEVBQUU7WUFDL0IsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFELFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxNQUFNLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLGlCQUFpQixFQUFFLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUNuRSxtQkFBbUIsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQzFELENBQUM7WUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBd0IsRUFBRSxZQUEyQjtRQUNqRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDNUIsWUFBWSxD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