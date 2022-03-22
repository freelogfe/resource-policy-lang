"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateEventTranslateStrategy = void 0;
class TerminateEventTranslateStrategy {
    translate4EventArg(argName, argValue) {
        return "";
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90cmFuc2xhdGUvc3RyYXRlZ3kvVGVybWluYXRlRXZlbnRUcmFuc2xhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLCtCQUErQjtJQUV4QyxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsUUFBZ0I7UUFDaEQsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0IsRUFBRSxhQUF3QjtRQUMzRCxJQUFJLGFBQWEsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNoRSxPQUFPO2dCQUNILE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxTQUFTO2FBQ3JCLENBQUM7U0FDTDthQUFNO1lBQ0gsT0FBTztnQkFDSCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsUUFBUTthQUNwQixDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTywrQkFBK0IsQ0FBQyxVQUFVLENBQUM7SUFDdEQsQ0FBQzs7QUE5QkwsMEVBaUNDO0FBRFUsMENBQVUsR0FBVyxXQUFXLENBQUMifQ==