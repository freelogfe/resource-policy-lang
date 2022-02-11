"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateEventTranslateStrategy = void 0;
class TerminateEventTranslateStrategy {
    translate4Strategy(event) {
        return {
            origin: event,
            content: "停止接收事件"
        };
    }
    translate4UnFinish(event) {
        return this.translate4Strategy(event);
    }
    translate4Finished(event) {
        return this.translate4Strategy(event);
    }
    getEventName() {
        return TerminateEventTranslateStrategy.EVENT_NAME;
    }
}
exports.TerminateEventTranslateStrategy = TerminateEventTranslateStrategy;
TerminateEventTranslateStrategy.EVENT_NAME = "terminate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLCtCQUErQjtJQUV4QyxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxPQUFPO1lBQ0gsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsUUFBUTtTQUNwQixDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sK0JBQStCLENBQUMsVUFBVSxDQUFDO0lBQ3RELENBQUM7O0FBbkJMLDBFQXNCQztBQURVLDBDQUFVLEdBQVcsV0FBVyxDQUFDIn0=