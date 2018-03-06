// Generated from resourcePolicy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var resourcePolicyListener = require('./resourcePolicyListener').resourcePolicyListener;
var grammarFileName = "resourcePolicy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003-\u00d5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0007\u0002:\n\u0002\f\u0002",
    "\u000e\u0002=\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0006\u0003C\n\u0003\r\u0003\u000e\u0003D\u0003\u0003\u0003\u0003",
    "\u0007\u0003I\n\u0003\f\u0003\u000e\u0003L\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004T",
    "\n\u0004\f\u0004\u000e\u0004W\u000b\u0004\u0003\u0005\u0003\u0005\u0006",
    "\u0005[\n\u0005\r\u0005\u000e\u0005\\\u0003\u0005\u0003\u0005\u0006",
    "\u0005a\n\u0005\r\u0005\u000e\u0005b\u0007\u0005e\n\u0005\f\u0005\u000e",
    "\u0005h\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0007\bv\n\b\f\b\u000e\by\u000b\b\u0003\b\u0005\b|\n\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u008d\n\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00a7\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u00b6\n\u0013\f\u0013\u000e\u0013\u00b9\u000b\u0013\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00bd\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0005",
    "\u0017\u00c7\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0002\u0003\u0006\u001d\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.0246\u0002\u0004\u0003\u0002\u0006\u0007\u0004\u0002\u001d!",
    "%%\u0002\u00cf\u0002;\u0003\u0002\u0002\u0002\u0004@\u0003\u0002\u0002",
    "\u0002\u0006M\u0003\u0002\u0002\u0002\bX\u0003\u0002\u0002\u0002\ni",
    "\u0003\u0002\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000e{\u0003\u0002",
    "\u0002\u0002\u0010\u008c\u0003\u0002\u0002\u0002\u0012\u008e\u0003\u0002",
    "\u0002\u0002\u0014\u0091\u0003\u0002\u0002\u0002\u0016\u0094\u0003\u0002",
    "\u0002\u0002\u0018\u0098\u0003\u0002\u0002\u0002\u001a\u009d\u0003\u0002",
    "\u0002\u0002\u001c\u009f\u0003\u0002\u0002\u0002\u001e\u00a6\u0003\u0002",
    "\u0002\u0002 \u00a8\u0003\u0002\u0002\u0002\"\u00ae\u0003\u0002\u0002",
    "\u0002$\u00b1\u0003\u0002\u0002\u0002&\u00bc\u0003\u0002\u0002\u0002",
    "(\u00be\u0003\u0002\u0002\u0002*\u00c1\u0003\u0002\u0002\u0002,\u00c6",
    "\u0003\u0002\u0002\u0002.\u00c8\u0003\u0002\u0002\u00020\u00cb\u0003",
    "\u0002\u0002\u00022\u00ce\u0003\u0002\u0002\u00024\u00d0\u0003\u0002",
    "\u0002\u00026\u00d2\u0003\u0002\u0002\u00028:\u0005\u0004\u0003\u0002",
    "98\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=;\u0003\u0002",
    "\u0002\u0002>?\u0007\u0002\u0002\u0003?\u0003\u0003\u0002\u0002\u0002",
    "@B\u0007\u001c\u0002\u0002AC\u0005\u0006\u0004\u0002BA\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002EF\u0003\u0002\u0002\u0002FJ\u0007\u0003\u0002\u0002GI\u0005",
    "\b\u0005\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002J",
    "H\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002K\u0005\u0003\u0002",
    "\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\b\u0004\u0001\u0002NO\u0005",
    "6\u001c\u0002OU\u0003\u0002\u0002\u0002PQ\f\u0003\u0002\u0002QR\u0007",
    "\u0004\u0002\u0002RT\u0005\u0006\u0004\u0004SP\u0003\u0002\u0002\u0002",
    "TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002",
    "\u0002V\u0007\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XZ\u0005",
    "\n\u0006\u0002Y[\u0005\u000e\b\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003",
    "\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]f\u0003\u0002\u0002\u0002^`\u0005\f\u0007\u0002_a\u0005\u000e\b\u0002",
    "`_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ce\u0003\u0002\u0002\u0002d^\u0003\u0002",
    "\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003",
    "\u0002\u0002\u0002g\t\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002",
    "ij\u0007\u0005\u0002\u0002jk\t\u0002\u0002\u0002kl\u0007\u0003\u0002",
    "\u0002l\u000b\u0003\u0002\u0002\u0002mn\u0007\u0005\u0002\u0002no\u0007",
    "%\u0002\u0002op\u0007\u0003\u0002\u0002p\r\u0003\u0002\u0002\u0002q",
    "r\u0007\b\u0002\u0002rs\u0007%\u0002\u0002sw\u0005\u0010\t\u0002tv\u0005",
    "\u0012\n\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002w",
    "u\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x|\u0003\u0002\u0002",
    "\u0002yw\u0003\u0002\u0002\u0002z|\u0007\"\u0002\u0002{q\u0003\u0002",
    "\u0002\u0002{z\u0003\u0002\u0002\u0002|\u000f\u0003\u0002\u0002\u0002",
    "}~\u0007\t\u0002\u0002~\u008d\u0005\u0014\u000b\u0002\u007f\u008d\u0005",
    "\u0016\f\u0002\u0080\u008d\u0005\u0018\r\u0002\u0081\u008d\u0005\u001a",
    "\u000e\u0002\u0082\u0083\u0007\t\u0002\u0002\u0083\u008d\u0005\u001c",
    "\u000f\u0002\u0084\u008d\u0005\u001e\u0010\u0002\u0085\u0086\u0007\t",
    "\u0002\u0002\u0086\u008d\u0005$\u0013\u0002\u0087\u0088\u0007\t\u0002",
    "\u0002\u0088\u008d\u0005&\u0014\u0002\u0089\u008a\u0007\t\u0002\u0002",
    "\u008a\u008d\u0005,\u0017\u0002\u008b\u008d\u00052\u001a\u0002\u008c",
    "}\u0003\u0002\u0002\u0002\u008c\u007f\u0003\u0002\u0002\u0002\u008c",
    "\u0080\u0003\u0002\u0002\u0002\u008c\u0081\u0003\u0002\u0002\u0002\u008c",
    "\u0082\u0003\u0002\u0002\u0002\u008c\u0084\u0003\u0002\u0002\u0002\u008c",
    "\u0085\u0003\u0002\u0002\u0002\u008c\u0087\u0003\u0002\u0002\u0002\u008c",
    "\u0089\u0003\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d",
    "\u0011\u0003\u0002\u0002\u0002\u008e\u008f\u0007\n\u0002\u0002\u008f",
    "\u0090\u0005\u0010\t\u0002\u0090\u0013\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0007\u000b\u0002\u0002\u0092\u0093\u0007\u001b\u0002\u0002\u0093",
    "\u0015\u0003\u0002\u0002\u0002\u0094\u0095\u0007\f\u0002\u0002\u0095",
    "\u0096\u0007\'\u0002\u0002\u0096\u0097\u0007&\u0002\u0002\u0097\u0017",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0007\r\u0002\u0002\u0099\u009a",
    "\u0007(\u0002\u0002\u009a\u009b\u0007\u001b\u0002\u0002\u009b\u009c",
    "\u0007\u000e\u0002\u0002\u009c\u0019\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0007\u000f\u0002\u0002\u009e\u001b\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0007\u0010\u0002\u0002\u00a0\u00a1\u0007(\u0002\u0002\u00a1\u00a2",
    "\u0007\u0011\u0002\u0002\u00a2\u00a3\u0007$\u0002\u0002\u00a3\u001d",
    "\u0003\u0002\u0002\u0002\u00a4\u00a7\u0005 \u0011\u0002\u00a5\u00a7",
    "\u0005\"\u0012\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a5",
    "\u0003\u0002\u0002\u0002\u00a7\u001f\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u0007\u0012\u0002\u0002\u00a9\u00aa\u0007(\u0002\u0002\u00aa\u00ab",
    "\u0007\u0013\u0002\u0002\u00ab\u00ac\u0007(\u0002\u0002\u00ac\u00ad",
    "\u0007\u001b\u0002\u0002\u00ad!\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0007\u0014\u0002\u0002\u00af\u00b0\u0007(\u0002\u0002\u00b0#\u0003",
    "\u0002\u0002\u0002\u00b1\u00b2\u0007\u0015\u0002\u0002\u00b2\u00b7\u0005",
    "4\u001b\u0002\u00b3\u00b4\u0007\u0004\u0002\u0002\u00b4\u00b6\u0005",
    "4\u001b\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003",
    "\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003",
    "\u0002\u0002\u0002\u00b8%\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003",
    "\u0002\u0002\u0002\u00ba\u00bd\u0005(\u0015\u0002\u00bb\u00bd\u0005",
    "*\u0016\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bb\u0003",
    "\u0002\u0002\u0002\u00bd\'\u0003\u0002\u0002\u0002\u00be\u00bf\u0007",
    "\u0016\u0002\u0002\u00bf\u00c0\u0007(\u0002\u0002\u00c0)\u0003\u0002",
    "\u0002\u0002\u00c1\u00c2\u0007\u0017\u0002\u0002\u00c2\u00c3\u0007(",
    "\u0002\u0002\u00c3+\u0003\u0002\u0002\u0002\u00c4\u00c7\u0005.\u0018",
    "\u0002\u00c5\u00c7\u00050\u0019\u0002\u00c6\u00c4\u0003\u0002\u0002",
    "\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c7-\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0007\u0018\u0002\u0002\u00c9\u00ca\u0007(\u0002",
    "\u0002\u00ca/\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u0019\u0002",
    "\u0002\u00cc\u00cd\u0007(\u0002\u0002\u00cd1\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\u001a\u0002\u0002\u00cf3\u0003\u0002\u0002\u0002",
    "\u00d0\u00d1\u0007,\u0002\u0002\u00d15\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\t\u0003\u0002\u0002\u00d37\u0003\u0002\u0002\u0002\u0010;DJU",
    "\\bfw{\u008c\u00a6\u00b7\u00bc\u00c6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "','", "'in'", "'initial'", "'<initial>'", 
                     "'proceed to'", "'on'", "'and'", "'end of'", "'at'", 
                     "'after'", "'of contract creation'", "'price priceExpression'", 
                     "'receiving transaction of'", "'to'", "'contract_guaranty of'", 
                     "'refund after'", "'platform_guaranty of'", "'accepting license'", 
                     "'visit_increment of'", "'visit of'", "'account_balance greater than'", 
                     "'account_balance smaller than'", "'account_settled'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "TIMEUNIT", 
                      "FOR", "SELF", "GROUPUSER", "GROUPNODE", "NODES", 
                      "PUBLIC", "TERMINATE", "MOBILEPHONE", "FEATHERACCOUNT", 
                      "ID", "HOUR", "DATE", "INTEGER_NUMBER", "TWO_DIGITS", 
                      "FOUR_DIGITS", "NIGHT_DIGITS", "ALPHANUMERIC", "WS" ];

