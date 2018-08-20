var antlr4 = require('antlr4/index');
var resourcePolicyVisitor = require ('./gen/resourcePolicyVisitor').resourcePolicyVisitor
var event_def = require('freelog_event_definition').EventDefinitions.JSONDefSync();

class SMGenerator extends resourcePolicyVisitor {

  constructor(contract_number) {
    super();
    this.contract_number = contract_number;
    this.state_machine = {'contract_number': contract_number};
    this.current_state = null;
  }

  visitPolicy (ctx) {
    this.state_machine['visited'] = true;
    this.state_machine['contract_accounts'] = [];
    this.state_machine['custom_expressions'] = [];
    this.state_machine['custom_events'] = [];
    this.state_machine['states'] = {};
    super.visitPolicy(ctx);
  }

  visitDeclaration_statements (ctx) {
    super.visitDeclaration_statements(ctx);
  }

  visitExpression_declaration (ctx) {
    this.state_machine['custom_expressions'].push(ctx.getText());
    super.visitExpression_declaration(ctx);
  }

  visitContract_account_declaration (ctx) {
    this.state_machine['contract_accounts'].push({
      'type':ctx.getChild(0).getText(),
      'name':ctx.getChild(1).getText()
    });
    super.visitContract_account_declaration(ctx);
  }

  visitSingle_custom_event_declaration (ctx) {
    this.state_machine['custom_events' ].push({
      'type':ctx.getChild(0).getText(),
      'name':ctx.getChild(2).getText()
    });
    super.visitSingle_custom_event_declaration(ctx);
  }

  visitState_definition (ctx) {
    this.current_state = ctx.getChild(0).getText();
    this.state_machine['states'][this.current_state]={'authorization':[],'transition':{}};
    super.visitState_definition(ctx);
  }

  visitState_transition (ctx) {
    let transition = this.state_machine['states'][this.current_state]['transition']

    if (ctx.getChildCount() > 1) {
      this.current_transit_to = ctx.getChild(2).getText();
      transition[this.current_transit_to] = null;
    }
    else {
      transition['terminate'] = null;
    }

    super.visitState_transition(ctx);
  }

  visitState_description (ctx) {
    this.state_machine['states'][this.current_state]['authorization'].push(ctx.getChild(0).getText());
  }

  visitEvent (ctx) {
    super.visitEvent(ctx);
  }

  callSuper(fName, ctx) {
    super[fName](ctx);
  }
}

var ruleName_to_functionName = (ruleName) => {
  return 'visit'+ ruleName.charAt(0).toUpperCase() + ruleName.slice(1);
}

event_def.forEach ((event) => {
  SMGenerator.prototype[ruleName_to_functionName(event['RuleName'])] = new Function(
    'ctx',
    `
    this.state_machine['states'][this.current_state]['transition'][this.current_transit_to]
      = '${event['Code']}';
    this.callSuper('${ruleName_to_functionName(event['RuleName'])}', ctx);
    `
  );
});


exports.SMGenerator = SMGenerator;
