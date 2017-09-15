
exports.extendModule = function(JSONGenerator) {
    JSONGenerator.prototype.constructor = JSONGenerator;
    let _ = require('underscore');
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
    //父级节点名称
    function getParentCtxName( ctx ) {
        return ctx.parentCtx.constructor.name;
    }
    //随机的中间态名称
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
JSONGenerator.prototype.exitSegment = function(ctx) {
    deleteIndent();
    //加入终止事件
    _.each(ctx.segment_block.all_occured_states, (state) => {
        ctx.segment_block.state_transition_table.push({
            current_state : state,
            event : this.terminated_event,
            next_state: 'terminated_state'
        })
    })
    //有多个segment
    this.policy_segments.push(ctx.segment_block);
};


// Enter a parse tree produced by policyParser#audience_clause.
JSONGenerator.prototype.enterAudience_clause = function(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;


};
// Exit a parse tree produced by policyParser#audience_clause.
JSONGenerator.prototype.exitAudience_clause = function(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;



    this.result.push(':');
    addIndent.apply(this);
    this.result.push(nextIndent);
};

// Enter a parse tree produced by policyParser#audience_individuals_clause.
JSONGenerator.prototype.enterAudience_individuals_clause = function(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    ctx.userObj = {};
    ctx.userObj.userType = 'individuals';
};

// Exit a parse tree produced by policyParser#audience_individuals_clause.
JSONGenerator.prototype.exitAudience_individuals_clause = function(ctx) {
    ctx.segment_block.users.push(ctx.userObj);
    ctx.parentCtx.segment_block = ctx.segment_block;

};


// Enter a parse tree produced by policyParser#audience_groups_clause.
JSONGenerator.prototype.enterAudience_groups_clause = function(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    ctx.userObj = {};
    ctx.userObj.userType = 'groups';
};

// Exit a parse tree produced by policyParser#audience_groups_clause.
JSONGenerator.prototype.exitAudience_groups_clause = function(ctx) {
    ctx.segment_block.users.push(ctx.userObj);
    ctx.parentCtx.segment_block = ctx.segment_block;
};


// Enter a parse tree produced by policyParser#state_clause.
JSONGenerator.prototype.enterState_clause = function(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    this.result.push('\n');
    this.result.push(nextIndent);
};

// Exit a parse tree produced by policyParser#state_clause.
JSONGenerator.prototype.exitState_clause = function(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;
};


// Enter a parse tree produced by policyParser#current_state_clause.
JSONGenerator.prototype.enterCurrent_state_clause = function(ctx) {
    ctx.segment_block = ctx.parentCtx.segment_block;
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
    ctx.segment_block.states.push(ctx.ID().getText());
    ctx.segment_block.all_occured_states.push(ctx.ID().getText());
    ctx.segment_block.all_occured_states = _.uniq(ctx.segment_block.all_occured_states);
};

// Exit a parse tree produced by policyParser#current_state_clause.
JSONGenerator.prototype.exitCurrent_state_clause = function(ctx) {
    ctx.parentCtx.segment_block = ctx.segment_block;
};


// Enter a parse tree produced by policyParser#target_clause.
JSONGenerator.prototype.enterTarget_clause = function(ctx) {
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
JSONGenerator.prototype.exitTarget_clause = function(ctx) {
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
JSONGenerator.prototype.enterAccepting = function(ctx) {
    this.result.push('accepting');
};

// Exit a parse tree produced by policyParser#accepting.
JSONGenerator.prototype.exitAccepting = function(ctx) {
};

// Enter a parse tree produced by policyParser#event.
JSONGenerator.prototype.enterEvent = function(ctx) {
    ctx.events = ctx.parentCtx.events;
};

// Exit a parse tree produced by policyParser#event.
JSONGenerator.prototype.exitEvent = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#and_event.
JSONGenerator.prototype.enterAnd_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    this.result.push('and');
};

// Exit a parse tree produced by policyParser#and_event.
JSONGenerator.prototype.exitAnd_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#time_event.
JSONGenerator.prototype.enterTime_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    // ctx.events.push({
    //     type:'time_event',
    //     params : ctx.getText().split(' ').pop() //取出是year还是day
    // });
    this.result.push(ctx.getText());
};

// Exit a parse tree produced by policyParser#time_event.
JSONGenerator.prototype.exitTime_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};
// Enter a parse tree produced by policyParser#price_event.
JSONGenerator.prototype.enterPrice_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
        type:'price_event',
        params : ctx.getText()
    });
    this.result.push('price_event');
};
// Exit a parse tree produced by policyParser#price_event.
JSONGenerator.prototype.exitPrice_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};

