const {resourcePolicyLexer} = require('./lib/resourcePolicyLexer');
const {resourcePolicyParser} = require('./lib/resourcePolicyParser');
const {resourcePolicyListener} = require('./lib/resourcePolicyListener')

module.exports = {
  resourcePolicyLexer,
  resourcePolicyParser,
  resourcePolicyListener
}