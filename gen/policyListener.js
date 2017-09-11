// Generated from policy.g4 by ANTLR 4.7
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


// Enter a parse tree produced by policyParser#duration.
policyListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by policyParser#duration.
policyListener.prototype.exitDuration = function(ctx) {
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


// Enter a parse tree produced by policyParser#audience_individuals_clause.
policyListener.prototype.enterAudience_individuals_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_individuals_clause.
policyListener.prototype.exitAudience_individuals_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_groups_clause.
policyListener.prototype.enterAudience_groups_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_groups_clause.
policyListener.prototype.exitAudience_groups_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_selfdefinedaudience_clause.
policyListener.prototype.enterAudience_selfdefinedaudience_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#audience_selfdefinedaudience_clause.
policyListener.prototype.exitAudience_selfdefinedaudience_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#classified_user_clause.
policyListener.prototype.enterClassified_user_clause = function(ctx) {
};

// Exit a parse tree produced by policyParser#classified_user_clause.
policyListener.prototype.exitClassified_user_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#classified_user.
policyListener.prototype.enterClassified_user = function(ctx) {
};

// Exit a parse tree produced by policyParser#classified_user.
policyListener.prototype.exitClassified_user = function(ctx) {
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


// Enter a parse tree produced by policyParser#time_event.
policyListener.prototype.enterTime_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#time_event.
policyListener.prototype.exitTime_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#guaranty_event.
policyListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#guaranty_event.
policyListener.prototype.exitGuaranty_event = function(ctx) {
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


// Enter a parse tree produced by policyParser#balance_event.
policyListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#balance_event.
policyListener.prototype.exitBalance_event = function(ctx) {
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


// Enter a parse tree produced by policyParser#user_groups.
policyListener.prototype.enterUser_groups = function(ctx) {
};

// Exit a parse tree produced by policyParser#user_groups.
policyListener.prototype.exitUser_groups = function(ctx) {
};


// Enter a parse tree produced by policyParser#and.
policyListener.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by policyParser#and.
policyListener.prototype.exitAnd = function(ctx) {
};



exports.policyListener = policyListener;