var ruleNames =  [ "policy", "segment", "audience_clause", "state_clause", 
                   "initial_state_clause", "current_state_clause", "target_clause", 
                   "event", "and_event", "period_event", "specific_date_event", 
                   "relative_date_event", "pricing_agreement_event", "transaction_event", 
                   "guaranty_event", "contract_guaranty", "platform_guaranty", 
                   "signing_event", "access_count_event", "visit_increment_event", 
                   "visit_event", "balance_event", "balance_greater", "balance_smaller", 
                   "settlement_event", "license_resource_id", "users" ];

function resourcePolicyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

resourcePolicyParser.prototype = Object.create(antlr4.Parser.prototype);
resourcePolicyParser.prototype.constructor = resourcePolicyParser;

Object.defineProperty(resourcePolicyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

resourcePolicyParser.EOF = antlr4.Token.EOF;
resourcePolicyParser.T__0 = 1;
resourcePolicyParser.T__1 = 2;
resourcePolicyParser.T__2 = 3;
resourcePolicyParser.T__3 = 4;
resourcePolicyParser.T__4 = 5;
resourcePolicyParser.T__5 = 6;
resourcePolicyParser.T__6 = 7;
resourcePolicyParser.T__7 = 8;
resourcePolicyParser.T__8 = 9;
resourcePolicyParser.T__9 = 10;
resourcePolicyParser.T__10 = 11;
resourcePolicyParser.T__11 = 12;
resourcePolicyParser.T__12 = 13;
resourcePolicyParser.T__13 = 14;
resourcePolicyParser.T__14 = 15;
resourcePolicyParser.T__15 = 16;
resourcePolicyParser.T__16 = 17;
resourcePolicyParser.T__17 = 18;
resourcePolicyParser.T__18 = 19;
resourcePolicyParser.T__19 = 20;
resourcePolicyParser.T__20 = 21;
resourcePolicyParser.T__21 = 22;
resourcePolicyParser.T__22 = 23;
resourcePolicyParser.T__23 = 24;
resourcePolicyParser.TIMEUNIT = 25;
resourcePolicyParser.FOR = 26;
resourcePolicyParser.SELF = 27;
resourcePolicyParser.GROUPUSER = 28;
resourcePolicyParser.GROUPNODE = 29;
resourcePolicyParser.NODES = 30;
resourcePolicyParser.PUBLIC = 31;
resourcePolicyParser.TERMINATE = 32;
resourcePolicyParser.MOBILEPHONE = 33;
resourcePolicyParser.FEATHERACCOUNT = 34;
resourcePolicyParser.ID = 35;
resourcePolicyParser.HOUR = 36;
resourcePolicyParser.DATE = 37;
resourcePolicyParser.INTEGER_NUMBER = 38;
resourcePolicyParser.TWO_DIGITS = 39;
resourcePolicyParser.FOUR_DIGITS = 40;
resourcePolicyParser.NIGHT_DIGITS = 41;
resourcePolicyParser.ALPHANUMERIC = 42;
resourcePolicyParser.WS = 43;

resourcePolicyParser.RULE_policy = 0;
resourcePolicyParser.RULE_segment = 1;
resourcePolicyParser.RULE_audience_clause = 2;
resourcePolicyParser.RULE_state_clause = 3;
resourcePolicyParser.RULE_initial_state_clause = 4;
resourcePolicyParser.RULE_current_state_clause = 5;
resourcePolicyParser.RULE_target_clause = 6;
resourcePolicyParser.RULE_event = 7;
resourcePolicyParser.RULE_and_event = 8;
resourcePolicyParser.RULE_period_event = 9;
resourcePolicyParser.RULE_specific_date_event = 10;
resourcePolicyParser.RULE_relative_date_event = 11;
resourcePolicyParser.RULE_pricing_agreement_event = 12;
resourcePolicyParser.RULE_transaction_event = 13;
resourcePolicyParser.RULE_guaranty_event = 14;
resourcePolicyParser.RULE_contract_guaranty = 15;
resourcePolicyParser.RULE_platform_guaranty = 16;
resourcePolicyParser.RULE_signing_event = 17;
resourcePolicyParser.RULE_access_count_event = 18;
resourcePolicyParser.RULE_visit_increment_event = 19;
resourcePolicyParser.RULE_visit_event = 20;
resourcePolicyParser.RULE_balance_event = 21;
resourcePolicyParser.RULE_balance_greater = 22;
resourcePolicyParser.RULE_balance_smaller = 23;
resourcePolicyParser.RULE_settlement_event = 24;
resourcePolicyParser.RULE_license_resource_id = 25;
resourcePolicyParser.RULE_users = 26;

function PolicyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_policy;
    return this;
}

PolicyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PolicyContext.prototype.constructor = PolicyContext;

PolicyContext.prototype.EOF = function() {
    return this.getToken(resourcePolicyParser.EOF, 0);
};

PolicyContext.prototype.segment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SegmentContext);
    } else {
        return this.getTypedRuleContext(SegmentContext,i);
    }
};

PolicyContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPolicy(this);
	}
};

PolicyContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPolicy(this);
	}
};




resourcePolicyParser.PolicyContext = PolicyContext;

resourcePolicyParser.prototype.policy = function() {

    var localctx = new PolicyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, resourcePolicyParser.RULE_policy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.FOR) {
            this.state = 54;
            this.segment();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(resourcePolicyParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_segment;
    return this;
}

SegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentContext.prototype.constructor = SegmentContext;

SegmentContext.prototype.FOR = function() {
    return this.getToken(resourcePolicyParser.FOR, 0);
};

SegmentContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

SegmentContext.prototype.state_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_clauseContext);
    } else {
        return this.getTypedRuleContext(State_clauseContext,i);
    }
};

SegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSegment(this);
	}
};

SegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSegment(this);
	}
};




resourcePolicyParser.SegmentContext = SegmentContext;

resourcePolicyParser.prototype.segment = function() {

    var localctx = new SegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, resourcePolicyParser.RULE_segment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(resourcePolicyParser.FOR);
        this.state = 64; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 63;
            this.audience_clause(0);
            this.state = 66; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (resourcePolicyParser.SELF - 27)) | (1 << (resourcePolicyParser.GROUPUSER - 27)) | (1 << (resourcePolicyParser.GROUPNODE - 27)) | (1 << (resourcePolicyParser.NODES - 27)) | (1 << (resourcePolicyParser.PUBLIC - 27)) | (1 << (resourcePolicyParser.ID - 27)))) !== 0));
        this.state = 68;
        this.match(resourcePolicyParser.T__0);
        this.state = 72;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__2) {
            this.state = 69;
            this.state_clause();
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.users = function() {
    return this.getTypedRuleContext(UsersContext,0);
};

Audience_clauseContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAudience_clause(this);
	}
};



