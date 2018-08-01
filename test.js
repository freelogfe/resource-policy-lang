antlr4 = require('antlr4');
fs = require('fs');
SMGenerator = require ('./SMGenerator').SMGenerator;
resourcePolicyLexer = require ('./resourcePolicyLexer');
resourcePolicyParser = require ('./resourcePolicyParser');

var input = fs.readFileSync('./test/novel_community_p1.policy','utf-8');
var chars = new antlr4.InputStream(input);
var lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new resourcePolicyParser.resourcePolicyParser(tokens);
parser.buildParseTrees = true;
var tree = parser.policy();

var gen = new SMGenerator(1);
gen.visit(tree);

console.log(JSON.stringify(gen.state_machine));
