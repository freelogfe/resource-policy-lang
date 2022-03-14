const policy_lang = require("../../index");

let state_machine = require("../../resources/zhaojn.json").state_machine;
let result = policy_lang.report(state_machine);
console.log(JSON.stringify(result, null, 4));