// Enter a parse tree produced by policyParser#transaction_event.
JSONGenerator.prototype.enterTransaction_event = function(ctx) {
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
JSONGenerator.prototype.exitTransaction_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};

// Enter a parse tree produced by policyParser#guaranty_event.
JSONGenerator.prototype.enterGuaranty_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
};

// Exit a parse tree produced by policyParser#guaranty_event.
JSONGenerator.prototype.exitGuaranty_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};
// Enter a parse tree produced by policyParser#contract_guaranty.
JSONGenerator.prototype.enterContract_guaranty = function(ctx) {
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
JSONGenerator.prototype.exitContract_guaranty = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#platform_guaranty.
JSONGenerator.prototype.enterPlatform_guaranty = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
        type:'transaction_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};
JSONGenerator.prototype.exitPlatform_guaranty = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#signing_event.
JSONGenerator.prototype.enterSigning_event = function(ctx) {
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
JSONGenerator.prototype.exitSigning_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};

// Enter a parse tree produced by policyParser#settlement_event.
JSONGenerator.prototype.enterSettlement_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
        type:'settlement_event',
        params : ctx.getText()
    });
    this.result.push('account_settled');
};

// Exit a parse tree produced by policyParser#settlement_event.
JSONGenerator.prototype.exitSettlement_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#access_count_event.
JSONGenerator.prototype.enterAccess_count_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
        type:'access_count_event',
        params : ctx.getText()
    });
};

// Exit a parse tree produced by policyParser#access_count_event.
JSONGenerator.prototype.exitAccess_count_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};
// Enter a parse tree produced by policyParser#visit_increment_event.
JSONGenerator.prototype.enterVisit_increment_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};

// Exit a parse tree produced by policyParser#visit_increment_event.
JSONGenerator.prototype.exitVisit_increment_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#visit_event.
JSONGenerator.prototype.enterVisit_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};
JSONGenerator.prototype.exitVisit_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};

JSONGenerator.prototype.enterBalance_event = function(ctx) {
    ctx.events = ctx.parentCtx.events;
};

// Exit a parse tree produced by policyParser#balance_event.
JSONGenerator.prototype.exitBalance_event = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};

// Enter a parse tree produced by policyParser#balance_greater.
JSONGenerator.prototype.enterBalance_greater = function(ctx) {
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
JSONGenerator.prototype.exitBalance_greater = function(ctx) {
    ctx.parentCtx.events = ctx.events;
};


// Enter a parse tree produced by policyParser#balance_smaller.
JSONGenerator.prototype.enterBalance_smaller = function(ctx) {
    ctx.events = ctx.parentCtx.events;
    ctx.events.push({
        type:'balance_greater_event',
        params : ctx.getText()
    });
    _.map(ctx.children , ( child )=> {
        this.result.push(child.getText());
    });
};
JSONGenerator.prototype.exitBalance_smaller = function(ctx) {
    ctx.parentCtx.events = ctx.events;
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
JSONGenerator.prototype.exitUsers = function(ctx) {
    //回传
    ctx.parentCtx.userObj = ctx.userObj ;
};


// Enter a parse tree produced by policyParser#user_groups.
JSONGenerator.prototype.enterUser_groups = function(ctx) {
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
JSONGenerator.prototype.exitUser_groups = function(ctx) {
    //回传
    ctx.parentCtx.userObj = ctx.userObj ;
};


// Enter a parse tree produced by policyParser#and.
JSONGenerator.prototype.enterAnd = function(ctx) {
};

// Exit a parse tree produced by policyParser#and.
JSONGenerator.prototype.exitAnd = function(ctx) {
};
}
