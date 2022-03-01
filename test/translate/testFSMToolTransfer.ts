const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [
    {
        state: "auth",
        fromState: "initial",
        toState: "auth_month",
        time: "2022-03-02 00:00:00",
        event: {
            "toState": "auth_month",
            "service": "freelog",
            "name": "TransactionEvent",
            "args": {
                "amount": 10,
                "account": "self.account"
            },
            "code": "S201",
            "description": "one time transaction",
            "isSingleton": true
        }
    }, {
        state: "auth_month",
        fromState: "auth",
        toState: "auth_year",
        time: "2022-03-03 00:00:00",
        event: {
            "toState": "auth_year",
            "service": "freelog",
            "name": "TransactionEvent",
            "args": {
                "amount": 100,
                "account": "self.account"
            },
            "code": "S201",
            "description": "one time transaction",
            "isSingleton": true
        }
    }, {
        state: "auth_year",
        fromState: "auth_month",
        toState: null,
        time: "2022-03-03 00:00:00",
        event: {
            "toState": "finish",
            "service": "freelog",
            "name": "RelativeTimeEvent",
            "args": {
                "elapsed": 1,
                "timeUnit": "year"
            },
            "code": "A103",
            "description": "fired when certain amount of time elapsed",
            "isSingleton": false
        }
    }
]);
console.log(result.content);
