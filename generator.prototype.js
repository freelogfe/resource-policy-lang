
exports.extendModule = function(JSONGenerator) {

    let _ = require('underscore');
    let users =[]; //代表用户
    let first_state = false;
    let states = [];//所有状态
    let initial_state;//初始状态
    let state_transition_table;//储存 转换方程的数组
    let state_transition;//转换方程
    let current_state;//转换方程的当前状态
    let next_state;//转换方程的目标状态
    let segment_block;//一个segment
    let events = [];
    let occured_states = []; //记录已经出现的state
    //缩进
    let nextIndent = " ";
    function addIndent() {
        _.each(_.range(this.indentLevel), ()=>{
            nextIndent += " ";
        });
    }
    function deleteIndent() {
        nextIndent= nextIndent.slice(0, Number('-'+this.indentLevel));
    }
    function getParentCtxName( ctx ) {
        return ctx.parentCtx.constructor.name;
    }
    function genRandomStateName() {
        return (new Date * Math.random()).toString(36).substring(0,8)
    }
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




// Enter a parse tree produced by policyParser#p.
JSONGenerator.prototype.enterP = function(ctx) {
};
// Exit a parse tree produced by policyParser#p.
JSONGenerator.prototype.exitP = function(ctx) {
};


// Enter a parse tree produced by policyParser#duration.
JSONGenerator.prototype.enterDuration = function(ctx) {
    this.duration.start_date = ctx.DATE()[0].getText();
    this.duration.end_date = ctx.DATE()[1].getText();
    //合约时间
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};
// Exit a parse tree produced by policyParser#duration.
JSONGenerator.prototype.exitDuration = function(ctx) {
    this.terminated_event  = {
        type: 'terminated',
        params : [this.duration.end_date, this.duration.end_hour]
    }
};
// Enter a parse tree produced by policyParser#start_hour.
JSONGenerator.prototype.enterStart_hour = function(ctx) {
    this.duration.start_hour = ctx.getText();
};

// Exit a parse tree produced by policyParser#start_hour.
JSONGenerator.prototype.exitStart_hour = function(ctx) {
};


// Enter a parse tree produced by policyParser#end_hour.
JSONGenerator.prototype.enterEnd_hour = function(ctx) {
    this.duration.end_hour = ctx.getText();
};

// Exit a parse tree produced by policyParser#end_hour.
JSONGenerator.prototype.exitEnd_hour = function(ctx) {
};
// Enter a parse tree produced by policyParser#segment.
JSONGenerator.prototype.enterSegment = function(ctx) {
    //初始化
    state_transition_table = [];
    states = [];
    //对应一个segment
    segment_block = {
        users : [], //暂时只有两种user，个人的和组的
        initial_state: null,
        states : null,
        state_transition_table: null
    };
    this.result.push('\n')
    this.result.push('For');
};

// Exit a parse tree produced by policyParser#segment.
JSONGenerator.prototype.exitSegment = function(ctx) {
    //离开segment的时候把东西放进segment_block
    segment_block.state_transition_table = state_transition_table;
    segment_block.states = states;
    //重置初始state
    first_state = false;
    //有多个segment
    this.policy_segments.push(segment_block);
    deleteIndent();
    //加入终止事件
    _.each(occured_states, (state) => {
        state_transition_table.push({
            current_state : state,
            event : this.terminated_event,
            next_state: 'terminated_state'
        })
    })
    //清空
    occured_states = [];

};


// Enter a parse tree produced by policyParser#audience_clause.
JSONGenerator.prototype.enterAudience_clause = function(ctx) {
};
// Exit a parse tree produced by policyParser#audience_clause.
JSONGenerator.prototype.exitAudience_clause = function(ctx) {
    this.result.push(':');
    addIndent.apply(this);
    this.result.push(nextIndent);
};

// Enter a parse tree produced by policyParser#audience_individuals_clause.
JSONGenerator.prototype.enterAudience_individuals_clause = function(ctx) {
    userObj = {};
    userObj.userType = 'individuals';
};

// Exit a parse tree produced by policyParser#audience_individuals_clause.
JSONGenerator.prototype.exitAudience_individuals_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#audience_groups_clause.
JSONGenerator.prototype.enterAudience_groups_clause = function(ctx) {
    userObj = {};
    userObj.userType = 'groups';
};

// Exit a parse tree produced by policyParser#audience_groups_clause.
JSONGenerator.prototype.exitAudience_groups_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#state_clause.
JSONGenerator.prototype.enterState_clause = function(ctx) {
    this.result.push('\n');
    this.result.push(nextIndent);
};

// Exit a parse tree produced by policyParser#state_clause.
JSONGenerator.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#current_state_clause.
JSONGenerator.prototype.enterCurrent_state_clause = function(ctx) {
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
    states.push(ctx.ID().getText());
    occured_states.push(ctx.ID().getText());
    occured_states = _.uniq(occured_states);
};

// Exit a parse tree produced by policyParser#current_state_clause.
JSONGenerator.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by policyParser#target_clause.
JSONGenerator.prototype.enterTarget_clause = function(ctx) {
    //重置state
    current_state = ctx.parentCtx.current_state_clause().ID().getText();
    //next_state
    next_state = ctx.ID().getText();
    //重置event
    events = [];
    this.result.push('\n');
    addIndent.apply(this);
    this.result.push(nextIndent);
    this.result = this.result.concat(['proceed to', ctx.ID().getText(), 'on']);
};

// Exit a parse tree produced by policyParser#target_clause.
JSONGenerator.prototype.exitTarget_clause = function(ctx) {
    //生成中间状态
    let tempCurrent = current_state;
    //permute当前events
    _.each( permute(events), (orderedEvt)=> {
        tempCurrent = current_state;
        while (orderedEvt.length !=0 ) {
            let randomStateName = genRandomStateName();
            let event = orderedEvt.pop();
            state_transition = {
                current_state : tempCurrent,
                event: event,
                next_state : next_state
            };
            state_transition_table.push(state_transition);
            if (orderedEvt.length != 0) {
                state_transition.next_state = randomStateName;
                tempCurrent = randomStateName;
                occured_states.push(randomStateName);//记录同一个起始state下面所有的target state及中间state
            }
        }
    })

    deleteIndent.apply(this);

    //记录同一个curren_state 下的多个target
    occured_states = _.uniq(occured_states);

};

// Enter a parse tree produced by policyParser#accepting.
JSONGenerator.prototype.enterAccepting = function(ctx) {
    this.result.push('accepting');
};

// Exit a parse tree produced by policyParser#accepting.
JSONGenerator.prototype.exitAccepting = function(ctx) {
};

// Enter a parse tree produced by policyParser#event.
JSONGenerator.prototype.enterEvent = function(ctx) {
    // events.push(ctx.getText());
};

// Exit a parse tree produced by policyParser#event.
JSONGenerator.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by policyParser#and_event.
JSONGenerator.prototype.enterAnd_event = function(ctx) {
    this.result.push('and')
};

// Exit a parse tree produced by policyParser#and_event.
JSONGenerator.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#time_event.
JSONGenerator.prototype.enterTime_event = function(ctx) {
    events.push({
        type:'time_event',
        params : ctx.getText().split(' ').pop() //取出是year还是day
    });
    this.result.push(ctx.getText());
};

// Exit a parse tree produced by policyParser#time_event.
JSONGenerator.prototype.exitTime_event = function(ctx) {
};
// Enter a parse tree produced by policyParser#price_event.
JSONGenerator.prototype.enterPrice_event = function(ctx) {
    events.push({
        type:'price_event',
        params : ctx.getText()
    });
    this.result.push('price_event');
};
// Exit a parse tree produced by policyParser#price_event.
JSONGenerator.prototype.exitPrice_event = function(ctx) {
};

// Enter a parse tree produced by policyParser#transaction_event.
JSONGenerator.prototype.enterTransaction_event = function(ctx) {
    events.push({
        type:'transaction_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#transaction_event.
JSONGenerator.prototype.exitTransaction_event = function(ctx) {
};

// Enter a parse tree produced by policyParser#guaranty_event.
JSONGenerator.prototype.enterGuaranty_event = function(ctx) {
    // this.result.push(ctx.getText());
};

// Exit a parse tree produced by policyParser#guaranty_event.
JSONGenerator.prototype.exitGuaranty_event = function(ctx) {
};
// Enter a parse tree produced by policyParser#contract_guaranty.
JSONGenerator.prototype.enterContract_guaranty = function(ctx) {
    events.push({
        type:'guaranty_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#contract_guaranty.
JSONGenerator.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by policyParser#platform_guaranty.
JSONGenerator.prototype.enterPlatform_guaranty = function(ctx) {
    events.push({
        type:'transaction_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#platform_guaranty.
JSONGenerator.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by policyParser#signing_event.
JSONGenerator.prototype.enterSigning_event = function(ctx) {
    events.push({
        type:'signing_event',
        params : ctx.license_resource_id()[0].getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#signing_event.
JSONGenerator.prototype.exitSigning_event = function(ctx) {
};

// Enter a parse tree produced by policyParser#settlement_event.
JSONGenerator.prototype.enterSettlement_event = function(ctx) {
    events.push({
        type:'settlement_event',
        params : ctx.getText()
    });
    this.result.push('account_settled');
};

// Exit a parse tree produced by policyParser#settlement_event.
JSONGenerator.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by policyParser#access_count_event.
JSONGenerator.prototype.enterAccess_count_event = function(ctx) {
    events.push({
        type:'access_count_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#access_count_event.
JSONGenerator.prototype.exitAccess_count_event = function(ctx) {
};


JSONGenerator.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by policyParser#balance_event.
JSONGenerator.prototype.exitBalance_event = function(ctx) {
};

// Enter a parse tree produced by policyParser#balance_greater.
JSONGenerator.prototype.enterBalance_greater = function(ctx) {
    events.push({
        type:'balance_smaller_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#balance_greater.
JSONGenerator.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by policyParser#balance_smaller.
JSONGenerator.prototype.enterBalance_smaller = function(ctx) {
    events.push({
        type:'balance_greater_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#balance_smaller.
JSONGenerator.prototype.exitBalance_smaller = function(ctx) {
};
// Enter a parse tree produced by policyParser#time_unit.
JSONGenerator.prototype.enterTime_unit = function(ctx) {
};

// Exit a parse tree produced by policyParser#time_unit.
JSONGenerator.prototype.exitTime_unit = function(ctx) {
};


// Enter a parse tree produced by policyParser#state.
JSONGenerator.prototype.enterState = function(ctx) {
};

// Exit a parse tree produced by policyParser#state.
JSONGenerator.prototype.exitState = function(ctx) {
};


// Enter a parse tree produced by policyParser#license_resource_id.
JSONGenerator.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by policyParser#license_resource_id.
JSONGenerator.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by policyParser#users.
JSONGenerator.prototype.enterUsers = function(ctx) {
    //get users name
    userObj.users = userObj.users || [];
    for(var i=0;i<ctx.getChildCount();i++) {
        if(ctx.getChild(i).getText() != ',') {
            userObj.users.push(ctx.getChild(i).getText());
        }
        this.result.push(ctx.getChild(i).getText());
    }
    segment_block.users.push(userObj);
};

// Exit a parse tree produced by policyParser#users.
JSONGenerator.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by policyParser#user_groups.
JSONGenerator.prototype.enterUser_groups = function(ctx) {
    this.result.push('users in');
    //get users name
    userObj.users = userObj.users || [];
    for(var i=0;i<ctx.getChildCount();i++) {
        if(ctx.getChild(i).getText() != ',') {
            userObj.users.push(ctx.getChild(i).getText());
        }
        this.result.push(ctx.getChild(i).getText());
    }
    segment_block.users.push(userObj);
};

// Exit a parse tree produced by policyParser#user_groups.
JSONGenerator.prototype.exitUser_groups = function(ctx) {
};


// Enter a parse tree produced by policyParser#and.
JSONGenerator.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by policyParser#and.
JSONGenerator.prototype.exitAnd = function(ctx) {
};
}
