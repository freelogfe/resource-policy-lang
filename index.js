
const antlr4 = require('antlr4/index');
const policyLexer = require('./gen/policyLexer');
const policyParser = require('./gen/policyParser');
// const policyListener = require('./gen/policyListener').policyListener;
const _ = require('underscore');

// const ErrorListener = require('antlr4/error/ErrorListener').ConsoleErrorListener;
//  ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
//     return new Error(msg)
//  };


var compile = function (text, target='json'){
  // ex(ErrorListener.prototype)
  let extentionClass = require('./JSONGeneratorExtention.js');
  if (target === 'beautify') {
    extentionClass = require('./BeautifyExtention.js');
  }

  // Reflect.apply(extention.extend, policyListener.prototype,[]); //等价extention.extend(policyListener.prototype);
  // class policyListener extends extention.extend {
  //   constructor() {
  //     super()
  //   }
  // }

  let chars = new antlr4.InputStream(text);
  let lexer = new policyLexer.policyLexer(chars);
  let tokens  = new antlr4.CommonTokenStream(lexer);
  let parser = new policyParser.policyParser(tokens);
  parser.buildParseTrees = true;
  let tree = parser.p();
  let listener = new extentionClass();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  // console.log('parser',parser)
  return listener;
};

exports.compile = compile;
