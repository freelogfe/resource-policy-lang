let output = (function ( ) {
    let antlr4 = require('antlr4/index');
    let policyLexer = require('./gen/policyLexer');
    let policyParser = require('./gen/policyParser');
    let policyListener = require('./gen/policyListener').policyListener;
    let _ = require('underscore');
    //重写ErrorListener,储存报错信息
    let ErrorListener = require('antlr4/error/ErrorListener').ConsoleErrorListener;
    let errorMsg;
    ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
        errorMsg = msg;
    };
    let JSONGenerator = function(indentLevel) {
        policyListener.call(this);
        this.indentLevel = indentLevel || 4;
        //string result;
        this.result = [];
        //储存每一个segment
        this.policy_segments = [];
        this.duration = {
            start_date: null,
            end_date: null,
            start_hour: null,
            end_hour: null
        };
        return this;
    };
    JSONGenerator.prototype = Object.create(policyListener.prototype);
    //重写prototype
    require('./generator.prototype.js').extendModule(JSONGenerator);

    return {
        complier : function (text, indentLevel) {
            let chars = new antlr4.InputStream(text);
            let lexer = new policyLexer.policyLexer(chars);
            let tokens  = new antlr4.CommonTokenStream(lexer);
            let parser = new policyParser.policyParser(tokens);
            parser.buildParseTrees = true;
            let tree = parser.p();
            let gen = new JSONGenerator(indentLevel);
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(gen, tree);
            if(errorMsg) {
                return errorMsg;
            }
            return gen;
        }
    }

})();

module.exports = output;
