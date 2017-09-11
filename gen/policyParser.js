// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var policyListener = require('./policyListener').policyListener;
var grammarFileName = "policy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u00d4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0006\u00023\n\u0002\r\u0002",
    "\u000e\u00024\u0003\u0003\u0003\u0003\u0005\u00039\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003>\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004E\n\u0004\r\u0004\u000e",
    "\u0004F\u0003\u0004\u0003\u0004\u0007\u0004K\n\u0004\f\u0004\u000e\u0004",
    "N\u000b\u0004\u0003\u0005\u0007\u0005Q\n\u0005\f\u0005\u000e\u0005T",
    "\u000b\u0005\u0003\u0005\u0003\u0005\u0007\u0005X\n\u0005\f\u0005\u000e",
    "\u0005[\u000b\u0005\u0003\u0005\u0003\u0005\u0007\u0005_\n\u0005\f\u0005",
    "\u000e\u0005b\u000b\u0005\u0003\u0005\u0003\u0005\u0007\u0005f\n\u0005",
    "\f\u0005\u000e\u0005i\u000b\u0005\u0003\u0005\u0005\u0005l\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006r\n\u0006\f\u0006",
    "\u000e\u0006u\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007{\n\u0007\f\u0007\u000e\u0007~\u000b\u0007\u0003\b",
    "\u0003\b\u0003\t\u0006\t\u0083\n\t\r\t\u000e\t\u0084\u0003\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0006\u000b\u008e\n",
    "\u000b\r\u000b\u000e\u000b\u008f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u009b\n\r\f\r\u000e\r\u009e",
    "\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00a5\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00b0\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00b6\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00be\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00c5\n",
    "\u0016\f\u0016\u000e\u0016\u00c8\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u00cd\n\u0017\f\u0017\u000e\u0017\u00d0\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0002\u0002\u0019\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.\u0002\u0004\u0003\u0002\u0007\t\u0003\u0002\u000b\u0010\u0002",
    "\u00d6\u00020\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002\u0002",
    "\u0006B\u0003\u0002\u0002\u0002\bk\u0003\u0002\u0002\u0002\nm\u0003",
    "\u0002\u0002\u0002\fv\u0003\u0002\u0002\u0002\u000e\u007f\u0003\u0002",
    "\u0002\u0002\u0010\u0082\u0003\u0002\u0002\u0002\u0012\u0089\u0003\u0002",
    "\u0002\u0002\u0014\u008b\u0003\u0002\u0002\u0002\u0016\u0091\u0003\u0002",
    "\u0002\u0002\u0018\u0095\u0003\u0002\u0002\u0002\u001a\u00a4\u0003\u0002",
    "\u0002\u0002\u001c\u00a6\u0003\u0002\u0002\u0002\u001e\u00a9\u0003\u0002",
    "\u0002\u0002 \u00af\u0003\u0002\u0002\u0002\"\u00b5\u0003\u0002\u0002",
    "\u0002$\u00b7\u0003\u0002\u0002\u0002&\u00bd\u0003\u0002\u0002\u0002",
    "(\u00bf\u0003\u0002\u0002\u0002*\u00c1\u0003\u0002\u0002\u0002,\u00c9",
    "\u0003\u0002\u0002\u0002.\u00d1\u0003\u0002\u0002\u000202\u0005\u0004",
    "\u0003\u000213\u0005\u0006\u0004\u000221\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "5\u0003\u0003\u0002\u0002\u000268\u0007\u0003\u0002\u000279\u0007*\u0002",
    "\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:;\u0007+\u0002\u0002;=\u0007\u0004\u0002\u0002<>\u0007",
    "*\u0002\u0002=<\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>?",
    "\u0003\u0002\u0002\u0002?@\u0007+\u0002\u0002@A\u0007\u0005\u0002\u0002",
    "A\u0005\u0003\u0002\u0002\u0002BD\u0007\u0018\u0002\u0002CE\u0005\b",
    "\u0005\u0002DC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FD\u0003",
    "\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HL\u0007\u0006\u0002\u0002IK\u0005\u0014\u000b\u0002JI\u0003\u0002\u0002",
    "\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002",
    "\u0002\u0002M\u0007\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "OQ\u0005.\u0018\u0002PO\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002",
    "\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SU\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002Ul\u0005\n\u0006\u0002VX\u0005",
    ".\u0018\u0002WV\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW",
    "\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002",
    "\u0002[Y\u0003\u0002\u0002\u0002\\l\u0005\f\u0007\u0002]_\u0005.\u0018",
    "\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`^\u0003\u0002",
    "\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003\u0002\u0002\u0002b`\u0003",
    "\u0002\u0002\u0002cl\u0005\u000e\b\u0002df\u0005.\u0018\u0002ed\u0003",
    "\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002",
    "\u0002jl\u0005\u0010\t\u0002kR\u0003\u0002\u0002\u0002kY\u0003\u0002",
    "\u0002\u0002k`\u0003\u0002\u0002\u0002kg\u0003\u0002\u0002\u0002l\t",
    "\u0003\u0002\u0002\u0002mn\u0007\u001a\u0002\u0002ns\u0005*\u0016\u0002",
    "op\u0007\u0007\u0002\u0002pr\u0005*\u0016\u0002qo\u0003\u0002\u0002",
    "\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002",
    "\u0002\u0002t\u000b\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "vw\u0007\u0019\u0002\u0002w|\u0005,\u0017\u0002xy\u0007\u0007\u0002",
    "\u0002y{\u0005,\u0017\u0002zx\u0003\u0002\u0002\u0002{~\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\r",
    "\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080\u0007",
    " \u0002\u0002\u0080\u000f\u0003\u0002\u0002\u0002\u0081\u0083\u0005",
    "\u0012\n\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003",
    "\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0007",
    "\u001d\u0002\u0002\u0087\u0088\u0005\f\u0007\u0002\u0088\u0011\u0003",
    "\u0002\u0002\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a\u0013\u0003",
    "\u0002\u0002\u0002\u008b\u008d\u0005\u0016\f\u0002\u008c\u008e\u0005",
    "\u0018\r\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
    "\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003",
    "\u0002\u0002\u0002\u0090\u0015\u0003\u0002\u0002\u0002\u0091\u0092\u0007",
    "\u001d\u0002\u0002\u0092\u0093\u0007\'\u0002\u0002\u0093\u0094\u0007",
    "\u0006\u0002\u0002\u0094\u0017\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    "\u001b\u0002\u0002\u0096\u0097\u0007\u001c\u0002\u0002\u0097\u0098\u0007",
    "\'\u0002\u0002\u0098\u009c\u0005\u001a\u000e\u0002\u0099\u009b\u0005",
    "\u001c\u000f\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009e\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u0019\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u00a5\u0005\u001e\u0010\u0002\u00a0\u00a5\u0005",
    " \u0011\u0002\u00a1\u00a5\u0005\"\u0012\u0002\u00a2\u00a5\u0005$\u0013",
    "\u0002\u00a3\u00a5\u0005&\u0014\u0002\u00a4\u009f\u0003\u0002\u0002",
    "\u0002\u00a4\u00a0\u0003\u0002\u0002\u0002\u00a4\u00a1\u0003\u0002\u0002",
    "\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a3\u0003\u0002\u0002",
    "\u0002\u00a5\u001b\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007\n\u0002",
    "\u0002\u00a7\u00a8\u0005\u001a\u000e\u0002\u00a8\u001d\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\t\u0003\u0002\u0002\u00aa\u001f\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0007\u0011\u0002\u0002\u00ac\u00b0\u0007)\u0002",
    "\u0002\u00ad\u00ae\u0007\u0012\u0002\u0002\u00ae\u00b0\u0007)\u0002",
    "\u0002\u00af\u00ab\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002",
    "\u0002\u00b0!\u0003\u0002\u0002\u0002\u00b1\u00b6\u0007\u0013\u0002",
    "\u0002\u00b2\u00b3\u0007\u0014\u0002\u0002\u00b3\u00b4\u0007!\u0002",
    "\u0002\u00b4\u00b6\u0005(\u0015\u0002\u00b5\u00b1\u0003\u0002\u0002",
    "\u0002\u00b5\u00b2\u0003\u0002\u0002\u0002\u00b6#\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0007\u0015\u0002\u0002\u00b8%\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0007\u0016\u0002\u0002\u00ba\u00be\u0007)\u0002",
    "\u0002\u00bb\u00bc\u0007\u0017\u0002\u0002\u00bc\u00be\u0007)\u0002",
    "\u0002\u00bd\u00b9\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002",
    "\u0002\u00be\'\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\'\u0002\u0002",
    "\u00c0)\u0003\u0002\u0002\u0002\u00c1\u00c6\u0007\'\u0002\u0002\u00c2",
    "\u00c3\u0007\u0007\u0002\u0002\u00c3\u00c5\u0007\'\u0002\u0002\u00c4",
    "\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6",
    "\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7",
    "+\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9",
    "\u00ce\u0007\'\u0002\u0002\u00ca\u00cb\u0007\u0007\u0002\u0002\u00cb",
    "\u00cd\u0007\'\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cd",
    "\u00d0\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce",
    "\u00cf\u0003\u0002\u0002\u0002\u00cf-\u0003\u0002\u0002\u0002\u00d0",
    "\u00ce\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\n\u0002\u0002\u00d2",
    "/\u0003\u0002\u0002\u0002\u001748=FLRY`gks|\u0084\u008f\u009c\u00a4",
    "\u00af\u00b5\u00bd\u00c6\u00ce"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'This contract shall commence with effect from'", 
                     "'and shall continue until'", "'unless terminated earlier in accordance with its terms and conditions'", 
                     "':'", "','", "'diamond_users'", "'gold_users'", "'and'", 
                     "'at the end of hour'", "'at the end of day'", "'at the end of week'", 
                     "'at the end of month'", "'at the end of quarter'", 
                     "'at the end of year'", "'guaranty no less than'", 
                     "'guaranty less than'", "'signing event'", "'on accepting'", 
                     "'access count event'", "'on balance no less than'", 
                     "'on balance less than'", "'for'", "'usergroups'", 
                     "'users'", "'proceed'", "'to'", "'in'", "'on'", "'accepting'", 
                     null, "'license'", "'paying'", "'per'", "'view'", "'require'", 
                     "'nothing'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "FOR", "USERGROUPS", "USERS", 
                      "PROCEED", "TO", "IN", "ON", "ACCEPTING", "SELF", 
                      "LICENSE", "PAYING", "PER", "VIEW", "REQUIRE", "NOTHING", 
                      "ID", "WS", "INT", "DATE", "HOUR" ];

