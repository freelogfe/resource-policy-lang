"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompareRoutesOptions = exports.FSMRouteElement = exports.FSMInfo = exports.FSMEntity = exports.FSMTool = void 0;
const EventTool_1 = require("./EventTool");
const ServiceStateTool_1 = require("./ServiceStateTool");
const StateTool_1 = require("./StateTool");
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
}
exports.FSMTool = FSMTool;
/**
 * 状态机实体
 */
class FSMEntity {
}
exports.FSMEntity = FSMEntity;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlNNVG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvdG9vbHMvRlNNVG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXNFO0FBQ3RFLDJDQUFpRDtBQUdqRCxNQUFhLE9BQU87SUFFaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUF3QjtRQUNsQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsS0FBSyxJQUFJLFNBQVMsSUFBSSxXQUFXLEVBQUU7WUFDL0IsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFELFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxNQUFNLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLGlCQUFpQixFQUFFLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUNuRSxtQkFBbUIsRUFBRSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQzFELENBQUM7WUFFRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUVOLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FFVixFQUFFLE1BRXVCLEVBQUUsS0FFSjtRQUc3QixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FB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