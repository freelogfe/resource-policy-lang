var antlr4 = require('antlr4/index');
var resourcePolicyVisitor = require('../gen/resourcePolicyVisitor').resourcePolicyVisitor
var event_def = require('freelog_event_definition').EventDefinitions.JSONDefSync();

class BeautifyGenerator extends resourcePolicyVisitor {
  constructor(contract_number) {
    super();
    this.contract_number = contract_number;
    this.state_machine = {};
    this.current_state = null;
  }

  pushChildren(ctx) {
    let originalInput = ctx.start.getInputStream().strdata;
    let segmentText = originalInput.slice(ctx.start.start, ctx.stop.stop + 1);
    this.texts.push(segmentText)

    // if (ctx.children&& ctx.children.length) {
    //   ctx.children.forEach((child) => {
        // console.log(child)
        // this.texts.push(child.getText());
    //     this.pushChildren(child)
    //   })
    // } else {
      // let originalInput = ctx.start.getInputStream().strdata;
      // let segmentText = originalInput.slice(ctx.start.start, ctx.stop.stop + 1);
      // this.texts.push(segmentText)
      // this.texts.push(ctx.getText());
    // }
  }

  visitPolicy(ctx) {
    this.texts = []

    super.visitPolicy(ctx);
  }

  visitAudience_clause(ctx) {
    this.pushChildren(ctx)
    super.visitAudience_clause(ctx);
  }

  visitDeclaration_statements(ctx) {
    this.pushChildren(ctx)

    super.visitDeclaration_statements(ctx);
  }

  visitExpression_declaration(ctx) {
    let handle = ctx.expression_handle().getText();
    // let args = Array.isArray(ctx.ID()) ? ctx.ID().map(item => {
    //     return item.getText();
    // }) : [ctx.ID().getText()];
    this.pushChildren(ctx)
    super.visitExpression_declaration(ctx);
  }

  visitContract_account_declaration(ctx) {
    this.pushChildren(ctx)
    super.visitContract_account_declaration(ctx);
  }

  visitSingle_custom_event_declaration(ctx) {
    this.pushChildren(ctx)

    super.visitSingle_custom_event_declaration(ctx);
  }

  visitState_definition(ctx) {
    this.pushChildren(ctx)
    super.visitState_definition(ctx);
  }

  visitState_transition(ctx) {
    this.pushChildren(ctx)
    super.visitState_transition(ctx);
  }

  visitState_description(ctx) {
    this.pushChildren(ctx)
  }

  visitEvent(ctx) {
    this.pushChildren(ctx)
    super.visitEvent(ctx);
  }

  visitExpression_call(ctx) {
    this.pushChildren(ctx)
    super.visitExpression_call(ctx);
  }
}

exports.BeautifyGenerator = BeautifyGenerator;