resourcePolicyParser.prototype.audience_clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Audience_clauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, resourcePolicyParser.RULE_audience_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.users();
        this._ctx.stop = this._input.LT(-1);
        this.state = 83;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Audience_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, resourcePolicyParser.RULE_audience_clause);
                this.state = 78;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 79;
                this.match(resourcePolicyParser.T__1);
                this.state = 80;
                this.audience_clause(2); 
            }
            this.state = 85;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function State_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_state_clause;
    return this;
}

State_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_clauseContext.prototype.constructor = State_clauseContext;

State_clauseContext.prototype.initial_state_clause = function() {
    return this.getTypedRuleContext(Initial_state_clauseContext,0);
};

State_clauseContext.prototype.target_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Target_clauseContext);
    } else {
        return this.getTypedRuleContext(Target_clauseContext,i);
    }
};

State_clauseContext.prototype.current_state_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Current_state_clauseContext);
    } else {
        return this.getTypedRuleContext(Current_state_clauseContext,i);
    }
};

State_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterState_clause(this);
	}
};

State_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitState_clause(this);
	}
};




resourcePolicyParser.State_clauseContext = State_clauseContext;

resourcePolicyParser.prototype.state_clause = function() {

    var localctx = new State_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, resourcePolicyParser.RULE_state_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.initial_state_clause();
        this.state = 88; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 87;
            this.target_clause();
            this.state = 90; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===resourcePolicyParser.T__5 || _la===resourcePolicyParser.TERMINATE);
        this.state = 100;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 92;
                this.current_state_clause();
                this.state = 94; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 93;
                    this.target_clause();
                    this.state = 96; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===resourcePolicyParser.T__5 || _la===resourcePolicyParser.TERMINATE); 
            }
            this.state = 102;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Initial_state_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_initial_state_clause;
    return this;
}

