const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [
        {
            "state": "get_auth",
            "fromState": "initial",
            "toState": "get_auth",
            "isLast": true,
            "time": "2025-11-10 00:00:00",
            "event": {
                "name": "RelativeTimeEvent",
                "args": {
                    "elapsed": 2,
                    "timeUnit": "week"
                },
                "toState": "get_auth"
            }
        }
    ], {}
);
console.log(JSON.stringify(result, null, 4));
