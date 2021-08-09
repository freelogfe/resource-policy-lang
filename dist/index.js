"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRoutes = exports.compareRoutes = exports.report = exports.ContractElementInfo = exports.EventTranslateStrategyFactory = void 0;
const CycleEndEventTranslateStrategy_1 = require("./strategy/CycleEndEventTranslateStrategy");
const TransactionEventTranslateStrategy_1 = require("./strategy/TransactionEventTranslateStrategy");
const TimeEventTranslateStrategy_1 = require("./strategy/TimeEventTranslateStrategy");
const RelativeTimeEventTranslateStrategy_1 = require("./strategy/RelativeTimeEventTranslateStrategy");
const TerminateEventTranslateStrategy_1 = require("./strategy/TerminateEventTranslateStrategy");
const ContractTool_1 = require("./tools/ContractTool");
const FSMTool_1 = require("./tools/FSMTool");
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
class ContractElementInfo {
}
exports.ContractElementInfo = ContractElementInfo;
function report(contract) {
    return ContractTool_1.ContractTool.report(contract);
}
exports.report = report;
function compareRoutes(routes, routesB, options) {
    FSMTool_1.FSMTool.compareRoutes(routes, routesB, options);
}
exports.compareRoutes = compareRoutes;
function parseRoutes(states, stateName, routes, route) {
    FSMTool_1.FSMTool.parseRoutes(states, stateName, routes, route);
}
exports.parseRoutes = parseRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHJhbnNsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhGQUF5RjtBQUV6RixvR0FBK0Y7QUFDL0Ysc0ZBQWlGO0FBQ2pGLHNHQUFpRztBQUNqRyxnR0FBMkY7QUFDM0YsdURBQWdGO0FBQ2hGLDZDQUErRTtBQUUvRSxNQUFhLDZCQUE2QjtJQUl0QztRQUZBLDhCQUF5QixHQUFHLElBQUksR0FBRyxFQUFrQyxDQUFDO1FBR2xFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMscUVBQWlDLENBQUMsVUFBVSxFQUFFLElBQUkscUVBQWlDLEVBQUUsQ0FBQyxDQUFDO1FBQzFILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsdURBQTBCLENBQUMsVUFBVSxFQUFFLElBQUksdURBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsdUVBQWtDLENBQUMsVUFBVSxFQUFFLElBQUksdUVBQWtDLEVBQUUsQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsK0RBQThCLENBQUMsVUFBVSxFQUFFLElBQUksK0RBQThCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BILElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsaUVBQStCLENBQUMsVUFBVSxFQUFFLElBQUksaUVBQStCLEVBQUUsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxTQUFpQjtRQUN2QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBZkQsc0VBZUM7QUFFRCxNQUFhLG1CQUFtQjtDQUcvQjtBQUhELGtEQUdDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLFFBQXdCO0lBQzNDLE9BQU8sMkJBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELHdCQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQTJCLEVBQUUsT0FBNEIsRUFBRSxPQUE4QjtJQUNuSCxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFGRCxzQ0FFQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBaUIsRUFBRSxNQUEyQixFQUFFLEtBQXdCO0lBQ3hHLGlCQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFGRCxrQ0FFQyJ9