let output = (function ( ) {
    let antlr4 = require('antlr4/index');
    let policyLexer = require('./gen/policyLexer');
    let policyParser = require('./gen/policyParser');
    let policyListener = require('./gen/policyListener').policyListener;
    let _ = require('underscore');
    //重写ErrorListener,储存报错信息
    let ErrorListener = require('antlr4/error/ErrorListener').ConsoleErrorListener;
    let errorMsg;
    ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
        errorMsg = msg;
    };

    let users =[]; //代表用户
    let states = [];//所有状态
    let initial_state;//初始状态
    let state_table;//储存 转换方程的数组
    let state_transition;//转换方程
    let state_stack = [];//只是判断用的
    let current_state;//转换方程的当前状态
    let next_state;//转换方程的目标状态
    let codeBlock;//一个segment
    let events = [];

    //缩进
    let nextIndent = '';
    let JSONGenerator = function(indentLevel) {
      policyListener.call(this);
      this.indentLevel =indentLevel || 4;
      //string result;
      this.result = [];
      //储存每一个segment
      this.codeblockList = [];
      return this;
    };

    function addIndent() {
        _.each(_.range(this.indentLevel), ()=>{
            nextIndent += ' ';
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
    function EventModel () {
        return '123'
    }

    permute.permArr = []
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



    JSONGenerator.prototype = Object.create(policyListener.prototype);
    JSONGenerator.prototype.constructor = JSONGenerator;


    // Enter a parse tree produced by policyParser#p.
    JSONGenerator.prototype.enterP = function(ctx) {
    };

    // Exit a parse tree produced by policyParser#p.
    JSONGenerator.prototype.exitP = function(ctx) {
    };

    // Enter a parse tree produced by policyParser#duration.
    JSONGenerator.prototype.enterDuration = function(ctx) {
        _.map(ctx.children , ( child )=> {
            this.result.push(child.getText());
        });
    };

    // Exit a parse tree produced by policyParser#duration.
    JSONGenerator.prototype.exitDuration = function(ctx) {
    };
    // Enter a parse tree produced by policyParser#segment.
    JSONGenerator.prototype.enterSegment = function(ctx) {
        state_table = [];
        codeBlock = {
            users : [],
            initial_state: null,
            states : null,
            state_table: null
        };
    };

    // Exit a parse tree produced by policyParser#segment.
    JSONGenerator.prototype.exitSegment = function(ctx) {
        codeBlock.state_table = state_table;
        codeBlock.states = states;
        states = [];
        this.codeblockList.push(codeBlock);
    };


    // Enter a parse tree produced by policyParser#audience_clause.
    JSONGenerator.prototype.enterAudience_clause = function(ctx) {

    };

    // Exit a parse tree produced by policyParser#audience_clause.
    JSONGenerator.prototype.exitAudience_clause = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#audience_individuals_clause.
    JSONGenerator.prototype.enterAudience_individuals_clause = function(ctx) {
        userObj = {};
        userObj.userType = 'individuals';

        this.result.push(ctx.USERS().getText());
    };

    // Exit a parse tree produced by policyParser#audience_individuals_clause.
    JSONGenerator.prototype.exitAudience_individuals_clause = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#audience_groups_clause.
    JSONGenerator.prototype.enterAudience_groups_clause = function(ctx) {
        if ( getParentCtxName(ctx) == 'Classified_user_clauseContext' ) {

        } else if ( getParentCtxName(ctx) == 'Audience_clauseContext' ) {
            userObj = {};
            userObj.userType = 'groups';
            userObj.users = userObj.users || [];
            for(var i=0;i<ctx.user_groups()[0].getChildCount();i++) {
                if(ctx.user_groups()[0].getChild(i).getText() != ',') {
                    userObj.users.push(ctx.user_groups()[0].getChild(i).getText());
                }

                this.result.push(ctx.user_groups()[0].getChild(i).getText());
            }
            codeBlock.users.push(userObj);

            this.result.push(ctx.USERGROUPS().getText());
        }

    };

    // Exit a parse tree produced by policyParser#audience_groups_clause.
    JSONGenerator.prototype.exitAudience_groups_clause = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#audience_selfdefinedaudience_clause.
    JSONGenerator.prototype.enterAudience_selfdefinedaudience_clause = function(ctx) {
        userObj = {};
        userObj.userType = 'self';
        codeBlock.users? codeBlock.users.push(userObj):  codeBlock.users=[];
    };

    // Exit a parse tree produced by policyParser#audience_selfdefinedaudience_clause.
    JSONGenerator.prototype.exitAudience_selfdefinedaudience_clause = function(ctx) {
    };

    // Enter a parse tree produced by policyParser#classified_user_clause.
    JSONGenerator.prototype.enterClassified_user_clause = function(ctx) {

        userObj = {};
        userObj.userType = 'classified';
        userObj.users = userObj.users || [];
        for(var i=0;i<ctx.classified_user().length;i++) {
            console.log(ctx.classified_user()[i].getText());
            if ( ctx.classified_user()[i].getText().indexOf(',') == -1) {
                userObj.users.push(ctx.classified_user()[i].getText());
            }
            this.result.push(ctx.classified_user()[i].getText());
        }
        userObj.groups = [];
        for(var i=0;i<ctx.audience_groups_clause().user_groups().length;i++) {
            userObj.groups.push(ctx.audience_groups_clause().user_groups()[i].getText());
            this.result.push(ctx.audience_groups_clause().user_groups()[i].getText());
        }

        codeBlock.users.push(userObj);
    };

    // Exit a parse tree produced by policyParser#classified_user_clause.
    JSONGenerator.prototype.exitClassified_user_clause = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#classified_user.
    JSONGenerator.prototype.enterClassified_user = function(ctx) {
    };

    // Exit a parse tree produced by policyParser#classified_user.
    JSONGenerator.prototype.exitClassified_user = function(ctx) {
    };
    // Enter a parse tree produced by policyParser#state_clause.
    JSONGenerator.prototype.enterState_clause = function(ctx) {

    };

    // Exit a parse tree produced by policyParser#state_clause.
    JSONGenerator.prototype.exitState_clause = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#current_state_clause.
    JSONGenerator.prototype.enterCurrent_state_clause = function(ctx) {
         states.push(ctx.ID().getText());
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
        events = [];
    };

    // Exit a parse tree produced by policyParser#target_clause.
    JSONGenerator.prototype.exitTarget_clause = function(ctx) {
        // if (state_stack.length == 1) {
        //     state_table.push(state_transition);
        //     state_stack.pop();
        // }
        // state_table.push(state_transition);
        var tempCurrent = current_state;
        _.each( permute(events), (orderedEvt)=> {
            tempCurrent = current_state;
            while (orderedEvt.length !=0 ) {
                var randomStateName = genRandomStateName();
                var event = orderedEvt.pop();
                state_transition = {
                    current_state : tempCurrent,
                    event: event,
                    next_state : next_state

                };
                if (orderedEvt.length != 0) {
                    state_transition.next_state = randomStateName;
                    tempCurrent = randomStateName;
                }
                state_table.push(state_transition);
            }
        })
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
    };

    // Exit a parse tree produced by policyParser#and_event.
    JSONGenerator.prototype.exitAnd_event = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#time_event.
    JSONGenerator.prototype.enterTime_event = function(ctx) {
        events.push({
            type:'time_event',
            params : ctx.getText().split(' ').pop()
        });
    };

    // Exit a parse tree produced by policyParser#time_event.
    JSONGenerator.prototype.exitTime_event = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#signing_event.
    JSONGenerator.prototype.enterSigning_event = function(ctx) {
        events.push({
            type:'signing_event',
            params : ctx.license_resource_id().getText()
        });
    };

    // Exit a parse tree produced by policyParser#signing_event.
    JSONGenerator.prototype.exitSigning_event = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#access_count_event.
    JSONGenerator.prototype.enterAccess_count_event = function(ctx) {
    };

    // Exit a parse tree produced by policyParser#access_count_event.
    JSONGenerator.prototype.exitAccess_count_event = function(ctx) {
    };


    JSONGenerator.prototype.enterBalance_event = function(ctx) {
        events.push({
            type:'balance_event',
            params : ctx.INT().getText()
        });
    };

    // Exit a parse tree produced by policyParser#balance_event.
    JSONGenerator.prototype.exitBalance_event = function(ctx) {
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
        codeBlock.users.push(userObj);
    };

    // Exit a parse tree produced by policyParser#users.
    JSONGenerator.prototype.exitUsers = function(ctx) {
    };


    // Enter a parse tree produced by policyParser#user_groups.
    JSONGenerator.prototype.enterUser_groups = function(ctx) {
        //get usergroups name
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

    return function (text, indentLevel) {
        let chars = new antlr4.InputStream(text);
        let lexer = new policyLexer.policyLexer(chars);
        let tokens  = new antlr4.CommonTokenStream(lexer);
        let parser = new policyParser.policyParser(tokens);

        parser.buildParseTrees = true;
        let tree = parser.p();
        let gen = new JSONGenerator(indentLevel);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(gen, tree);
        if(errorMsg) {
            return errorMsg;
        }
        return gen;
    }
})();

module.exports = output;
