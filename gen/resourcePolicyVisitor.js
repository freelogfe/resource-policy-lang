// Generated from tmp\resourcePolicy.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by resourcePolicy.

function resourcePolicyVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

resourcePolicyVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
resourcePolicyVisitor.prototype.constructor = resourcePolicyVisitor;

// Visit a parse tree produced by resourcePolicy#policy.
resourcePolicyVisitor.prototype.visitPolicy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#audience_strict.
resourcePolicyVisitor.prototype.visitAudience_strict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#audience_clause.
resourcePolicyVisitor.prototype.visitAudience_clause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#audience.
resourcePolicyVisitor.prototype.visitAudience = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#subject_icon_strict.
resourcePolicyVisitor.prototype.visitSubject_icon_strict = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#declaration_section.
resourcePolicyVisitor.prototype.visitDeclaration_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#declaration_statement.
resourcePolicyVisitor.prototype.visitDeclaration_statement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#service_state_constant.
resourcePolicyVisitor.prototype.visitService_state_constant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#service_state_scope.
resourcePolicyVisitor.prototype.visitService_state_scope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#state_definition_section.
resourcePolicyVisitor.prototype.visitState_definition_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#state_definition.
resourcePolicyVisitor.prototype.visitState_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#state_name.
resourcePolicyVisitor.prototype.visitState_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#service_state_definition.
resourcePolicyVisitor.prototype.visitService_state_definition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#service_state.
resourcePolicyVisitor.prototype.visitService_state = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#state_transition.
resourcePolicyVisitor.prototype.visitState_transition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#subject_icon.
resourcePolicyVisitor.prototype.visitSubject_icon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#subject_icon_lv.
resourcePolicyVisitor.prototype.visitSubject_icon_lv = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression_assignment.
resourcePolicyVisitor.prototype.visitExpression_assignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression_handle.
resourcePolicyVisitor.prototype.visitExpression_handle = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression.
resourcePolicyVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#multiplyingExpression.
resourcePolicyVisitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#powExpression.
resourcePolicyVisitor.prototype.visitPowExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#signedAtom.
resourcePolicyVisitor.prototype.visitSignedAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#built_in_function.
resourcePolicyVisitor.prototype.visitBuilt_in_function = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#funcname.
resourcePolicyVisitor.prototype.visitFuncname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#atom.
resourcePolicyVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#scientific.
resourcePolicyVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#constant.
resourcePolicyVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#VariableEnvironment.
resourcePolicyVisitor.prototype.visitVariableEnvironment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#VariableArg.
resourcePolicyVisitor.prototype.visitVariableArg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression_call_or_literal.
resourcePolicyVisitor.prototype.visitExpression_call_or_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression_call.
resourcePolicyVisitor.prototype.visitExpression_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#expression_call_argument.
resourcePolicyVisitor.prototype.visitExpression_call_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#environment_variable.
resourcePolicyVisitor.prototype.visitEnvironment_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#event.
resourcePolicyVisitor.prototype.visitEvent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#event_organization.
resourcePolicyVisitor.prototype.visitEvent_organization = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#event_path.
resourcePolicyVisitor.prototype.visitEvent_path = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by resourcePolicy#event_args.
resourcePolicyVisitor.prototype.visitEvent_args = function(ctx) {
  return this.visitChildren(ctx);
};



exports.resourcePolicyVisitor = resourcePolicyVisitor;