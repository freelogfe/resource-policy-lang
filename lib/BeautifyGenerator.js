var antlr4 = require('antlr4/index')
var resourcePolicyVisitor = require('../gen/resourcePolicyVisitor').resourcePolicyVisitor
var event_def = require('freelog_event_definition/lib/event_definition')

class BeautifyGenerator extends resourcePolicyVisitor {
  constructor(contract_number) {
    super()
    this.contract_number = contract_number
    this.policyRows = []
    this.activeRowIndex = -1
    this.state_machine = {}
    this.current_state = null
  }

  pushChildren(ctx) {

    let originalInput = ctx.start.getInputStream().strdata
    let segmentText = originalInput.slice(ctx.start.start, ctx.stop.stop + 1)

    this.texts.push(segmentText)

  }

  getFullRowString (ctx){
    return ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1)
  }

  visitPerRowString (ctx, type){
    this.policyRows.push({
      type,
      policyRowBody: this.getFullRowString(ctx)
    })
    this.activeRowIndex = this.policyRows.length - 1
  }

  visitPolicy(ctx) {
    this.texts = []

    super.visitPolicy(ctx)
  }

  visitAudience_clause(ctx) {
    this.visitPerRowString(ctx, 'audience')
    super.visitAudience_clause(ctx)
  }

  visitDeclaration_statements(ctx) {
    this.visitPerRowString(ctx, 'declaration')
    super.visitDeclaration_statements(ctx)
  }

  visitExpression_declaration(ctx) {
    const row = this.policyRows[this.activeRowIndex]
    row['declareType'] = 'contract-expression'

    row['highlightMap'] = {
      'body': ctx.expression_definition().getText()
    }

    super.visitExpression_declaration(ctx)
  }

  visitContract_account_declaration(ctx) {
    const row = this.policyRows[this.activeRowIndex]
    row['declareType'] = 'contract-account'

    row['highlightMap'] = {
      'body': ctx.getChild(1).getText()
    }

    super.visitContract_account_declaration(ctx)
  }

  visitSingle_custom_event_declaration(ctx) {
    const row = this.policyRows[this.activeRowIndex]
    row['declareType'] = 'custom-event'
    row['highlightMap'] = {
      'body': ctx.getText()
    }
    super.visitSingle_custom_event_declaration(ctx)
  }

  visitState_definition(ctx) {
    this.visitPerRowString(ctx, 'state')
    this.current_state = ctx.getChild(0).getText()
    const row = this.policyRows[this.activeRowIndex]
    row['highlightMap'] = {
      'authorization': [],
      'transition':[],
      'events': {}
    }
    row['stateName'] = this.current_state
    super.visitState_definition(ctx)
  }

  visitState_transition(ctx) {
    const row = this.policyRows[this.activeRowIndex]

    // console.log(ctx.getText())

    if (ctx.getChildCount() > 1) {
      row['highlightMap']['transition'].push(ctx.getChild(2).getText())
    }
    super.visitState_transition(ctx)
  }

  visitState_description(ctx) {
    // console.log('ruleNames --', ctx.getRuleContext().parser.ruleNames[ctx.ruleIndex])
    const row = this.policyRows[this.activeRowIndex]
    row['highlightMap']['authorization'].push(ctx.getChild(0).getText())

    super.visitState_description(ctx)
  }

  visitEvent(ctx) {
    super.visitEvent(ctx)
  }


  visitExpression_call(ctx) {
    super.visitExpression_call(ctx)
  }
}

var ruleName_to_functionName = (ruleName) => {
  return 'visit' + ruleName.charAt(0).toUpperCase() + ruleName.slice(1);
}


event_def
  .filter(event => event.singleton)
  .forEach((event, i) => {
    let ruleName = event['RuleName']
    let fnName =  'visit' + ruleName.charAt(0).toUpperCase() + ruleName.slice(1)

    BeautifyGenerator.prototype[fnName] = function (ctx){
      const row = this.policyRows[this.activeRowIndex]
      row['highlightMap']['events'][ruleName] = this.getFullRowString(ctx)
    }
  })

exports.BeautifyGenerator = BeautifyGenerator