Initial_state_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Initial_state_clauseContext.prototype.constructor = Initial_state_clauseContext;


Initial_state_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterInitial_state_clause(this);
	}
};

Initial_state_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitInitial_state_clause(this);
	}
};




resourcePolicyParser.Initial_state_clauseContext = Initial_state_clauseContext;

resourcePolicyParser.prototype.initial_state_clause = function() {

    var localctx = new Initial_state_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, resourcePolicyParser.RULE_initial_state_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(resourcePolicyParser.T__2);
        this.state = 104;
        _la = this._input.LA(1);
        if(!(_la===resourcePolicyParser.T__3 || _la===resourcePolicyParser.T__4)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 105;
        this.match(resourcePolicyParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Current_state_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_current_state_clause;
    return this;
}

Current_state_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Current_state_clauseContext.prototype.constructor = Current_state_clauseContext;

Current_state_clauseContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
};

Current_state_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterCurrent_state_clause(this);
	}
};

Current_state_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitCurrent_state_clause(this);
	}
};




resourcePolicyParser.Current_state_clauseContext = Current_state_clauseContext;

resourcePolicyParser.prototype.current_state_clause = function() {

    var localctx = new Current_state_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, resourcePolicyParser.RULE_current_state_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(resourcePolicyParser.T__2);
        this.state = 108;
        this.match(resourcePolicyParser.ID);
        this.state = 109;
        this.match(resourcePolicyParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Target_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_target_clause;
    return this;
}

Target_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Target_clauseContext.prototype.constructor = Target_clauseContext;

Target_clauseContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
};

Target_clauseContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

Target_clauseContext.prototype.and_event = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_eventContext);
    } else {
        return this.getTypedRuleContext(And_eventContext,i);
    }
};

Target_clauseContext.prototype.TERMINATE = function() {
    return this.getToken(resourcePolicyParser.TERMINATE, 0);
};

Target_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterTarget_clause(this);
	}
};

Target_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitTarget_clause(this);
	}
};




resourcePolicyParser.Target_clauseContext = Target_clauseContext;

resourcePolicyParser.prototype.target_clause = function() {

    var localctx = new Target_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, resourcePolicyParser.RULE_target_clause);
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__5:
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.match(resourcePolicyParser.T__5);
            this.state = 112;
            this.match(resourcePolicyParser.ID);
            this.state = 113;
            this.event();
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicyParser.T__7) {
                this.state = 114;
                this.and_event();
                this.state = 119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case resourcePolicyParser.TERMINATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 120;
            this.match(resourcePolicyParser.TERMINATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.period_event = function() {
    return this.getTypedRuleContext(Period_eventContext,0);
};

EventContext.prototype.specific_date_event = function() {
    return this.getTypedRuleContext(Specific_date_eventContext,0);
};

EventContext.prototype.relative_date_event = function() {
    return this.getTypedRuleContext(Relative_date_eventContext,0);
};

EventContext.prototype.pricing_agreement_event = function() {
    return this.getTypedRuleContext(Pricing_agreement_eventContext,0);
};

EventContext.prototype.transaction_event = function() {
    return this.getTypedRuleContext(Transaction_eventContext,0);
};

EventContext.prototype.guaranty_event = function() {
    return this.getTypedRuleContext(Guaranty_eventContext,0);
};

EventContext.prototype.signing_event = function() {
    return this.getTypedRuleContext(Signing_eventContext,0);
};

EventContext.prototype.access_count_event = function() {
    return this.getTypedRuleContext(Access_count_eventContext,0);
};

EventContext.prototype.balance_event = function() {
    return this.getTypedRuleContext(Balance_eventContext,0);
};

EventContext.prototype.settlement_event = function() {
    return this.getTypedRuleContext(Settlement_eventContext,0);
};

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent(this);
	}
};




resourcePolicyParser.EventContext = EventContext;

resourcePolicyParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, resourcePolicyParser.RULE_event);
    try {
        this.state = 138;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.match(resourcePolicyParser.T__6);
            this.state = 124;
            this.period_event();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.specific_date_event();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.relative_date_event();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 127;
            this.pricing_agreement_event();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.match(resourcePolicyParser.T__6);
            this.state = 129;
            this.transaction_event();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 130;
            this.guaranty_event();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 131;
            this.match(resourcePolicyParser.T__6);
            this.state = 132;
            this.signing_event();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 133;
            this.match(resourcePolicyParser.T__6);
            this.state = 134;
            this.access_count_event();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 135;
            this.match(resourcePolicyParser.T__6);
            this.state = 136;
            this.balance_event();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 137;
            this.settlement_event();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function And_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_and_event;
    return this;
}

