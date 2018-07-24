var antlr4 = require('antlr4/index');
var resourcePolicyVisitor = require ('./resourcePolicyVisitor').resourcePolicyVisitor

class SMGenerator extends resourcePolicyVisitor {

  constructor(contract_number) {
    super();
    this.contract_number = contract_number;
    this.state_machine = {'contract_number': contract_number};
  }

  visitPolicy (ctx) {
    this.state_machine['visited'] = true;
    this.state_machine['contract_accounts'] = [];
    this.state_machine['custom_expressions'] = [];
    this.state_machine['custom_events'] = [];
    this.state_machine['states'] = [];
    super.visitPolicy(ctx);
  }

  visitDeclaration_statements (ctx) {
    super.visitDeclaration_statements(ctx);
  }

  visitExpression_declaration (ctx) {
    this.state_machine['custom_expressions'].push(ctx.getText());
  }

  visitState_definition (ctx) {
    this.state_machine['states'].push({[ctx.getChild(0).getText()]:null});
    super.visitState_definition(ctx);
  }

  visitEvent (ctx) {
    this.state_machine['events'] = 'event';
    super.visitEvent(ctx);
  }
}

exports.SMGenerator = SMGenerator;