var ruleNames =  [ "p", "duration", "segment", "audience_clause", "audience_individuals_clause", 
                   "audience_groups_clause", "audience_selfdefinedaudience_clause", 
                   "classified_user_clause", "classified_user", "state_clause", 
                   "current_state_clause", "target_clause", "event", "and_event", 
                   "time_event", "guaranty_event", "signing_event", "access_count_event", 
                   "balance_event", "license_resource_id", "users", "user_groups", 
                   "and" ];

function policyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

policyParser.prototype = Object.create(antlr4.Parser.prototype);
policyParser.prototype.constructor = policyParser;

Object.defineProperty(policyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

policyParser.EOF = antlr4.Token.EOF;
policyParser.T__0 = 1;
policyParser.T__1 = 2;
policyParser.T__2 = 3;
policyParser.T__3 = 4;
policyParser.T__4 = 5;
policyParser.T__5 = 6;
policyParser.T__6 = 7;
policyParser.T__7 = 8;
policyParser.T__8 = 9;
policyParser.T__9 = 10;
policyParser.T__10 = 11;
policyParser.T__11 = 12;
policyParser.T__12 = 13;
policyParser.T__13 = 14;
policyParser.T__14 = 15;
policyParser.T__15 = 16;
policyParser.T__16 = 17;
policyParser.T__17 = 18;
policyParser.T__18 = 19;
policyParser.T__19 = 20;
policyParser.T__20 = 21;
policyParser.FOR = 22;
policyParser.USERGROUPS = 23;
policyParser.USERS = 24;
policyParser.PROCEED = 25;
policyParser.TO = 26;
policyParser.IN = 27;
policyParser.ON = 28;
policyParser.ACCEPTING = 29;
policyParser.SELF = 30;
policyParser.LICENSE = 31;
policyParser.PAYING = 32;
policyParser.PER = 33;
policyParser.VIEW = 34;
policyParser.REQUIRE = 35;
policyParser.NOTHING = 36;
policyParser.ID = 37;
policyParser.WS = 38;
policyParser.INT = 39;
policyParser.DATE = 40;
policyParser.HOUR = 41;

policyParser.RULE_p = 0;
policyParser.RULE_duration = 1;
policyParser.RULE_segment = 2;
policyParser.RULE_audience_clause = 3;
policyParser.RULE_audience_individuals_clause = 4;
policyParser.RULE_audience_groups_clause = 5;
policyParser.RULE_audience_selfdefinedaudience_clause = 6;
policyParser.RULE_classified_user_clause = 7;
policyParser.RULE_classified_user = 8;
policyParser.RULE_state_clause = 9;
policyParser.RULE_current_state_clause = 10;
policyParser.RULE_target_clause = 11;
policyParser.RULE_event = 12;
policyParser.RULE_and_event = 13;
policyParser.RULE_time_event = 14;
policyParser.RULE_guaranty_event = 15;
policyParser.RULE_signing_event = 16;
policyParser.RULE_access_count_event = 17;
policyParser.RULE_balance_event = 18;
policyParser.RULE_license_resource_id = 19;
policyParser.RULE_users = 20;
policyParser.RULE_user_groups = 21;
policyParser.RULE_and = 22;

function PContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_p;
    return this;
}

PContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PContext.prototype.constructor = PContext;

PContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

PContext.prototype.segment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SegmentContext);
    } else {
        return this.getTypedRuleContext(SegmentContext,i);
    }
};

PContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterP(this);
	}
};

PContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitP(this);
	}
};




policyParser.PContext = PContext;

policyParser.prototype.p = function() {

    var localctx = new PContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, policyParser.RULE_p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.duration();
        this.state = 48; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 47;
            this.segment();
            this.state = 50; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.FOR);
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

function DurationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.HOUR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.HOUR);
    } else {
        return this.getToken(policyParser.HOUR, i);
    }
};


DurationContext.prototype.DATE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.DATE);
    } else {
        return this.getToken(policyParser.DATE, i);
    }
};


DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitDuration(this);
	}
};




policyParser.DurationContext = DurationContext;

policyParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, policyParser.RULE_duration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(policyParser.T__0);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.DATE) {
            this.state = 53;
            this.match(policyParser.DATE);
        }

        this.state = 56;
        this.match(policyParser.HOUR);
        this.state = 57;
        this.match(policyParser.T__1);
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.DATE) {
            this.state = 58;
            this.match(policyParser.DATE);
        }

        this.state = 61;
        this.match(policyParser.HOUR);
        this.state = 62;
        this.match(policyParser.T__2);
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
    this.ruleIndex = policyParser.RULE_segment;
    return this;
}

SegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentContext.prototype.constructor = SegmentContext;

SegmentContext.prototype.FOR = function() {
    return this.getToken(policyParser.FOR, 0);
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
    if(listener instanceof policyListener ) {
        listener.enterSegment(this);
	}
};

SegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSegment(this);
	}
};




policyParser.SegmentContext = SegmentContext;

policyParser.prototype.segment = function() {

    var localctx = new SegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, policyParser.RULE_segment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(policyParser.FOR);
        this.state = 66; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 65;
            this.audience_clause();
            this.state = 68; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.T__4) | (1 << policyParser.T__5) | (1 << policyParser.T__6) | (1 << policyParser.T__7) | (1 << policyParser.USERGROUPS) | (1 << policyParser.USERS) | (1 << policyParser.SELF))) !== 0));
        this.state = 70;
        this.match(policyParser.T__3);
        this.state = 74;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.IN) {
            this.state = 71;
            this.state_clause();
            this.state = 76;
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
    this.ruleIndex = policyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.audience_individuals_clause = function() {
    return this.getTypedRuleContext(Audience_individuals_clauseContext,0);
};

Audience_clauseContext.prototype.and = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AndContext);
    } else {
        return this.getTypedRuleContext(AndContext,i);
    }
};

Audience_clauseContext.prototype.audience_groups_clause = function() {
    return this.getTypedRuleContext(Audience_groups_clauseContext,0);
};