And_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_eventContext.prototype.constructor = And_eventContext;

And_eventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

And_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAnd_event(this);
	}
};

And_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAnd_event(this);
	}
};




resourcePolicyParser.And_eventContext = And_eventContext;

resourcePolicyParser.prototype.and_event = function() {

    var localctx = new And_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, resourcePolicyParser.RULE_and_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(resourcePolicyParser.T__7);
        this.state = 141;
        this.event();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Period_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_period_event;
    return this;
}

Period_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Period_eventContext.prototype.constructor = Period_eventContext;

Period_eventContext.prototype.TIMEUNIT = function() {
    return this.getToken(resourcePolicyParser.TIMEUNIT, 0);
};

Period_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPeriod_event(this);
	}
};

Period_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPeriod_event(this);
	}
};




resourcePolicyParser.Period_eventContext = Period_eventContext;

resourcePolicyParser.prototype.period_event = function() {

    var localctx = new Period_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, resourcePolicyParser.RULE_period_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(resourcePolicyParser.T__8);
        this.state = 144;
        this.match(resourcePolicyParser.TIMEUNIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Specific_date_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_specific_date_event;
    return this;
}

Specific_date_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Specific_date_eventContext.prototype.constructor = Specific_date_eventContext;

Specific_date_eventContext.prototype.DATE = function() {
    return this.getToken(resourcePolicyParser.DATE, 0);
};

Specific_date_eventContext.prototype.HOUR = function() {
    return this.getToken(resourcePolicyParser.HOUR, 0);
};

Specific_date_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSpecific_date_event(this);
	}
};

Specific_date_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSpecific_date_event(this);
	}
};




resourcePolicyParser.Specific_date_eventContext = Specific_date_eventContext;

resourcePolicyParser.prototype.specific_date_event = function() {

    var localctx = new Specific_date_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, resourcePolicyParser.RULE_specific_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(resourcePolicyParser.T__9);
        this.state = 147;
        this.match(resourcePolicyParser.DATE);
        this.state = 148;
        this.match(resourcePolicyParser.HOUR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relative_date_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_relative_date_event;
    return this;
}

Relative_date_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relative_date_eventContext.prototype.constructor = Relative_date_eventContext;

Relative_date_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Relative_date_eventContext.prototype.TIMEUNIT = function() {
    return this.getToken(resourcePolicyParser.TIMEUNIT, 0);
};

Relative_date_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterRelative_date_event(this);
	}
};

Relative_date_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitRelative_date_event(this);
	}
};




resourcePolicyParser.Relative_date_eventContext = Relative_date_eventContext;

resourcePolicyParser.prototype.relative_date_event = function() {

    var localctx = new Relative_date_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, resourcePolicyParser.RULE_relative_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(resourcePolicyParser.T__10);
        this.state = 151;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
        this.state = 152;
        this.match(resourcePolicyParser.TIMEUNIT);
        this.state = 153;
        this.match(resourcePolicyParser.T__11);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Pricing_agreement_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_pricing_agreement_event;
    return this;
}

Pricing_agreement_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pricing_agreement_eventContext.prototype.constructor = Pricing_agreement_eventContext;


Pricing_agreement_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPricing_agreement_event(this);
	}
};

Pricing_agreement_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPricing_agreement_event(this);
	}
};




resourcePolicyParser.Pricing_agreement_eventContext = Pricing_agreement_eventContext;

resourcePolicyParser.prototype.pricing_agreement_event = function() {

    var localctx = new Pricing_agreement_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, resourcePolicyParser.RULE_pricing_agreement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(resourcePolicyParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Transaction_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_transaction_event;
    return this;
}

Transaction_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Transaction_eventContext.prototype.constructor = Transaction_eventContext;

Transaction_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Transaction_eventContext.prototype.FEATHERACCOUNT = function() {
    return this.getToken(resourcePolicyParser.FEATHERACCOUNT, 0);
};

Transaction_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterTransaction_event(this);
	}
};

Transaction_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitTransaction_event(this);
	}
};




resourcePolicyParser.Transaction_eventContext = Transaction_eventContext;

resourcePolicyParser.prototype.transaction_event = function() {

    var localctx = new Transaction_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, resourcePolicyParser.RULE_transaction_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(resourcePolicyParser.T__13);
        this.state = 158;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
        this.state = 159;
        this.match(resourcePolicyParser.T__14);
        this.state = 160;
        this.match(resourcePolicyParser.FEATHERACCOUNT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Guaranty_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_guaranty_event;
    return this;
}

Guaranty_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guaranty_eventContext.prototype.constructor = Guaranty_eventContext;

Guaranty_eventContext.prototype.contract_guaranty = function() {
    return this.getTypedRuleContext(Contract_guarantyContext,0);
};

Guaranty_eventContext.prototype.platform_guaranty = function() {
    return this.getTypedRuleContext(Platform_guarantyContext,0);
};

Guaranty_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterGuaranty_event(this);
	}
};

