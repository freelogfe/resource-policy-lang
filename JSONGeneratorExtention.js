
var extend = function() {
  let _ = require('underscore');
  let nextIndent = " ";

  //排列
  permute.permArr = [];
  permute.usedChars = [];
  function permute(input) {
    var i, ch;
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

  function addIndent() {
      _.each(_.range(this.indentLevel), ()=>{
          nextIndent += " ";
      });
  };
  function deleteIndent() {
      nextIndent= nextIndent.slice(0, Number('-'+this.indentLevel));
  };
  //父级节点名称
  function getParentCtxName( ctx ) {
      return ctx.parentCtx.constructor.name;
  };
  //随机的中间态名称
  function genRandomStateName() {
      return (new Date * Math.random()).toString(36).substring(0,8)
  };



  this.result = [];
  this.policy_segments = [];
  this.duration = {
    start_date: null,
    end_date: null,
    start_hour: null,
    end_hour: null
  };

  // Enter a parse tree produced by policyParser#p.
  this.enterP = function(ctx) {
  };
  // Exit a parse tree produced by policyParser#p.
  this.exitP = function(ctx) {
  };


  // Enter a parse tree produced by policyParser#duration.
  this.enterDuration = function(ctx) {
      this.duration.start_date = ctx.DATE()[0].getText();
      this.duration.end_date = ctx.DATE()[1].getText();
      //合约时间
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };
  // Exit a parse tree produced by policyParser#duration.
  this.exitDuration = function(ctx) {
      this.terminated_event  = {
          type: 'terminated',
          params : [this.duration.end_date, this.duration.end_hour]
      }
  };
  // Enter a parse tree produced by policyParser#start_hour.
  this.enterStart_hour = function(ctx) {
      this.duration.start_hour = ctx.getText();
  };

  // Exit a parse tree produced by policyParser#start_hour.
  this.exitStart_hour = function(ctx) {
  };


  // Enter a parse tree produced by policyParser#end_hour.
  this.enterEnd_hour = function(ctx) {
      this.duration.end_hour = ctx.getText();
  };

  // Exit a parse tree produced by policyParser#end_hour.
  this.exitEnd_hour = function(ctx) {
  };
  // Enter a parse tree produced by policyParser#segment.
  this.enterSegment = function(ctx) {

      //对应一个segment
      ctx.segment_block = {
          users : [], //暂时只有两种user，个人的和组的
          states : [],
          all_occured_states: [],
          state_transition_table: []
      };
      this.result.push('\n')
      this.result.push('For');
  };

  // Exit a parse tree produced by policyParser#segment.
  this.exitSegment = function(ctx) {
      deleteIndent();
      //加入终止事件
      _.each(ctx.segment_block.all_occured_states, (state) => {
          ctx.segment_block.state_transition_table.push({
              current_state : state,
              event : this.terminated_event,
              next_state: 'terminated_state'
          });
      });
      //有多个segment
      this.policy_segments.push(ctx.segment_block);
  };


  // Enter a parse tree produced by policyParser#audience_clause.
  this.enterAudience_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;


  };
  // Exit a parse tree produced by policyParser#audience_clause.
  this.exitAudience_clause = function(ctx) {
      ctx.parentCtx.segment_block = ctx.segment_block;



      this.result.push(':');
      addIndent.apply(this);
      this.result.push(nextIndent);
  };

  // Enter a parse tree produced by policyParser#audience_individuals_clause.
  this.enterAudience_individuals_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;
      ctx.userObj = {};
      ctx.userObj.userType = 'individuals';
  };

  // Exit a parse tree produced by policyParser#audience_individuals_clause.
  this.exitAudience_individuals_clause = function(ctx) {
      ctx.segment_block.users.push(ctx.userObj);
      ctx.parentCtx.segment_block = ctx.segment_block;

  };


  // Enter a parse tree produced by policyParser#audience_groups_clause.
  this.enterAudience_groups_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;
      ctx.userObj = {};
      ctx.userObj.userType = 'groups';
  };

  // Exit a parse tree produced by policyParser#audience_groups_clause.
  this.exitAudience_groups_clause = function(ctx) {
      ctx.segment_block.users.push(ctx.userObj);
      ctx.parentCtx.segment_block = ctx.segment_block;
  };


  // Enter a parse tree produced by policyParser#state_clause.
  this.enterState_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;
      this.result.push('\n');
      this.result.push(nextIndent);
  };

  // Exit a parse tree produced by policyParser#state_clause.
  this.exitState_clause = function(ctx) {
      ctx.parentCtx.segment_block = ctx.segment_block;
  };


  // Enter a parse tree produced by policyParser#current_state_clause.
  this.enterCurrent_state_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
      ctx.segment_block.states.push(ctx.ID().getText());
      ctx.segment_block.all_occured_states.push(ctx.ID().getText());
      ctx.segment_block.all_occured_states = _.uniq(ctx.segment_block.all_occured_states);
  };

  // Exit a parse tree produced by policyParser#current_state_clause.
  this.exitCurrent_state_clause = function(ctx) {
      ctx.parentCtx.segment_block = ctx.segment_block;
  };


  // Enter a parse tree produced by policyParser#target_clause.
  this.enterTarget_clause = function(ctx) {
      ctx.segment_block = ctx.parentCtx.segment_block;

      //重置state
      ctx.current_state = ctx.parentCtx.current_state_clause().ID().getText();
      //next_state
      ctx.next_state = ctx.ID().getText();
      //重置event
      ctx.events = [];
      this.result.push('\n');
      addIndent.apply(this);
      this.result.push(nextIndent);
      this.result = this.result.concat(['proceed to', ctx.ID().getText(), 'on']);
  };

  // Exit a parse tree produced by policyParser#target_clause.
  this.exitTarget_clause = function(ctx) {
      //生成中间状态
      let tempCurrent = ctx.current_state;
      //permute当前events
      _.each( permute(ctx.events), (orderedEvt)=> {
          tempCurrent = ctx.current_state;
          while (orderedEvt.length !=0 ) {
              let randomStateName = genRandomStateName();
              let event = orderedEvt.pop();
              state_transition = {
                  current_state : tempCurrent,
                  event: event,
                  next_state : ctx.next_state
              };
              ctx.segment_block.state_transition_table.push(state_transition);
              if (orderedEvt.length != 0) {
                  state_transition.next_state = randomStateName;
                  tempCurrent = randomStateName;
                  ctx.segment_block.all_occured_states.push(randomStateName);//记录同一个起始state下面所有的target state及中间state
              }
          }
      })

      deleteIndent.apply(this);

      //记录同一个curren_state 下的多个target
      ctx.segment_block.all_occured_states = _.uniq(ctx.segment_block.all_occured_states);
      ctx.parentCtx.segment_block = ctx.segment_block;

  };

  // Enter a parse tree produced by policyParser#accepting.
  this.enterAccepting = function(ctx) {
      this.result.push('accepting');
  };

  // Exit a parse tree produced by policyParser#accepting.
  this.exitAccepting = function(ctx) {
  };

  // Enter a parse tree produced by policyParser#event.
  this.enterEvent = function(ctx) {
      ctx.events = ctx.parentCtx.events;
  };

  // Exit a parse tree produced by policyParser#event.
  this.exitEvent = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#and_event.
  this.enterAnd_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      this.result.push('and');
  };

  // Exit a parse tree produced by policyParser#and_event.
  this.exitAnd_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#time_event.
  this.enterTime_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      // ctx.events.push({
      //     type:'time_event',
      //     params : ctx.getText().split(' ').pop() //取出是year还是day
      // });
      this.result.push(ctx.getText());
  };

  // Exit a parse tree produced by policyParser#time_event.
  this.exitTime_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };
  // Enter a parse tree produced by policyParser#price_event.
  this.enterPrice_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'price_event',
          params : ctx.getText()
      });
      this.result.push('price_event');
  };
  // Exit a parse tree produced by policyParser#price_event.
  this.exitPrice_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };

  // Enter a parse tree produced by policyParser#transaction_event.
  this.enterTransaction_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'transaction_event',
          params : ctx.getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };

  // Exit a parse tree produced by policyParser#transaction_event.
  this.exitTransaction_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };

  // Enter a parse tree produced by policyParser#guaranty_event.
  this.enterGuaranty_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
  };

  // Exit a parse tree produced by policyParser#guaranty_event.
  this.exitGuaranty_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };
  // Enter a parse tree produced by policyParser#contract_guaranty.
  this.enterContract_guaranty = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'guaranty_event',
          params : ctx.getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };

  // Exit a parse tree produced by policyParser#contract_guaranty.
  this.exitContract_guaranty = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#platform_guaranty.
  this.enterPlatform_guaranty = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'transaction_event',
          params : ctx.getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };
  this.exitPlatform_guaranty = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#signing_event.
  this.enterSigning_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'signing_event',
          params : ctx.license_resource_id()[0].getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };

  // Exit a parse tree produced by policyParser#signing_event.
  this.exitSigning_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };

  // Enter a parse tree produced by policyParser#settlement_event.
  this.enterSettlement_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'settlement_event',
          params : ctx.getText()
      });
      this.result.push('account_settled');
  };

  // Exit a parse tree produced by policyParser#settlement_event.
  this.exitSettlement_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#access_count_event.
  this.enterAccess_count_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'access_count_event',
          params : ctx.getText()
      });
  };

  // Exit a parse tree produced by policyParser#access_count_event.
  this.exitAccess_count_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };
  // Enter a parse tree produced by policyParser#visit_increment_event.
  this.enterVisit_increment_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };

  // Exit a parse tree produced by policyParser#visit_increment_event.
  this.exitVisit_increment_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#visit_event.
  this.enterVisit_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };
  this.exitVisit_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };

  this.enterBalance_event = function(ctx) {
      ctx.events = ctx.parentCtx.events;
  };

  // Exit a parse tree produced by policyParser#balance_event.
  this.exitBalance_event = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };

  // Enter a parse tree produced by policyParser#balance_greater.
  this.enterBalance_greater = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'balance_smaller_event',
          params : ctx.getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };

  // Exit a parse tree produced by policyParser#balance_greater.
  this.exitBalance_greater = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };


  // Enter a parse tree produced by policyParser#balance_smaller.
  this.enterBalance_smaller = function(ctx) {
      ctx.events = ctx.parentCtx.events;
      ctx.events.push({
          type:'balance_greater_event',
          params : ctx.getText()
      });
      _.map(ctx.children , ( child )=> {
          this.result.push(child.getText());
      });
  };
  this.exitBalance_smaller = function(ctx) {
      ctx.parentCtx.events = ctx.events;
  };
  // Enter a parse tree produced by policyParser#time_unit.
  this.enterTime_unit = function(ctx) {
  };

  // Exit a parse tree produced by policyParser#time_unit.
  this.exitTime_unit = function(ctx) {
  };


  // Enter a parse tree produced by policyParser#state.
  this.enterState = function(ctx) {
  };

  // Exit a parse tree produced by policyParser#state.
  this.exitState = function(ctx) {
  };


  // Enter a parse tree produced by policyParser#license_resource_id.
  this.enterLicense_resource_id = function(ctx) {
  };

  // Exit a parse tree produced by policyParser#license_resource_id.
  this.exitLicense_resource_id = function(ctx) {
  };


  // Enter a parse tree produced by policyParser#users.
  this.enterUsers = function(ctx) {
      //继承
      ctx.userObj = ctx.parentCtx.userObj;
      //新增users
      ctx.userObj.users = ctx.userObj.users || [];
      for(var i=0;i<ctx.getChildCount();i++) {
          if(ctx.getChild(i).getText() != ',') {
              //修改
              ctx.userObj.users.push(ctx.getChild(i).getText());
          }
          this.result.push(ctx.getChild(i).getText());
      }
  };

  // Exit a parse tree produced by policyParser#users.
  this.exitUsers = function(ctx) {
      //回传
      ctx.parentCtx.userObj = ctx.userObj ;
  };


  // Enter a parse tree produced by policyParser#user_groups.
  this.enterUser_groups = function(ctx) {
      this.result.push('users in');
      //继承
      ctx.userObj = ctx.parentCtx.userObj;
      //新增users
      ctx.userObj.users = ctx.userObj.users || [];
      for(var i=0;i<ctx.getChildCount();i++) {
          if(ctx.getChild(i).getText() != ',') {
              ctx.userObj.users.push(ctx.getChild(i).getText());
          }
          this.result.push(ctx.getChild(i).getText());
      }

  };

  // Exit a parse tree produced by policyParser#user_groups.
  this.exitUser_groups = function(ctx) {
      //回传
      ctx.parentCtx.userObj = ctx.userObj ;
  };


  // Enter a parse tree produced by policyParser#and.
  this.enterAnd = function(ctx) {
  };

  // Exit a parse tree produced by policyParser#and.
  this.exitAnd = function(ctx) {
  };
};

module.exports = {
  'extend':extend
};
