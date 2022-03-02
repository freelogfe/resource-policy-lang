const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [{
    "fromState": null,
    "toState": "initial",
    "time": "2022-03-0116:27:30",
    "event": null,
    "isFirst": true
}, {
    "fromState": "initial",
    "toState": "auth",
    "time": "2022-03-0116:27:30",
    "event": {
        "toState": "auth",
        "service": "freelog",
        "name": "TransactionEvent",
        "args": {
            "amount": 10,
            "account": "self.account"
        },
        "code": "S201",
        "isSingleton": true,
        "eventId": "96a4ce342afe4f87a642c818e24535c6"
    }
}, {
    "fromState": "auth",
    "toState": "finish",
    "time": "2022-03-0116:27:30",
    "event": {
        "toState": "finish",
        "service": "freelog",
        "name": "TransactionEvent",
        "args": {
            "amount": 10,
            "account": "self.account"
        },
        "code": "S201",
        "isSingleton": true,
        "eventId": "658669ede0394758b4713094dd153f14"
    },
    "isLast": true
}]);
console.log(result.content);