Guaranty_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitGuaranty_event(this);
	}
};




resourcePolicyParser.Guaranty_eventContext = Guaranty_eventContext;

resourcePolicyParser.prototype.guaranty_event = function() {

    var localctx = new Guaranty_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, resourcePolicyParser.RULE_guaranty_event);
    try {
        this.state = 164;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__15:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.contract_guaranty();
            break;
        case resourcePolicyParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.platform_guaranty();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Contract_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_contract_guaranty;
    return this;
}

Contract_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_guarantyContext.prototype.constructor = Contract_guarantyContext;

Contract_guarantyContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicyParser.INTEGER_NUMBER);
    } else {
        return this.getToken(resourcePolicyParser.INTEGER_NUMBER, i);
    }
};


Contract_guarantyContext.prototype.TIMEUNIT = function() {
    return this.getToken(resourcePolicyParser.TIMEUNIT, 0);
};

Contract_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterContract_guaranty(this);
	}
};

Contract_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitContract_guaranty(this);
	}
};




resourcePolicyParser.Contract_guarantyContext = Contract_guarantyContext;

resourcePolicyParser.prototype.contract_guaranty = function() {

    var localctx = new Contract_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, resourcePolicyParser.RULE_contract_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(resourcePolicyParser.T__15);
        this.state = 167;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
        this.state = 168;
        this.match(resourcePolicyParser.T__16);
        this.state = 169;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
        this.state = 170;
        this.match(resourcePolicyParser.TIMEUNIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Platform_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_platform_guaranty;
    return this;
}

Platform_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Platform_guarantyContext.prototype.constructor = Platform_guarantyContext;

Platform_guarantyContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Platform_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPlatform_guaranty(this);
	}
};

Platform_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPlatform_guaranty(this);
	}
};




resourcePolicyParser.Platform_guarantyContext = Platform_guarantyContext;

resourcePolicyParser.prototype.platform_guaranty = function() {

    var localctx = new Platform_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, resourcePolicyParser.RULE_platform_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(resourcePolicyParser.T__17);
        this.state = 173;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Signing_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_signing_event;
    return this;
}

Signing_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Signing_eventContext.prototype.constructor = Signing_eventContext;

Signing_eventContext.prototype.license_resource_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(License_resource_idContext);
    } else {
        return this.getTypedRuleContext(License_resource_idContext,i);
    }
};

Signing_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSigning_event(this);
	}
};

Signing_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSigning_event(this);
	}
};




resourcePolicyParser.Signing_eventContext = Signing_eventContext;

resourcePolicyParser.prototype.signing_event = function() {

    var localctx = new Signing_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, resourcePolicyParser.RULE_signing_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(resourcePolicyParser.T__18);
        this.state = 176;
        this.license_resource_id();
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__1) {
            this.state = 177;
            this.match(resourcePolicyParser.T__1);
            this.state = 178;
            this.license_resource_id();
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_count_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_access_count_event;
    return this;
}

Access_count_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_count_eventContext.prototype.constructor = Access_count_eventContext;

Access_count_eventContext.prototype.visit_increment_event = function() {
    return this.getTypedRuleContext(Visit_increment_eventContext,0);
};

Access_count_eventContext.prototype.visit_event = function() {
    return this.getTypedRuleContext(Visit_eventContext,0);
};

Access_count_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAccess_count_event(this);
	}
};

Access_count_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAccess_count_event(this);
	}
};




resourcePolicyParser.Access_count_eventContext = Access_count_eventContext;

resourcePolicyParser.prototype.access_count_event = function() {

    var localctx = new Access_count_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, resourcePolicyParser.RULE_access_count_event);
    try {
        this.state = 186;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 184;
            this.visit_increment_event();
            break;
        case resourcePolicyParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.visit_event();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Visit_increment_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_visit_increment_event;
    return this;
}

Visit_increment_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_increment_eventContext.prototype.constructor = Visit_increment_eventContext;

Visit_increment_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Visit_increment_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterVisit_increment_event(this);
	}
};

Visit_increment_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitVisit_increment_event(this);
	}
};




resourcePolicyParser.Visit_increment_eventContext = Visit_increment_eventContext;

resourcePolicyParser.prototype.visit_increment_event = function() {

    var localctx = new Visit_increment_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, resourcePolicyParser.RULE_visit_increment_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(resourcePolicyParser.T__19);
        this.state = 189;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Visit_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_visit_event;
    return this;
}

Visit_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_eventContext.prototype.constructor = Visit_eventContext;

Visit_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Visit_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterVisit_event(this);
	}
};

Visit_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitVisit_event(this);
	}
};




