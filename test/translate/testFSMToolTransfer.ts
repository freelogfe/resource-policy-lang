const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [{
    "fromState": null,
    "toState": "initial",
    "time": "2022-03-0116:27:30",
    "event": null,
    "isFirst": true
}]);
console.log(result);
