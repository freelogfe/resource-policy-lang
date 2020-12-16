antlr4 = require('antlr4');
fs = require('fs');

var gen_dir = '../gen2'
SMGenerator = require(`../SMGenerator2`).SMGenerator;
resourcePolicyLexer = require(`${gen_dir}/resourcePolicyLexer`);
resourcePolicyParser = require(`${gen_dir}/resourcePolicyParser`);

var input = fs.readFileSync('./fixtures/zhaojn.sc', 'utf-8');
var chars = new antlr4.InputStream(input);
var lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new resourcePolicyParser.resourcePolicyParser(tokens);
parser.buildParseTrees = true;
var tree = parser.policy();

var gen = new SMGenerator(1);
gen.visit(tree);

console.log(JSON.stringify(gen.state_machine, null, 4));

fs.writeFile('zhaojn.json', JSON.stringify(gen.state_machine, null, 4), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