Audience_clauseContext.prototype.audience_selfdefinedaudience_clause = function() {
    return this.getTypedRuleContext(Audience_selfdefinedaudience_clauseContext,0);
};

Audience_clauseContext.prototype.classified_user_clause = function() {
    return this.getTypedRuleContext(Classified_user_clauseContext,0);
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_clause(this);
	}
};




policyParser.Audience_clauseContext = Audience_clauseContext;

policyParser.prototype.audience_clause = function() {

    var localctx = new Audience_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, policyParser.RULE_audience_clause);
    var _la = 0; // Token type
    try {
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__7) {
                this.state = 77;
                this.and();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 83;
            this.audience_individuals_clause();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__7) {
                this.state = 84;
                this.and();
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 90;
            this.audience_groups_clause();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__7) {
                this.state = 91;
                this.and();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 97;
            this.audience_selfdefinedaudience_clause();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===policyParser.T__7) {
                this.state = 98;
                this.and();
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 104;
            this.classified_user_clause();
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

function Audience_individuals_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_individuals_clause;
    return this;
}

Audience_individuals_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_individuals_clauseContext.prototype.constructor = Audience_individuals_clauseContext;

Audience_individuals_clauseContext.prototype.USERS = function() {
    return this.getToken(policyParser.USERS, 0);
};

Audience_individuals_clauseContext.prototype.users = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsersContext);
    } else {
        return this.getTypedRuleContext(UsersContext,i);
    }
};

Audience_individuals_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_individuals_clause(this);
	}
};

Audience_individuals_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_individuals_clause(this);
	}
};




policyParser.Audience_individuals_clauseContext = Audience_individuals_clauseContext;

policyParser.prototype.audience_individuals_clause = function() {

    var localctx = new Audience_individuals_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, policyParser.RULE_audience_individuals_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(policyParser.USERS);
        this.state = 108;
        this.users();
        this.state = 113;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 109;
                this.match(policyParser.T__4);
                this.state = 110;
                this.users(); 
            }
            this.state = 115;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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

function Audience_groups_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_groups_clause;
    return this;
}

Audience_groups_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_groups_clauseContext.prototype.constructor = Audience_groups_clauseContext;

Audience_groups_clauseContext.prototype.USERGROUPS = function() {
    return this.getToken(policyParser.USERGROUPS, 0);
};

Audience_groups_clauseContext.prototype.user_groups = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(User_groupsContext);
    } else {
        return this.getTypedRuleContext(User_groupsContext,i);
    }
};

Audience_groups_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_groups_clause(this);
	}
};

Audience_groups_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_groups_clause(this);
	}
};




