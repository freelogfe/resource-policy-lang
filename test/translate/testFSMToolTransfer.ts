const policy_lang = require("../../index");

let states = require("../../resources/zhaojn.json").state_machine.states;
let result = policy_lang.transfer(states, [
    {
        state: "initial",
        time: "2021-MM-DD HH:MM:SS",
        event: {name: "RelativeTimeEvent", args: {elapsed: 1, timeUnit: "week"}, toState: "auth"}
    }, {
        state: "auth",
        time: "2021-MM-DD HH:MM:SS",
        event: {name: "TransactionEvent", args: {amount: 10, account: "self.account"}, toState: "auth_month"}
    }, {
        state: "auth_month",
        time: "2021-MM-DD HH:MM:SS",
        event: {name: "TransactionEvent", args: {amount: 100, account: "self.account"}, toState: "auth_year"}
    }, {
        state: "auth_year",
        time: "2021-MM-DD HH:MM:SS",
        event: {name: "RelativeTimeEvent", args: {elapsed: 1, timeUnit: "year"}, toState: "finish"}
    }, {
        state: "finish",
        time: "2021-MM-DD HH:MM:SS",
        event: null
    }
]);
console.log(result);
