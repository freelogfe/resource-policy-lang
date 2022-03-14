import {cleanUpRoutes, parseRoutes} from "../../src/translate";

let states = require("../../resources/zhaojn.json").state_machine.states;
let routes = [];
parseRoutes(states, "initial", routes, []);
cleanUpRoutes(routes);
console.log(JSON.stringify(routes, null, 4));
