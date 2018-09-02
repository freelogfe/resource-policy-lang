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
    this.state_machine['custom_expressions'] = {};
    this.state_machine['custom_events'] = [];
    this.state_machine['states'] = {};
    super.visitPolicy(ctx);
  }

  visitDeclaration_statements (ctx) {
    super.visitDeclaration_statements(ctx);
  }

  visitExpression_declaration (ctx) {

    let handle = ctx.expression_handle().getText();
    let args = Array.isArray(ctx.ID()) ? ctx.ID().map(item => {return item.getText();}) : [ctx.ID().getText()];
    this.state_machine['custom_expressions'][handle]= {'args' : args, 'body': ctx.expression_definition().getText()};

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

  visitExpression_call (ctx) {
    super.visitExpression_call(ctx);
  }

  //fill out event args in case of expression or a call to expression
  get_call_frame (ctx) {
    let call_frame = {};
    if (ctx.expression()) {
      call_frame.type = 'literal';
      call_frame.literal = ctx.expression().getText();
    }
    else if (ctx.expression_call()) {
      call_frame.type = 'invocation';
      call_frame.handle = ctx.expression_call().expression_handle().getText();
      call_frame.args = ctx.expression_call().expression_call_argument().map(arg => { return arg.getText(); });
    }
    else {
      throw('expression syntax error');
    }
    return call_frame;
  }

  //jump function for reflected event handling functions
  callSuper(fName, ctx) {
    super[fName](ctx);
  }

  //for inlining expression definitions
  expression_inlining_substitution(expression_body, params) {
    let result = expression_body;
    Object.keys(params).map( key => {
      result = result.replace(key, params[key]);
    });
    return result;
  }
}

var ruleName_to_functionName = (ruleName) => {
  return 'visit'+ ruleName.charAt(0).toUpperCase() + ruleName.slice(1);
}

/*
Inject generation actions for events dynamically based on definitions in package freelog_event_definition
main purpose here is to minimize the change in code base in case of adding new event
*/
event_def.forEach ((event) => {
  SMGenerator.prototype[ruleName_to_functionName(event['RuleName'])] = new Function(
    'ctx',
    `
    let translated_event = {};

    translated_event.code  = '${event['Code']}';
    translated_event.params = {};

    ${event['Params'].split(',').map(item => {
      return `if (Array.isArray(ctx.${item}())) {
                translated_event.params.${item} = [];
                ctx.${item}().forEach(item => {
                  translated_event.params.${item}.push(item.getText());
                });
              }
              else {
                if (typeof(ctx.${item}().expression_call_or_literal) === 'function') {
                  let call_frame = this.get_call_frame(ctx.${item}().expression_call_or_literal());
                  translated_event.params.${item} = call_frame;
                }
                translated_event.params.${item} = ctx.${item}().getText();
              }
              this.current_param = null;
              `
    }).join('\n')};

    this.state_machine['states'][this.current_state]['transition'][this.current_transit_to] = translated_event;
    this.callSuper('${ruleName_to_functionName(event['RuleName'])}', ctx);
    `
  );
});


exports.SMGenerator = SMGenerator;
