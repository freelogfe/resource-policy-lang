"use strict"

const antlr4 = require("antlr4");
const gen_dir = "./gen";
const LexToken = require(`${gen_dir}/LexToken`);
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const SMGenerator = require("./SMGenerator").SMGenerator;

exports.compile = async function (policyText, targetType, targetUrl, env) {
    let chars = new antlr4.InputStream(policyText);
    let lexer = new LexToken.LexToken(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new resourcePolicy.resourcePolicy(stream);
    // 关闭恢复机制
    parser._errHandler = new antlr4.error.BailErrorStrategy();
    parser.buildParseTrees = true;

    let tree = null;
    try {
        tree = parser.policy();
    } catch (e) {
        throw new Error("输入格式错误");
    }

    let gen = new SMGenerator(targetType, targetUrl, env);
    try {
        gen.visit(tree);
    } catch (e) {
        throw new Error(e);
    }

    await gen.verify().catch((e) => {
        console.log(e)
        throw new Error(e);
    });

    return gen;
}