policyParser.Audience_groups_clauseContext = Audience_groups_clauseContext;

policyParser.prototype.audience_groups_clause = function() {

    var localctx = new Audience_groups_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, policyParser.RULE_audience_groups_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(policyParser.USERGROUPS);
        this.state = 117;
        this.user_groups();
        this.state = 122;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.match(policyParser.T__4);
                this.state = 119;
                this.user_groups(); 
            }
            this.state = 124;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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

function Audience_selfdefinedaudience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_selfdefinedaudience_clause;
    return this;
}

Audience_selfdefinedaudience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_selfdefinedaudience_clauseContext.prototype.constructor = Audience_selfdefinedaudience_clauseContext;

Audience_selfdefinedaudience_clauseContext.prototype.SELF = function() {
    return this.getToken(policyParser.SELF, 0);
};

Audience_selfdefinedaudience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_selfdefinedaudience_clause(this);
	}
};

Audience_selfdefinedaudience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_selfdefinedaudience_clause(this);
	}
};




policyParser.Audience_selfdefinedaudience_clauseContext = Audience_selfdefinedaudience_clauseContext;

policyParser.prototype.audience_selfdefinedaudience_clause = function() {

    var localctx = new Audience_selfdefinedaudience_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, policyParser.RULE_audience_selfdefinedaudience_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(policyParser.SELF);
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

function Classified_user_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_classified_user_clause;
    return this;
}

Classified_user_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Classified_user_clauseContext.prototype.constructor = Classified_user_clauseContext;

Classified_user_clauseContext.prototype.audience_groups_clause = function() {
    return this.getTypedRuleContext(Audience_groups_clauseContext,0);
};

Classified_user_clauseContext.prototype.classified_user = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Classified_userContext);
    } else {
        return this.getTypedRuleContext(Classified_userContext,i);
    }
};

Classified_user_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterClassified_user_clause(this);
	}
};

Classified_user_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitClassified_user_clause(this);
	}
};




policyParser.Classified_user_clauseContext = Classified_user_clauseContext;

policyParser.prototype.classified_user_clause = function() {

    var localctx = new Classified_user_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, policyParser.RULE_classified_user_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 127;
            this.classified_user();
            this.state = 130; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.T__4) | (1 << policyParser.T__5) | (1 << policyParser.T__6))) !== 0));
        this.state = 132;
        this.match(policyParser.IN);
        this.state = 133;
        this.audience_groups_clause();
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

function Classified_userContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_classified_user;
    return this;
}

Classified_userContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Classified_userContext.prototype.constructor = Classified_userContext;


Classified_userContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterClassified_user(this);
	}
};

Classified_userContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitClassified_user(this);
	}
};




policyParser.Classified_userContext = Classified_userContext;

policyParser.prototype.classified_user = function() {

    var localctx = new Classified_userContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, policyParser.RULE_classified_user);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.T__4) | (1 << policyParser.T__5) | (1 << policyParser.T__6))) !== 0))) {
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

function State_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_state_clause;
    return this;
}

State_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_clauseContext.prototype.constructor = State_clauseContext;

State_clauseContext.prototype.current_state_clause = function() {
    return this.getTypedRuleContext(Current_state_clauseContext,0);
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

State_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterState_clause(this);
	}
};

State_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitState_clause(this);
	}
};




policyParser.State_clauseContext = State_clauseContext;

policyParser.prototype.state_clause = function() {

    var localctx = new State_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, policyParser.RULE_state_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.current_state_clause();
        this.state = 139; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 138;
            this.target_clause();
            this.state = 141; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.PROCEED);
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
    this.ruleIndex = policyParser.RULE_current_state_clause;
    return this;
}

Current_state_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Current_state_clauseContext.prototype.constructor = Current_state_clauseContext;

Current_state_clauseContext.prototype.IN = function() {
    return this.getToken(policyParser.IN, 0);
};

