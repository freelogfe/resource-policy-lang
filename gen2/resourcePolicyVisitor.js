// Generated from generated_grammars\resourcePolicy.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by resourcePolicyParser.

function resourcePolicyVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

resourcePolicyVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
resourcePolicyVisitor.prototype.constructor = resourcePolicyVisitor;

// Visit a parse tree produced by resourcePolicyParser#policy.
resourcePolicyVisitor.prototype.visitPolicy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#audience_strict.
resourcePolicyVisitor.prototype.visitAudience_strict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#audience_clause.
resourcePolicyVisitor.prototype.visitAudience_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#users.
resourcePolicyVisitor.prototype.visitUsers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#requirement.
resourcePolicyVisitor.prototype.visitRequirement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#contract_with_subject.
resourcePolicyVisitor.prototype.visitContract_with_subject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#declaration_section.
resourcePolicyVisitor.prototype.visitDeclaration_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#declaration_statements.
resourcePolicyVisitor.prototype.visitDeclaration_statements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#service_state_constant.
resourcePolicyVisitor.prototype.visitService_state_constant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#service_state_scope.
resourcePolicyVisitor.prototype.visitService_state_scope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#state_definition_section.
resourcePolicyVisitor.prototype.visitState_definition_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#state_definition.
resourcePolicyVisitor.prototype.visitState_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#state_name.
resourcePolicyVisitor.prototype.visitState_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#service_state_definition.
resourcePolicyVisitor.prototype.visitService_state_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#service_state.
resourcePolicyVisitor.prototype.visitService_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#state_transition.
resourcePolicyVisitor.prototype.visitState_transition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#subject_id.
resourcePolicyVisitor.prototype.visitSubject_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#entity_bracket.
resourcePolicyVisitor.prototype.visitEntity_bracket = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#account.
resourcePolicyVisitor.prototype.visitAccount = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#subject.
resourcePolicyVisitor.prototype.visitSubject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#subject_service.
resourcePolicyVisitor.prototype.visitSubject_service = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#user_organization_name.
resourcePolicyVisitor.prototype.visitUser_organization_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_test.
resourcePolicyVisitor.prototype.visitExpression_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_assignment.
resourcePolicyVisitor.prototype.visitExpression_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_handle.
resourcePolicyVisitor.prototype.visitExpression_handle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression.
resourcePolicyVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#multiplyingExpression.
resourcePolicyVisitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#powExpression.
resourcePolicyVisitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#signedAtom.
resourcePolicyVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#built_in_function.
resourcePolicyVisitor.prototype.visitBuilt_in_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#funcname.
resourcePolicyVisitor.prototype.visitFuncname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#atom.
resourcePolicyVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#scientific.
resourcePolicyVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#constant.
resourcePolicyVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#VariableEnvironment.
resourcePolicyVisitor.prototype.visitVariableEnvironment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#VariableArg.
resourcePolicyVisitor.prototype.visitVariableArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_call_or_literal.
resourcePolicyVisitor.prototype.visitExpression_call_or_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_call.
resourcePolicyVisitor.prototype.visitExpression_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#expression_call_argument.
resourcePolicyVisitor.prototype.visitExpression_call_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#environment_variable.
resourcePolicyVisitor.prototype.visitEnvironment_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#event.
resourcePolicyVisitor.prototype.visitEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#event_service.
resourcePolicyVisitor.prototype.visitEvent_service = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#event_path.
resourcePolicyVisitor.prototype.visitEvent_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#event_name.
resourcePolicyVisitor.prototype.visitEvent_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicyParser#event_args.
resourcePolicyVisitor.prototype.visitEvent_args = function(ctx) {
  return this.visitChildren(ctx);
};



exports.resourcePolicyVisitor = resourcePolicyVisitor;