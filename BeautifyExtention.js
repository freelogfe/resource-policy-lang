const policyListener = require('./gen/policyListener').policyListener;
let _ = require('underscore');
let indentLevel = 2

class Beautify extends policyListener {
  constructor() {
    super();
    this.result = [];
    this._nextIndent = ' ';
  }
  addIndent() {
    _.each(_.range(indentLevel), () => {
      this._nextIndent += " ";
    });
  };
  deleteIndent() {
    this._nextIndent = this._nextIndent.slice(0, Number('-' + indentLevel));
  };
  enterDuration(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  exitDuration(ctx) {};
  enterSegment(ctx) {
    this.result.push('\n')
    this.result.push('For');
  };
  exitSegment(ctx) {
    this.deleteIndent();
  };
  enterAudience_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
  };
  exitAudience_clause(ctx) {
    this.result.push(':');
    this.addIndent();
    this.result.push(this._nextIndent);
  };
  enterState_clause(ctx) {

    this.result.push('\n');
    this.result.push(this._nextIndent);
  };
  enterCurrent_state_clause(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterTarget_clause(ctx) {
    this.result.push('\n');
    this.addIndent();
    this.result.push(this._nextIndent);
    this.result = this.result.concat(['proceed to', ctx.ID().getText(), 'on']);
  };
  exitTarget_clause() {
    this.deleteIndent();
  }
  enterAccepting(ctx) {
    this.result.push('accepting');
  };
  enterAnd_event(ctx) {
    this.result.push('and');
  };
  enterTime_event(ctx) {
    this.result.push(ctx.getText());
  };
  enterPrice_event(ctx) {
    this.result.push('price_event');
  };
  enterTransaction_event(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterContract_guaranty(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterPlatform_guaranty(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterSigning_event(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterSettlement_event(ctx) {
    this.result.push('account_settled');
  };

  enterVisit_increment_event(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterVisit_event(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterBalance_greater(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterBalance_smaller(ctx) {
    _.map(ctx.children, (child) => {
      this.result.push(child.getText());
    });
  };
  enterUsers(ctx) {
    for (var i = 0; i < ctx.getChildCount(); i++) {
      this.result.push(ctx.getChild(i).getText());
    }
  };
  enterUser_groups(ctx) {
    this.result.push('users in');
    for (var i = 0; i < ctx.getChildCount(); i++) {
      this.result.push(ctx.getChild(i).getText());
    }
  };
};

module.exports = Beautify
