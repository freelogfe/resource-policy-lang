const REGEX_ARG_ACCOUNT = "^(\\d+)|((self)\\.[a-zA-Z0-9_]+)$";

class TransitionEventArgsMatchUtil {

    constructor() {
        this.specificRegexMap = new Map();
        this.specificRegexMap.set("resourceName", "^[a-zA-Z\u4e00-\u9fef0-9\\-_.]+/[a-zA-Z\u4e00-\u9fef0-9\\-_.]+$")
        this.specificRegexMap.set("account", REGEX_ARG_ACCOUNT);
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
                result = argValue.match("^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}$");
                break;
        }

        result = result && this.matchSpecific(argName, argValue);

        if (result && argEnum != null) {
            return argEnum.indexOf(argValue) > -1;
        } else {
            return result;
        }
    }

    matchSpecific(argName, argValue) {
        return !this.specificRegexMap.has(argName) || argValue.match(this.specificRegexMap.get(argName));
    }

    extract(arg, argValue) {
        let argName = arg["name"];
        let argType = arg["type"];
        let argEnum = arg["enum"];

        let symbolType = 0;
        switch (argName) {
            case "account":
                let regExp = new RegExp(REGEX_ARG_ACCOUNT);
                if (!argValue.match(regExp)) {
                    throw new Error("参数错误，提取参数信息失败");
                }
                symbolType = RegExp.$1 ? 1 : 0;
                if (symbolType === 0) {
                    // 环境变量
                    symbolType = RegExp.$2 ? 2 : 0;
                }
                break;
        }

        return {
            symbolType
        };
    }
}

exports.TransitionEventArgsMatchUtil = TransitionEventArgsMatchUtil;
