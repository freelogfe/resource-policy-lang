"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateEventTranslateStrategy = void 0;
class TerminateEventTranslateStrategy {
    getEventName() {
        return TerminateEventTranslateStrategy.EVENT_NAME;
    }
    translate(event, isSign) {
        return {
            origin: event,
            content: "停止接收事件"
        };
    }
}
exports.TerminateEventTranslateStrategy = TerminateEventTranslateStrategy;
TerminateEventTranslateStrategy.EVENT_NAME = "terminate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLCtCQUErQjtJQUV4QyxZQUFZO1FBQ1IsT0FBTywrQkFBK0IsQ0FBQyxVQUFVLENBQUM7SUFDdEQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFrQixFQUFFLE1BQWdCO1FBQzFDLE9BQU87WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDTixDQUFDOztBQVhMLDBFQWNDO0FBRFUsMENBQVUsR0FBVyxXQUFXLENBQUMifQ==