resourcePolicyParser.Visit_eventContext = Visit_eventContext;

resourcePolicyParser.prototype.visit_event = function() {

    var localctx = new Visit_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, resourcePolicyParser.RULE_visit_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(resourcePolicyParser.T__20);
        this.state = 192;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_balance_event;
    return this;
}

Balance_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_eventContext.prototype.constructor = Balance_eventContext;

Balance_eventContext.prototype.balance_greater = function() {
    return this.getTypedRuleContext(Balance_greaterContext,0);
};

Balance_eventContext.prototype.balance_smaller = function() {
    return this.getTypedRuleContext(Balance_smallerContext,0);
};

Balance_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterBalance_event(this);
	}
};

Balance_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitBalance_event(this);
	}
};




resourcePolicyParser.Balance_eventContext = Balance_eventContext;

resourcePolicyParser.prototype.balance_event = function() {

    var localctx = new Balance_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, resourcePolicyParser.RULE_balance_event);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 194;
            this.balance_greater();
            break;
        case resourcePolicyParser.T__22:
            this.enterOuterAlt(localctx, 2);
            this.state = 195;
            this.balance_smaller();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_greaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_balance_greater;
    return this;
}

Balance_greaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_greaterContext.prototype.constructor = Balance_greaterContext;

Balance_greaterContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Balance_greaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterBalance_greater(this);
	}
};

Balance_greaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitBalance_greater(this);
	}
};




resourcePolicyParser.Balance_greaterContext = Balance_greaterContext;

resourcePolicyParser.prototype.balance_greater = function() {

    var localctx = new Balance_greaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, resourcePolicyParser.RULE_balance_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(resourcePolicyParser.T__21);
        this.state = 199;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_smallerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_balance_smaller;
    return this;
}

Balance_smallerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_smallerContext.prototype.constructor = Balance_smallerContext;

Balance_smallerContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(resourcePolicyParser.INTEGER_NUMBER, 0);
};

Balance_smallerContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterBalance_smaller(this);
	}
};

Balance_smallerContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitBalance_smaller(this);
	}
};




resourcePolicyParser.Balance_smallerContext = Balance_smallerContext;

resourcePolicyParser.prototype.balance_smaller = function() {

    var localctx = new Balance_smallerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, resourcePolicyParser.RULE_balance_smaller);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(resourcePolicyParser.T__22);
        this.state = 202;
        this.match(resourcePolicyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Settlement_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_settlement_event;
    return this;
}

Settlement_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Settlement_eventContext.prototype.constructor = Settlement_eventContext;


Settlement_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSettlement_event(this);
	}
};

Settlement_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSettlement_event(this);
	}
};




resourcePolicyParser.Settlement_eventContext = Settlement_eventContext;

resourcePolicyParser.prototype.settlement_event = function() {

    var localctx = new Settlement_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, resourcePolicyParser.RULE_settlement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(resourcePolicyParser.T__23);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_license_resource_id;
    return this;
}

License_resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_resource_idContext.prototype.constructor = License_resource_idContext;

License_resource_idContext.prototype.ALPHANUMERIC = function() {
    return this.getToken(resourcePolicyParser.ALPHANUMERIC, 0);
};

License_resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterLicense_resource_id(this);
	}
};

License_resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitLicense_resource_id(this);
	}
};




resourcePolicyParser.License_resource_idContext = License_resource_idContext;

resourcePolicyParser.prototype.license_resource_id = function() {

    var localctx = new License_resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, resourcePolicyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(resourcePolicyParser.ALPHANUMERIC);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.SELF = function() {
    return this.getToken(resourcePolicyParser.SELF, 0);
};

UsersContext.prototype.NODES = function() {
    return this.getToken(resourcePolicyParser.NODES, 0);
};

UsersContext.prototype.PUBLIC = function() {
    return this.getToken(resourcePolicyParser.PUBLIC, 0);
};

UsersContext.prototype.GROUPUSER = function() {
    return this.getToken(resourcePolicyParser.GROUPUSER, 0);
};

UsersContext.prototype.GROUPNODE = function() {
    return this.getToken(resourcePolicyParser.GROUPNODE, 0);
};

UsersContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
};

UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitUsers(this);
	}
};




resourcePolicyParser.UsersContext = UsersContext;

resourcePolicyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, resourcePolicyParser.RULE_users);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        _la = this._input.LA(1);
        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (resourcePolicyParser.SELF - 27)) | (1 << (resourcePolicyParser.GROUPUSER - 27)) | (1 << (resourcePolicyParser.GROUPNODE - 27)) | (1 << (resourcePolicyParser.NODES - 27)) | (1 << (resourcePolicyParser.PUBLIC - 27)) | (1 << (resourcePolicyParser.ID - 27)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


resourcePolicyParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.audience_clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

resourcePolicyParser.prototype.audience_clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.resourcePolicyParser = resourcePolicyParser;
