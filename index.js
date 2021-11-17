"use strict"

const antlr4 = require("antlr4");
const gen_dir = "./gen";
const LexToken = require(`${gen_dir}/LexToken`);
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const {UserPolicyErrorListener} = require("./UserPolicyErrorListener");
const {UserPolicyErrorLexerListener} = require("./UserPolicyErrorLexerListener");
const UserPolicyCustomVisitor = require("./UserPolicyCustomVisitor").UserPolicyCustomVisitor;

exports.compile = async function (policyText, targetType, targetUrl, env) {
    let chars = new antlr4.InputStream(policyText);

    let lexer = new LexToken.LexToken(chars);
    lexer.removeErrorListeners();
    let lexerErrorListener = new UserPolicyErrorLexerListener();
    lexer.addErrorListener(lexerErrorListener);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new resourcePolicy.resourcePolicy(stream);
    parser.removeErrorListeners();
    let errorListener = new UserPolicyErrorListener();
    parser.addErrorListener(errorListener);
    // 关闭恢复机制
    // parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.policy();
    if (lexerErrorListener.errors.length !== 0) {
        return {
            errors: lexerErrorListener.errors,
            errorObjects: lexerErrorListener.errorObjects
        };
    }

    let visitor = new UserPolicyCustomVisitor(targetType, targetUrl, env);
    visitor.visit(tree);
    await visitor.verify();
    return {
        state_machine: visitor.state_machine,
        errors: [...errorListener.errors, ...visitor.errors],
        errorObjects: [errorListener.errorObjects, ...visitor.errors.map(error => {
            return {
                line: -1,
                charPositionInLine: -1,
                offendingSymbol: "",
                msg: error
            };
        })]
    };
}
