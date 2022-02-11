"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractElementInfo = exports.EventTranslateStrategyFactory = void 0;
const CycleEndEventTranslateStrategy_1 = require("./strategy/CycleEndEventTranslateStrategy");
const TransactionEventTranslateStrategy_1 = require("./strategy/TransactionEventTranslateStrategy");
const TimeEventTranslateStrategy_1 = require("./strategy/TimeEventTranslateStrategy");
const RelativeTimeEventTranslateStrategy_1 = require("./strategy/RelativeTimeEventTranslateStrategy");
const TerminateEventTranslateStrategy_1 = require("./strategy/TerminateEventTranslateStrategy");
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
//
// export function report(contract: ContractEntity): ContractInfo {
//     return ContractTool.report(contract);
// }
//
// export function compareRoutes(routes: FSMRouteElement[][], routesB: FSMRouteElement[][], options?: CompareRoutesOptions): void {
//     FSMTool.compareRoutes(routes, routesB, options);
// }
//
// export function parseRoutes(states, stateName: string, routes: FSMRouteElement[][], route: FSMRouteElement[]): void {
//     FSMTool.parseRoutes(states, stateName, routes, route);
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhGQUF5RjtBQUV6RixvR0FBK0Y7QUFDL0Ysc0ZBQWlGO0FBQ2pGLHNHQUFpRztBQUNqRyxnR0FBMkY7QUFFM0YsTUFBYSw2QkFBNkI7SUFJdEM7UUFGQSw4QkFBeUIsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUdsRSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLHFFQUFpQyxDQUFDLFVBQVUsRUFBRSxJQUFJLHFFQUFpQyxFQUFFLENBQUMsQ0FBQztRQUMxSCxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLHVEQUEwQixDQUFDLFVBQVUsRUFBRSxJQUFJLHVEQUEwQixFQUFFLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLHVFQUFrQyxDQUFDLFVBQVUsRUFBRSxJQUFJLHVFQUFrQyxFQUFFLENBQUMsQ0FBQztRQUM1SCxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLCtEQUE4QixDQUFDLFVBQVUsRUFBRSxJQUFJLCtEQUE4QixFQUFFLENBQUMsQ0FBQztRQUNwSCxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLGlFQUErQixDQUFDLFVBQVUsRUFBRSxJQUFJLGlFQUErQixFQUFFLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRUQseUJBQXlCLENBQUMsU0FBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDSjtBQWZELHNFQWVDO0FBRUQsTUFBYSxtQkFBbUI7Q0FLL0I7QUFMRCxrREFLQztBQUVELEVBQUU7QUFDRixtRUFBbUU7QUFDbkUsNENBQTRDO0FBQzVDLElBQUk7QUFDSixFQUFFO0FBQ0YsbUlBQW1JO0FBQ25JLHVEQUF1RDtBQUN2RCxJQUFJO0FBQ0osRUFBRTtBQUNGLHdIQUF3SDtBQUN4SCw2REFBNkQ7QUFDN0QsSUFBSSJ9