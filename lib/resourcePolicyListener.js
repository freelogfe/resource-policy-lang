// Generated from resourcePolicy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by resourcePolicyParser.
function resourcePolicyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

resourcePolicyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
resourcePolicyListener.prototype.constructor = resourcePolicyListener;

// Enter a parse tree produced by resourcePolicyParser#policy.
resourcePolicyListener.prototype.enterPolicy = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#policy.
resourcePolicyListener.prototype.exitPolicy = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#segment.
resourcePolicyListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#segment.
resourcePolicyListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#audience_clause.
resourcePolicyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#audience_clause.
resourcePolicyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#state_clause.
resourcePolicyListener.prototype.enterState_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#state_clause.
resourcePolicyListener.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#initial_state_clause.
resourcePolicyListener.prototype.enterInitial_state_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#initial_state_clause.
resourcePolicyListener.prototype.exitInitial_state_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#current_state_clause.
resourcePolicyListener.prototype.enterCurrent_state_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#current_state_clause.
resourcePolicyListener.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#target_clause.
resourcePolicyListener.prototype.enterTarget_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#target_clause.
resourcePolicyListener.prototype.exitTarget_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event.
resourcePolicyListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event.
resourcePolicyListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#and_event.
resourcePolicyListener.prototype.enterAnd_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#and_event.
resourcePolicyListener.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#period_event.
resourcePolicyListener.prototype.enterPeriod_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#period_event.
resourcePolicyListener.prototype.exitPeriod_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#specific_date_event.
resourcePolicyListener.prototype.enterSpecific_date_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#specific_date_event.
resourcePolicyListener.prototype.exitSpecific_date_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#relative_date_event.
resourcePolicyListener.prototype.enterRelative_date_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#relative_date_event.
resourcePolicyListener.prototype.exitRelative_date_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#pricing_agreement_event.
resourcePolicyListener.prototype.enterPricing_agreement_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#pricing_agreement_event.
resourcePolicyListener.prototype.exitPricing_agreement_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#transaction_event.
resourcePolicyListener.prototype.enterTransaction_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#transaction_event.
resourcePolicyListener.prototype.exitTransaction_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#guaranty_event.
resourcePolicyListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#guaranty_event.
resourcePolicyListener.prototype.exitGuaranty_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#contract_guaranty.
resourcePolicyListener.prototype.enterContract_guaranty = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#contract_guaranty.
resourcePolicyListener.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#platform_guaranty.
resourcePolicyListener.prototype.enterPlatform_guaranty = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#platform_guaranty.
resourcePolicyListener.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#signing_event.
resourcePolicyListener.prototype.enterSigning_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#signing_event.
resourcePolicyListener.prototype.exitSigning_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#access_count_event.
resourcePolicyListener.prototype.enterAccess_count_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#access_count_event.
resourcePolicyListener.prototype.exitAccess_count_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#visit_increment_event.
resourcePolicyListener.prototype.enterVisit_increment_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#visit_increment_event.
resourcePolicyListener.prototype.exitVisit_increment_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#visit_event.
resourcePolicyListener.prototype.enterVisit_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#visit_event.
resourcePolicyListener.prototype.exitVisit_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#balance_event.
resourcePolicyListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#balance_event.
resourcePolicyListener.prototype.exitBalance_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#balance_greater.
resourcePolicyListener.prototype.enterBalance_greater = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#balance_greater.
resourcePolicyListener.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#balance_smaller.
resourcePolicyListener.prototype.enterBalance_smaller = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#balance_smaller.
resourcePolicyListener.prototype.exitBalance_smaller = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#settlement_event.
resourcePolicyListener.prototype.enterSettlement_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#settlement_event.
resourcePolicyListener.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#license_resource_id.
resourcePolicyListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#license_resource_id.
resourcePolicyListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#users.
resourcePolicyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#users.
resourcePolicyListener.prototype.exitUsers = function(ctx) {
};



exports.resourcePolicyListener = resourcePolicyListener;