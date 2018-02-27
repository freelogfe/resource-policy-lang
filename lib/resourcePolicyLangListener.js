// Generated from resourcePolicyLang.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by resourcePolicyLangParser.
function resourcePolicyLangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

resourcePolicyLangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
resourcePolicyLangListener.prototype.constructor = resourcePolicyLangListener;

// Enter a parse tree produced by resourcePolicyLangParser#policy.
resourcePolicyLangListener.prototype.enterPolicy = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#policy.
resourcePolicyLangListener.prototype.exitPolicy = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#segment.
resourcePolicyLangListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#segment.
resourcePolicyLangListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#audience_clause.
resourcePolicyLangListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#audience_clause.
resourcePolicyLangListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#state_clause.
resourcePolicyLangListener.prototype.enterState_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#state_clause.
resourcePolicyLangListener.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#current_state_clause.
resourcePolicyLangListener.prototype.enterCurrent_state_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#current_state_clause.
resourcePolicyLangListener.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#target_clause.
resourcePolicyLangListener.prototype.enterTarget_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#target_clause.
resourcePolicyLangListener.prototype.exitTarget_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#event.
resourcePolicyLangListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#event.
resourcePolicyLangListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#and_event.
resourcePolicyLangListener.prototype.enterAnd_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#and_event.
resourcePolicyLangListener.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#period_event.
resourcePolicyLangListener.prototype.enterPeriod_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#period_event.
resourcePolicyLangListener.prototype.exitPeriod_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#specific_date_event.
resourcePolicyLangListener.prototype.enterSpecific_date_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#specific_date_event.
resourcePolicyLangListener.prototype.exitSpecific_date_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#relative_date_event.
resourcePolicyLangListener.prototype.enterRelative_date_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#relative_date_event.
resourcePolicyLangListener.prototype.exitRelative_date_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#pricing_agreement_event.
resourcePolicyLangListener.prototype.enterPricing_agreement_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#pricing_agreement_event.
resourcePolicyLangListener.prototype.exitPricing_agreement_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#transaction_event.
resourcePolicyLangListener.prototype.enterTransaction_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#transaction_event.
resourcePolicyLangListener.prototype.exitTransaction_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#guaranty_event.
resourcePolicyLangListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#guaranty_event.
resourcePolicyLangListener.prototype.exitGuaranty_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#contract_guaranty.
resourcePolicyLangListener.prototype.enterContract_guaranty = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#contract_guaranty.
resourcePolicyLangListener.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#platform_guaranty.
resourcePolicyLangListener.prototype.enterPlatform_guaranty = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#platform_guaranty.
resourcePolicyLangListener.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#signing_event.
resourcePolicyLangListener.prototype.enterSigning_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#signing_event.
resourcePolicyLangListener.prototype.exitSigning_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#access_count_event.
resourcePolicyLangListener.prototype.enterAccess_count_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#access_count_event.
resourcePolicyLangListener.prototype.exitAccess_count_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#visit_increment_event.
resourcePolicyLangListener.prototype.enterVisit_increment_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#visit_increment_event.
resourcePolicyLangListener.prototype.exitVisit_increment_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#visit_event.
resourcePolicyLangListener.prototype.enterVisit_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#visit_event.
resourcePolicyLangListener.prototype.exitVisit_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#balance_event.
resourcePolicyLangListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#balance_event.
resourcePolicyLangListener.prototype.exitBalance_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#balance_greater.
resourcePolicyLangListener.prototype.enterBalance_greater = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#balance_greater.
resourcePolicyLangListener.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#balance_smaller.
resourcePolicyLangListener.prototype.enterBalance_smaller = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#balance_smaller.
resourcePolicyLangListener.prototype.exitBalance_smaller = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#settlement_event.
resourcePolicyLangListener.prototype.enterSettlement_event = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#settlement_event.
resourcePolicyLangListener.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#license_resource_id.
resourcePolicyLangListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#license_resource_id.
resourcePolicyLangListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#users.
resourcePolicyLangListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#users.
resourcePolicyLangListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyLangParser#time_unit.
resourcePolicyLangListener.prototype.enterTime_unit = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyLangParser#time_unit.
resourcePolicyLangListener.prototype.exitTime_unit = function(ctx) {
};



exports.resourcePolicyLangListener = resourcePolicyLangListener;