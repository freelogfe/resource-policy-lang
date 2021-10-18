import {FSMTool} from "../../src/translate/tools/FSMTool";
import {compareRoutes} from "../../src/translate";

let states = require("../../resources/zhaojn.json").state_machine.states;
let routes = [];
FSMTool.parseRoutes(states, "initial", routes, []);

let states2 = require("../../resources/zhaojn2.json").state_machine.states;
let routes2 = [];
FSMTool.parseRoutes(states2, "initial", routes2, []);

compareRoutes(routes, routes2, {eventArgs: 1, serviceStates: 1});
