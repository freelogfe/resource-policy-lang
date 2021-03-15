class TransitionEventArgsMatchUtil {

    constructor() {
        this.intCollection = new Set(["amount", "elapsed"]);
    }

    match(argName, argValue) {
        if (argName == null || argValue == null) {
            return false;
        }

        switch (argName) {
            case "resourceName":
                return argValue.match("^[a-zA-Z\u4e00-\u9fef0-9\\-_.]+/[a-zA-Z\u4e00-\u9fef0-9\\-_.]+$");
            case "timeUnit":
                return argValue.match("^second|minute|hour|cycle|day|week|month|year$");
            case "amount":
            case "elapsed":
                return argValue.match("^\\d+$");
            case "dateTime":
                return argValue.match("^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$");
            case "currencyUnit":
                return argValue.match("^feather|dollar|yuan|jiao|fen$");
        }

        return true;
    }

    isInt(argName) {
        return this.intCollection.has(argName);
    }
}

exports.TransitionEventArgsMatchUtil = TransitionEventArgsMatchUtil;