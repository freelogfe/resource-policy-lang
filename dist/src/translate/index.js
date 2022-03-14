"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanUpRoutes = exports.parseRoutes = exports.compareRoutes = exports.ContractElementInfo = exports.EventTranslateStrategyFactory = void 0;
const CycleEndEventTranslateStrategy_1 = require("./strategy/CycleEndEventTranslateStrategy");
const TransactionEventTranslateStrategy_1 = require("./strategy/TransactionEventTranslateStrategy");
const TimeEventTranslateStrategy_1 = require("./strategy/TimeEventTranslateStrategy");
const RelativeTimeEventTranslateStrategy_1 = require("./strategy/RelativeTimeEventTranslateStrategy");
const TerminateEventTranslateStrategy_1 = require("./strategy/TerminateEventTranslateStrategy");
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
// export function report(contract: ContractEntity): ContractInfo {
//     return ContractTool.report(contract);
// }
function compareRoutes(routes, routesB, options) {
    FSMTool_1.FSMTool.compareRoutes(routes, routesB, options);
}
exports.compareRoutes = compareRoutes;
function parseRoutes(states, stateName, routes, route) {
    FSMTool_1.FSMTool.parseRoutes(states, stateName, routes, route);
}
exports.parseRoutes = parseRoutes;
function cleanUpRoutes(routes) {
    FSMTool_1.FSMTool.cleanUpRoutes(routes);
}
exports.cleanUpRoutes = cleanUpRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhGQUF5RjtBQUV6RixvR0FBK0Y7QUFDL0Ysc0ZBQWlGO0FBQ2pGLHNHQUFpRztBQUNqRyxnR0FBMkY7QUFDM0YsNkNBQStFO0FBRS9FLE1BQWEsNkJBQTZCO0lBSXRDO1FBRkEsOEJBQXlCLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7UUFHbEUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxxRUFBaUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxxRUFBaUMsRUFBRSxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyx1REFBMEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSx1REFBMEIsRUFBRSxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyx1RUFBa0MsQ0FBQyxVQUFVLEVBQUUsSUFBSSx1RUFBa0MsRUFBRSxDQUFDLENBQUM7UUFDNUgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQywrREFBOEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSwrREFBOEIsRUFBRSxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxpRUFBK0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxpRUFBK0IsRUFBRSxDQUFDLENBQUM7SUFDMUgsQ0FBQztJQUVELHlCQUF5QixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUFmRCxzRUFlQztBQUVELE1BQWEsbUJBQW1CO0NBSy9CO0FBTEQsa0RBS0M7QUFHRCxtRUFBbUU7QUFDbkUsNENBQTRDO0FBQzVDLElBQUk7QUFFSixTQUFnQixhQUFhLENBQUMsTUFBMkIsRUFBRSxPQUE0QixFQUFFLE9BQThCO0lBQ25ILGlCQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFpQixFQUFFLE1BQTJCLEVBQUUsS0FBd0I7SUFDeEcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQTJCO0lBQ3JELGlCQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFGRCxzQ0FFQyJ9