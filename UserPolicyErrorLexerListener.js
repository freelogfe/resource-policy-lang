const antlr4 = require("antlr4");

class UserPolicyErrorLexerListener extends antlr4.error.ErrorListener {

    constructor() {
        super();
        this.errors = [];
        this.errorObjects = [];
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        if (e instanceof antlr4.error.LexerNoViableAltException) {
            this.errors.push(`line ${line}:${charPositionInLine} ${msg}`);
            this.errorObjects.push({
                line:line,
                charPositionInLine:charPositionInLine,
                msg:msg
            });
        }
    }
}

exports.UserPolicyErrorLexerListener = UserPolicyErrorLexerListener;
