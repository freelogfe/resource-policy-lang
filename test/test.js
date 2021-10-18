"use strict"

const Opiton = require("../Option").Option;
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "../gen";
const LexToken = require(`${gen_dir}/LexToken`);
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const {UserPolicyErrorListener} = require("../UserPolicyErrorListener");
const {UserPolicyErrorLexerListener} = require("../UserPolicyErrorLexerListener");
const UserPolicyCustomVisitor = require("../UserPolicyCustomVisitor").UserPolicyCustomVisitor;

main();

async function main() {
    let option = new Opiton(process.argv);
    option.build();
    let input = fs.readFileSync("./resources/zhaojn.sc", "utf-8");

    let chars = new antlr4.InputStream(input);

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

    let result = null;

    let tree = parser.policy();
    if (lexerErrorListener.errors.length !== 0) {
        result = {
            errors: lexerErrorListener.errors,
            errorObjects: lexerErrorListener.errorObjects
        };
    } else {
        let visitor = new UserPolicyCustomVisitor(option.subjectType, null, option.env);
        visitor.visit(tree);
        await visitor.verify();
        result = {
            state_machine: visitor.state_machine,
            errors: errorListener.errors,
            errorObjects: errorListener.errorObjects
        };
    }

    console.log(JSON.stringify(result, null, 4));

    fs.writeFile("./resources/zhaojn.json", JSON.stringify(result, null, 4), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
