const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [
    {
        state: "initial",
        time: "2021-MM-DD HH:MM:SS",
        event: null
    }
]);
console.log(result.content);
