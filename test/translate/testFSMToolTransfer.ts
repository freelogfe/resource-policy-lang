const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [{
        "fromState": null,
        "toState": "initial",
        "time": "2022-03-0116:27:30",
        "event": null,
        "isLast": true
    }], {
        "auth000.TransactionEvent => auth_month": "支付${s1.TransactionEvent[0].amount}枚羽币，将get到${s2.RelativeTimeEvent.elapsed}${s2.RelativeTimeEvent.timeUnit}的授权"
    }
);
console.log(JSON.stringify(result, null, 4));