Current_state_clauseContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

Current_state_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterCurrent_state_clause(this);
	}
};

Current_state_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitCurrent_state_clause(this);
	}
};




policyParser.Current_state_clauseContext = Current_state_clauseContext;

policyParser.prototype.current_state_clause = function() {

    var localctx = new Current_state_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, policyParser.RULE_current_state_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(policyParser.IN);
        this.state = 144;
        this.match(policyParser.ID);
        this.state = 145;
        this.match(policyParser.T__3);
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
    this.ruleIndex = policyParser.RULE_target_clause;
    return this;
}

Target_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Target_clauseContext.prototype.constructor = Target_clauseContext;

Target_clauseContext.prototype.PROCEED = function() {
    return this.getToken(policyParser.PROCEED, 0);
};

Target_clauseContext.prototype.TO = function() {
    return this.getToken(policyParser.TO, 0);
};

Target_clauseContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
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

Target_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTarget_clause(this);
	}
};

Target_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTarget_clause(this);
	}
};




policyParser.Target_clauseContext = Target_clauseContext;

policyParser.prototype.target_clause = function() {

    var localctx = new Target_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, policyParser.RULE_target_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(policyParser.PROCEED);
        this.state = 148;
        this.match(policyParser.TO);
        this.state = 149;
        this.match(policyParser.ID);
        this.state = 150;
        this.event();
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__7) {
            this.state = 151;
            this.and_event();
            this.state = 156;
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

function EventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.time_event = function() {
    return this.getTypedRuleContext(Time_eventContext,0);
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

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitEvent(this);
	}
};




policyParser.EventContext = EventContext;

policyParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, policyParser.RULE_event);
    try {
        this.state = 162;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__8:
        case policyParser.T__9:
        case policyParser.T__10:
        case policyParser.T__11:
        case policyParser.T__12:
        case policyParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.time_event();
            break;
        case policyParser.T__14:
        case policyParser.T__15:
            this.enterOuterAlt(localctx, 2);
            this.state = 158;
            this.guaranty_event();
            break;
        case policyParser.T__16:
        case policyParser.T__17:
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
            this.signing_event();
            break;
        case policyParser.T__18:
            this.enterOuterAlt(localctx, 4);
            this.state = 160;
            this.access_count_event();
            break;
        case policyParser.T__19:
        case policyParser.T__20:
            this.enterOuterAlt(localctx, 5);
            this.state = 161;
            this.balance_event();
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

function And_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_and_event;
    return this;
}

And_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_eventContext.prototype.constructor = And_eventContext;

And_eventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

And_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAnd_event(this);
	}
};

And_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAnd_event(this);
	}
};




policyParser.And_eventContext = And_eventContext;

policyParser.prototype.and_event = function() {

    var localctx = new And_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, policyParser.RULE_and_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(policyParser.T__7);
        this.state = 165;
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

function Time_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_time_event;
    return this;
}

Time_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_eventContext.prototype.constructor = Time_eventContext;


Time_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTime_event(this);
	}
};

Time_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTime_event(this);
	}
};




policyParser.Time_eventContext = Time_eventContext;

policyParser.prototype.time_event = function() {

    var localctx = new Time_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, policyParser.RULE_time_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.T__8) | (1 << policyParser.T__9) | (1 << policyParser.T__10) | (1 << policyParser.T__11) | (1 << policyParser.T__12) | (1 << policyParser.T__13))) !== 0))) {
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

function Guaranty_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_guaranty_event;
    return this;
}

Guaranty_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guaranty_eventContext.prototype.constructor = Guaranty_eventContext;

Guaranty_eventContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Guaranty_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterGuaranty_event(this);
	}
};

Guaranty_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitGuaranty_event(this);
	}
};




policyParser.Guaranty_eventContext = Guaranty_eventContext;

