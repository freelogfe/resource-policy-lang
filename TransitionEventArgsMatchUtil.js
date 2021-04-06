class TransitionEventArgsMatchUtil {

    constructor() {
        this.specificRegexMap = new Map();
        this.specificRegexMap.set("resourceName", "^[a-zA-Z\u4e00-\u9fef0-9\\-_.]+/[a-zA-Z\u4e00-\u9fef0-9\\-_.]+$")
    }

    match(arg, argValue) {
        let argName = arg["name"];
        let argType = arg["type"];
        let argEnum = arg["enum"];

        if (argType == null || argValue == null) {
            return false;
        }

        let result = false;
        switch (argType) {
            case "none":
                result = true;
                break;
            case "decimal":
                result = argValue.match("^\\d+(\\.\\d{1,2})?$");
                break;
            case "string":
                result = argValue.match("^[a-zA-Z\u4e00-\u9fef0-9\\-_./]*$");
                break;
            case "timeUnit":
                result = argValue.match("^second|minute|hour|cycle|day|week|month|year$");
                break;
            case "dateTime":
                result = argValue.match("^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$");
                break;
        }

        result = result && this.matchSpecific(argName, argValue);

        if (result && argEnum != null) {
            return argEnum.indexOf(argValue)>-1;
        } else {
            return result;
        }
    }

    matchSpecific(argName, argValue) {
        return !this.specificRegexMap.has(argName) || argValue.match(this.specificRegexMap.get(argName));
    }
}

exports.TransitionEventArgsMatchUtil = TransitionEventArgsMatchUtil;