"use strict"

const antlr4 = require("antlr4");
const gen_dir = "./gen";
const resourcePolicyLexer = require(`${gen_dir}/resourcePolicyLexer`);
const resourcePolicyParser = require(`${gen_dir}/resourcePolicyParser`);
const SMGenerator = require("./SMGenerator").SMGenerator;

exports.compile = async function (policyText, targetType, env = "dev") {
    let chars = new antlr4.InputStream(policyText);
    let lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new resourcePolicyParser.resourcePolicyParser(stream);
    parser.buildParseTrees = true;
    let tree = parser.policy();

    let gen = new SMGenerator(targetType, env);
    gen.visit(tree);

    await gen.verify();

    return gen;
}