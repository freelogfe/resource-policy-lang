'use strict'

const antlr4 = require('antlr4/index')
const SMGenerator = require('./SMGenerator').SMGenerator
const resourcePolicyLexer = require('./gen/resourcePolicyLexer')
const resourcePolicyParser = require('./gen/resourcePolicyParser')

module.exports.compile = function (policyText) {

    const chars = new antlr4.InputStream(policyText);
    const lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new resourcePolicyParser.resourcePolicyParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.policy();

    const gen = new SMGenerator();
    gen.visit(tree);

    return gen
}
