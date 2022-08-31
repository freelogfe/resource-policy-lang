const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [{
        "fromState": null,
        "toState": "initial",
        "time": "2022-03-0116:27:30",
        "event": null
    }, {
        "fromState": "initial",
        "toState": "auth000",
        "time": "2022-03-0116:27:31",
        "event": {
            "name": "RelativeTimeEvent",
            "args": {"elapsed": 1, "timeUnit": "week"},
            "toState": "auth000"
        },
        "isLast": true
    }, {
        "fromState": "auth000",
        "toState": "auth_month2",
        "time": "2022-03-0116:27:31",
        "event": {
            "name": "TransactionEvent",
            "args": {"amount": 10, "account": "self.account"},
            "toState": "auth_month2"
        }
    }, {
        "fromState": "auth_month2",
        "toState": "finish",
        "time": "2022-03-0116:27:32",
        "event": {
            "name": "RelativeTimeEvent",
            "args": {"elapsed": 1, "timeUnit": "month"},
            "toState": "finish"
        }
    }], {
        "auth000.TransactionEvent => auth_month2": "支付${s1.TransactionEvent[0].amount}枚羽币，将get到${s2.RelativeTimeEvent.elapsed}${s2.RelativeTimeEvent.timeUnit}的授权"
    }
);
console.log(result);
