const {resourcePolicyLangLexer} = require('./lib/resourcePolicyLangLexer');
const {resourcePolicyLangParser} = require('./lib/resourcePolicyLangParser');
const {resourcePolicyLangListener} = require('./lib/resourcePolicyLangListener')

module.exports = {
  resourcePolicyLangLexer,
  resourcePolicyLangParser,
  resourcePolicyLangListener
}