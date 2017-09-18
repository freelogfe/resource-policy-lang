const policyListener = require('./gen/policyListener').policyListener;
let _ = require('underscore');
//排列
permute.permArr = [];
permute.usedChars = [];
function permute(input) {
  let i,
    ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    permute.usedChars.push(ch);
    if (input.length == 0) {
      permute.permArr.push(permute.usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    permute.usedChars.pop();
  }
  return permute.permArr
};
//随机的中间态名称
function genRandomStateName() {
  return (new Date * Math.random()).toString(36).substring(0, 8)
};

class JSONGeneratorExtentionClass extends policyListener {
  constructor() {
    super();
    this.errorMsg = null;
    this.policy_segments = [];
    this.duration = {
      start_date: null,
      end_date: null,
      start_hour: null,
      end_hour: null
    };
  }

  enterP(ctx) {};
  exitP(ctx) {};
  enterDuration(ctx) {
    this.duration.start_date = ctx.DATE()[0].getText();
    this.duration.end_date = ctx.DATE()[1].getText();
  };
  exitDuration(ctx) {
    //合约到期即i一个终止事件
    this.terminated_event = {
      type: 'terminated',
      params: [this.duration.end_date, this.duration.end_hour]
    }
  };
  enterStart_hour(ctx) {
    this.duration.start_hour = ctx.getText();
  };
  exitStart_hour(ctx) {};

  enterEnd_hour(ctx) {
    this.duration.end_hour = ctx.getText();
  };
  exitEnd_hour(ctx) {};

  enterSegment(ctx) {
    //对应一个segment
    ctx.segment_block = {
      users: [], //暂时只有两种user，个人的和组的
      states: [],
      all_occured_states: [],
      state_transition_table: []
    };
  };
  exitSegment(ctx) {
    //针对当前segment所有已经出现的states（all_occured_states）加入终止事件
    _.each(ctx.segment_block.all_occured_states, (state) => {
      ctx.segment_block.state_transition_table.push({current_state: state, event: this.terminated_event, next_state: 'terminated_state'});
    });
    //有多个segment
    this.policy_segments.push(ctx.segment_block);
  };

  enterAudience_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
  };
  exitAudience_clause(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterAudience_individuals_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    ctx.userObj = {};
    ctx.userObj.userType = 'individuals';
  };
  exitAudience_individuals_clause(ctx) {
    ctx.segment_block.users.push(ctx.userObj);
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterAudience_groups_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    ctx.userObj = {};
    ctx.userObj.userType = 'groups';
  };
  exitAudience_groups_clause(ctx) {
    ctx.segment_block.users.push(ctx.userObj);
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterState_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
  };
  exitState_clause(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterCurrent_state_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    ctx.segment_block.states.push(ctx.ID().getText());
    ctx.segment_block.all_occured_states.push(ctx.ID().getText());
    ctx.segment_block.all_occured_states = _.uniq(ctx.segment_block.all_occured_states);
  };
  exitCurrent_state_clause(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterTarget_clause(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    //重置state
    ctx.current_state = ctx.parentCtx.current_state_clause().ID().getText();
    //next_state
    ctx.next_state = ctx.ID().getText();
    //重置event
    ctx.events = [];
  };

  // Exit a parse tree produced by policyParser#target_clause.
  exitTarget_clause(ctx) {
    //生成中间状态
    let tempCurrent = ctx.current_state;
    //permute当前events
    _.each(permute(ctx.events), (orderedEvt) => {
      tempCurrent = ctx.current_state;
      while (orderedEvt.length != 0) {
        let randomStateName = genRandomStateName();
        let event = orderedEvt.pop();
        let state_transition = {
          current_state: tempCurrent,
          event: event,
          next_state: ctx.next_state
        };
        ctx.segment_block.state_transition_table.push(state_transition);
        if (orderedEvt.length != 0) {
          state_transition.next_state = randomStateName;
          tempCurrent = randomStateName;
          ctx.segment_block.all_occured_states.push(randomStateName); //记录同一个起始state下面所有的target state及中间state
        }
      }
    });
    //记录同一个curren_state 下的多个target
    ctx.segment_block.all_occured_states = _.uniq(ctx.segment_block.all_occured_states);
    ctx.parentCtx.segment_block = ctx.segment_block;
  };

  enterEvent(ctx) {
    ctx.events = ctx.parentCtx.events;
  };
  exitEvent(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterAnd_event(ctx) {
    ctx.events = ctx.parentCtx.events;
  };
  exitAnd_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterSettlement_time_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'settlement_event', params: ctx.INT().getText()});
  };
  exitSettlement_time_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterPrice_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'price_event', params: ctx.getText()});
  };
  exitPrice_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterTransaction_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'transaction_event', params: ctx.getText()});
  };
  exitTransaction_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };
  enterSigning_event(ctx) {
    console.log('33333333333333333');
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'license_event', params: ctx.license_resource_id().getText()});
  }
  exitSigning_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  }

  enterGuaranty_event(ctx) {
    ctx.events = ctx.parentCtx.events;
  };
  exitGuaranty_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterContract_guaranty(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'guaranty_event', params: ctx.getText()});
  };
  exitContract_guaranty(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterPlatform_guaranty(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'transaction_event', params: ctx.getText()});
  };
  exitPlatform_guaranty(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterSigning_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
      type: 'signing_event', params: ctx.license_resource_id()[0].getText()
    });
  };
  exitSigning_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterSettlement_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'settlement_event', params: ctx.getText()});
  };
  exitSettlement_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterAccess_count_event(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'access_count_event', params: ctx.getText()});
  };
  exitAccess_count_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterVisit_increment_event(ctx) {
    ctx.events = ctx.parentCtx.events;
  };

  // Exit a parse tree produced by policyParser#visit_increment_event.
  exitVisit_increment_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterVisit_event(ctx) {
    ctx.events = ctx.parentCtx.events;
  };
  exitVisit_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterBalance_event(ctx) {
    ctx.events = ctx.parentCtx.events;
  };
  exitBalance_event(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  // Enter a parse tree produced by policyParser#balance_greater.
  enterBalance_greater(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'balance_smaller_event', params: ctx.getText()});
  };
  exitBalance_greater(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterBalance_smaller(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({type: 'balance_greater_event', params: ctx.getText()});
  };
  exitBalance_smaller(ctx) {
    ctx.parentCtx.events = ctx.events;
  };

  enterTime_unit(ctx) {};
  exitTime_unit(ctx) {};

  enterState(ctx) {};
  exitState(ctx) {};

  enterLicense_resource_id(ctx) {};
  exitLicense_resource_id(ctx) {};

  enterUsers(ctx) {
    //继承
    ctx.userObj = ctx.parentCtx.userObj;
    //新增users
    ctx.userObj.users = ctx.userObj.users || [];
    for (var i = 0; i < ctx.getChildCount(); i++) {
      if (ctx.getChild(i).getText() != ',') {
        //修改
        ctx.userObj.users.push(ctx.getChild(i).getText());
      }
    }
  };
  exitUsers(ctx) {
    //回传
    ctx.parentCtx.userObj = ctx.userObj;
  };

  enterUser_groups(ctx) {
    //继承
    ctx.userObj = ctx.parentCtx.userObj;
    //新增users
    ctx.userObj.users = ctx.userObj.users || [];
    for (var i = 0; i < ctx.getChildCount(); i++) {
      if (ctx.getChild(i).getText() != ',') {
        ctx.userObj.users.push(ctx.getChild(i).getText());
      }
    }
  };
  exitUser_groups(ctx) {
    //回传
    ctx.parentCtx.userObj = ctx.userObj;
  };

};

module.exports = JSONGeneratorExtentionClass;
