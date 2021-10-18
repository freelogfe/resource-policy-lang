const antlr4 = require("antlr4");

class UserPolicyErrorListener extends antlr4.error.ErrorListener {

    constructor() {
        super();
        this.errors = [];
        this.errorObjects = [];
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        this.errors.push(`line ${line}:${charPositionInLine} ${msg}`);
        this.errorObjects.push({
            line:line,
            charPositionInLine:charPositionInLine,
            offendingSymbol:offendingSymbol.text,
            msg:msg
        });
    }
}

exports.UserPolicyErrorListener = UserPolicyErrorListener;
