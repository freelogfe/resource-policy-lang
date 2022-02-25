"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateEventTranslateStrategy = void 0;
class TerminateEventTranslateStrategy {
    translate4Strategy(event, serviceStates) {
        if (serviceStates != null && serviceStates.indexOf("active") != -1) {
            return {
                origin: event,
                content: "已获得永久授权"
            };
        }
        else {
            return {
                origin: event,
                content: "停止接收事件"
            };
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLCtCQUErQjtJQUV4QyxrQkFBa0IsQ0FBQyxLQUFrQixFQUFFLGFBQXdCO1FBQzNELElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2hFLE9BQU87Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQztTQUNMO2FBQU07WUFDSCxPQUFPO2dCQUNILE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxRQUFRO2FBQ3BCLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLCtCQUErQixDQUFDLFVBQVUsQ0FBQztJQUN0RCxDQUFDOztBQTFCTCwwRUE2QkM7QUFEVSwwQ0FBVSxHQUFXLFdBQVcsQ0FBQyJ9