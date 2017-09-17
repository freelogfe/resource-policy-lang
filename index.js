
const antlr4 = require('antlr4/index');
const policyLexer = require('./gen/policyLexer');
const policyParser = require('./gen/policyParser');
const policyListener = require('./gen/policyListener').policyListener;
const _ = require('underscore');

var ast = function (){

};

var compile = function (text, target='json'){
  let extention = require('./JSONGeneratorExtention.js');
  if (target === 'beautify') {
    extention = require('./BeautifyExtention.js');
  }
  Reflect.apply(extention.extend, policyListener.prototype,[]);
  let chars = new antlr4.InputStream(text);
  let lexer = new policyLexer.policyLexer(chars);
  let tokens  = new antlr4.CommonTokenStream(lexer);
  let parser = new policyParser.policyParser(tokens);
  parser.buildParseTrees = true;
  let tree = parser.p();
  let listener = new policyListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  return listener;
};

exports.compile = compile;