policyParser.prototype.guaranty_event = function() {

    var localctx = new Guaranty_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, policyParser.RULE_guaranty_event);
    try {
        this.state = 173;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.match(policyParser.T__14);
            this.state = 170;
            this.match(policyParser.INT);
            break;
        case policyParser.T__15:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.match(policyParser.T__15);
            this.state = 172;
            this.match(policyParser.INT);
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

function Signing_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_signing_event;
    return this;
}

Signing_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Signing_eventContext.prototype.constructor = Signing_eventContext;

Signing_eventContext.prototype.LICENSE = function() {
    return this.getToken(policyParser.LICENSE, 0);
};

Signing_eventContext.prototype.license_resource_id = function() {
    return this.getTypedRuleContext(License_resource_idContext,0);
};

Signing_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterSigning_event(this);
	}
};

Signing_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSigning_event(this);
	}
};




policyParser.Signing_eventContext = Signing_eventContext;

policyParser.prototype.signing_event = function() {

    var localctx = new Signing_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, policyParser.RULE_signing_event);
    try {
        this.state = 179;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__16:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.match(policyParser.T__16);
            break;
        case policyParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.match(policyParser.T__17);
            this.state = 177;
            this.match(policyParser.LICENSE);
            this.state = 178;
            this.license_resource_id();
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

function Access_count_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_access_count_event;
    return this;
}

Access_count_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_count_eventContext.prototype.constructor = Access_count_eventContext;


Access_count_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAccess_count_event(this);
	}
};

Access_count_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAccess_count_event(this);
	}
};




policyParser.Access_count_eventContext = Access_count_eventContext;

policyParser.prototype.access_count_event = function() {

    var localctx = new Access_count_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, policyParser.RULE_access_count_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(policyParser.T__18);
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
    this.ruleIndex = policyParser.RULE_balance_event;
    return this;
}

Balance_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_eventContext.prototype.constructor = Balance_eventContext;

Balance_eventContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Balance_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterBalance_event(this);
	}
};

Balance_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitBalance_event(this);
	}
};




policyParser.Balance_eventContext = Balance_eventContext;

policyParser.prototype.balance_event = function() {

    var localctx = new Balance_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, policyParser.RULE_balance_event);
    try {
        this.state = 187;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 183;
            this.match(policyParser.T__19);
            this.state = 184;
            this.match(policyParser.INT);
            break;
        case policyParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 185;
            this.match(policyParser.T__20);
            this.state = 186;
            this.match(policyParser.INT);
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

function License_resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_resource_id;
    return this;
}

License_resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_resource_idContext.prototype.constructor = License_resource_idContext;

License_resource_idContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

License_resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_resource_id(this);
	}
};

License_resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_resource_id(this);
	}
};




policyParser.License_resource_idContext = License_resource_idContext;

policyParser.prototype.license_resource_id = function() {

    var localctx = new License_resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, policyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(policyParser.ID);
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
    this.ruleIndex = policyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUsers(this);
	}
};




policyParser.UsersContext = UsersContext;

policyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, policyParser.RULE_users);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(policyParser.ID);
        this.state = 196;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 192;
                this.match(policyParser.T__4);
                this.state = 193;
                this.match(policyParser.ID); 
            }
            this.state = 198;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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

function User_groupsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_user_groups;
    return this;
}

User_groupsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_groupsContext.prototype.constructor = User_groupsContext;

User_groupsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


User_groupsContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUser_groups(this);
	}
};

User_groupsContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUser_groups(this);
	}
};




policyParser.User_groupsContext = User_groupsContext;

policyParser.prototype.user_groups = function() {

    var localctx = new User_groupsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, policyParser.RULE_user_groups);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(policyParser.ID);
        this.state = 204;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 200;
                this.match(policyParser.T__4);
                this.state = 201;
                this.match(policyParser.ID); 
            }
            this.state = 206;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAnd(this);
	}
};




policyParser.AndContext = AndContext;

policyParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, policyParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(policyParser.T__7);
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


exports.policyParser = policyParser;
