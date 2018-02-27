// Generated from policy.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by policyParser.
function policyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

policyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
policyListener.prototype.constructor = policyListener;

// Enter a parse tree produced by policyParser#p.
policyListener.prototype.enterP = function(ctx) {
};

// Exit a parse tree produced by policyParser#p.
policyListener.prototype.exitP = function(ctx) {
};


// Enter a parse tree produced by policyParser#segment.
policyListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by policyParser#segment.
policyListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_clause.
policyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_clause.
policyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#state_clause.
policyListener.prototype.enterState_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#state_clause.
policyListener.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#current_state_clause.
policyListener.prototype.enterCurrent_state_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#current_state_clause.
policyListener.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#target_clause.
policyListener.prototype.enterTarget_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#target_clause.
policyListener.prototype.exitTarget_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#event.
policyListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by policyParser#event.
policyListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by policyParser#and_event.
policyListener.prototype.enterAnd_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#and_event.
policyListener.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#period_event.
policyListener.prototype.enterPeriod_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#period_event.
policyListener.prototype.exitPeriod_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#specific_date_event.
policyListener.prototype.enterSpecific_date_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#specific_date_event.
policyListener.prototype.exitSpecific_date_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#relative_date_event.
policyListener.prototype.enterRelative_date_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#relative_date_event.
policyListener.prototype.exitRelative_date_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#pricing_agreement_event.
policyListener.prototype.enterPricing_agreement_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#pricing_agreement_event.
policyListener.prototype.exitPricing_agreement_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#transaction_event.
policyListener.prototype.enterTransaction_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#transaction_event.
policyListener.prototype.exitTransaction_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#guaranty_event.
policyListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#guaranty_event.
policyListener.prototype.exitGuaranty_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#contract_guaranty.
policyListener.prototype.enterContract_guaranty = function(ctx) {
};

// Exit a parse tree produced by policyParser#contract_guaranty.
policyListener.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by policyParser#platform_guaranty.
policyListener.prototype.enterPlatform_guaranty = function(ctx) {
};

// Exit a parse tree produced by policyParser#platform_guaranty.
policyListener.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by policyParser#signing_event.
policyListener.prototype.enterSigning_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#signing_event.
policyListener.prototype.exitSigning_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#access_count_event.
policyListener.prototype.enterAccess_count_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#access_count_event.
policyListener.prototype.exitAccess_count_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#visit_increment_event.
policyListener.prototype.enterVisit_increment_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#visit_increment_event.
policyListener.prototype.exitVisit_increment_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#visit_event.
policyListener.prototype.enterVisit_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#visit_event.
policyListener.prototype.exitVisit_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#balance_event.
policyListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#balance_event.
policyListener.prototype.exitBalance_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#balance_greater.
policyListener.prototype.enterBalance_greater = function(ctx) {
};

// Exit a parse tree produced by policyParser#balance_greater.
policyListener.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by policyParser#balance_smaller.
policyListener.prototype.enterBalance_smaller = function(ctx) {
};

// Exit a parse tree produced by policyParser#balance_smaller.
policyListener.prototype.exitBalance_smaller = function(ctx) {
};


// Enter a parse tree produced by policyParser#settlement_event.
policyListener.prototype.enterSettlement_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#settlement_event.
policyListener.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_resource_id.
policyListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_resource_id.
policyListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by policyParser#users.
policyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by policyParser#users.
policyListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by policyParser#time_unit.
policyListener.prototype.enterTime_unit = function(ctx) {
};

// Exit a parse tree produced by policyParser#time_unit.
policyListener.prototype.exitTime_unit = function(ctx) {
};



exports.policyListener = policyListener;