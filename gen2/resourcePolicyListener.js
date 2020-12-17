// Generated from generated_grammars\resourcePolicy.g4 by ANTLR 4.8
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


// Enter a parse tree produced by resourcePolicyParser#audience_strict.
resourcePolicyListener.prototype.enterAudience_strict = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#audience_strict.
resourcePolicyListener.prototype.exitAudience_strict = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#audience_clause.
resourcePolicyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#audience_clause.
resourcePolicyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#users.
resourcePolicyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#users.
resourcePolicyListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#requirement.
resourcePolicyListener.prototype.enterRequirement = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#requirement.
resourcePolicyListener.prototype.exitRequirement = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#contract_with_subject.
resourcePolicyListener.prototype.enterContract_with_subject = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#contract_with_subject.
resourcePolicyListener.prototype.exitContract_with_subject = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#declaration_section.
resourcePolicyListener.prototype.enterDeclaration_section = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#declaration_section.
resourcePolicyListener.prototype.exitDeclaration_section = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#declaration_statements.
resourcePolicyListener.prototype.enterDeclaration_statements = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#declaration_statements.
resourcePolicyListener.prototype.exitDeclaration_statements = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#service_state_constant.
resourcePolicyListener.prototype.enterService_state_constant = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#service_state_constant.
resourcePolicyListener.prototype.exitService_state_constant = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#service_state_scope.
resourcePolicyListener.prototype.enterService_state_scope = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#service_state_scope.
resourcePolicyListener.prototype.exitService_state_scope = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#state_definition_section.
resourcePolicyListener.prototype.enterState_definition_section = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#state_definition_section.
resourcePolicyListener.prototype.exitState_definition_section = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#state_definition.
resourcePolicyListener.prototype.enterState_definition = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#state_definition.
resourcePolicyListener.prototype.exitState_definition = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#state_name.
resourcePolicyListener.prototype.enterState_name = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#state_name.
resourcePolicyListener.prototype.exitState_name = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#service_state_definition.
resourcePolicyListener.prototype.enterService_state_definition = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#service_state_definition.
resourcePolicyListener.prototype.exitService_state_definition = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#service_state.
resourcePolicyListener.prototype.enterService_state = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#service_state.
resourcePolicyListener.prototype.exitService_state = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#state_transition.
resourcePolicyListener.prototype.enterState_transition = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#state_transition.
resourcePolicyListener.prototype.exitState_transition = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#subject_id.
resourcePolicyListener.prototype.enterSubject_id = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#subject_id.
resourcePolicyListener.prototype.exitSubject_id = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#entity_bracket.
resourcePolicyListener.prototype.enterEntity_bracket = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#entity_bracket.
resourcePolicyListener.prototype.exitEntity_bracket = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#account.
resourcePolicyListener.prototype.enterAccount = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#account.
resourcePolicyListener.prototype.exitAccount = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#subject.
resourcePolicyListener.prototype.enterSubject = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#subject.
resourcePolicyListener.prototype.exitSubject = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#subject_service.
resourcePolicyListener.prototype.enterSubject_service = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#subject_service.
resourcePolicyListener.prototype.exitSubject_service = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#user_organization_name.
resourcePolicyListener.prototype.enterUser_organization_name = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#user_organization_name.
resourcePolicyListener.prototype.exitUser_organization_name = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_test.
resourcePolicyListener.prototype.enterExpression_test = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_test.
resourcePolicyListener.prototype.exitExpression_test = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_assignment.
resourcePolicyListener.prototype.enterExpression_assignment = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_assignment.
resourcePolicyListener.prototype.exitExpression_assignment = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_handle.
resourcePolicyListener.prototype.enterExpression_handle = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_handle.
resourcePolicyListener.prototype.exitExpression_handle = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression.
resourcePolicyListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression.
resourcePolicyListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#multiplyingExpression.
resourcePolicyListener.prototype.enterMultiplyingExpression = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#multiplyingExpression.
resourcePolicyListener.prototype.exitMultiplyingExpression = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#powExpression.
resourcePolicyListener.prototype.enterPowExpression = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#powExpression.
resourcePolicyListener.prototype.exitPowExpression = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#signedAtom.
resourcePolicyListener.prototype.enterSignedAtom = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#signedAtom.
resourcePolicyListener.prototype.exitSignedAtom = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#built_in_function.
resourcePolicyListener.prototype.enterBuilt_in_function = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#built_in_function.
resourcePolicyListener.prototype.exitBuilt_in_function = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#funcname.
resourcePolicyListener.prototype.enterFuncname = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#funcname.
resourcePolicyListener.prototype.exitFuncname = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#atom.
resourcePolicyListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#atom.
resourcePolicyListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#scientific.
resourcePolicyListener.prototype.enterScientific = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#scientific.
resourcePolicyListener.prototype.exitScientific = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#constant.
resourcePolicyListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#constant.
resourcePolicyListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#VariableEnvironment.
resourcePolicyListener.prototype.enterVariableEnvironment = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#VariableEnvironment.
resourcePolicyListener.prototype.exitVariableEnvironment = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#VariableArg.
resourcePolicyListener.prototype.enterVariableArg = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#VariableArg.
resourcePolicyListener.prototype.exitVariableArg = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_call_or_literal.
resourcePolicyListener.prototype.enterExpression_call_or_literal = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_call_or_literal.
resourcePolicyListener.prototype.exitExpression_call_or_literal = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_call.
resourcePolicyListener.prototype.enterExpression_call = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_call.
resourcePolicyListener.prototype.exitExpression_call = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#expression_call_argument.
resourcePolicyListener.prototype.enterExpression_call_argument = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#expression_call_argument.
resourcePolicyListener.prototype.exitExpression_call_argument = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#environment_variable.
resourcePolicyListener.prototype.enterEnvironment_variable = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#environment_variable.
resourcePolicyListener.prototype.exitEnvironment_variable = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event.
resourcePolicyListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event.
resourcePolicyListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event_service.
resourcePolicyListener.prototype.enterEvent_service = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event_service.
resourcePolicyListener.prototype.exitEvent_service = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event_path.
resourcePolicyListener.prototype.enterEvent_path = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event_path.
resourcePolicyListener.prototype.exitEvent_path = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event_name.
resourcePolicyListener.prototype.enterEvent_name = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event_name.
resourcePolicyListener.prototype.exitEvent_name = function(ctx) {
};


// Enter a parse tree produced by resourcePolicyParser#event_args.
resourcePolicyListener.prototype.enterEvent_args = function(ctx) {
};

// Exit a parse tree produced by resourcePolicyParser#event_args.
resourcePolicyListener.prototype.exitEvent_args = function(ctx) {
};



exports.resourcePolicyListener = resourcePolicyListener;