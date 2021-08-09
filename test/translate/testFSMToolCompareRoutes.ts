import * as path from "path";
import * as fs from "fs";
import {FSMTool} from "../../src/translate/tools/FSMTool";
import {compareRoutes} from "../../src/translate";

let states = JSON.parse(fs.readFileSync(path.join(__dirname, "../../resources/zhaojn.json")).toString()).states;
let routes = [];
FSMTool.parseRoutes(states, "initial", routes, [])

let states2 = JSON.parse(fs.readFileSync(path.join(__dirname, "../../resources/zhaojn2.json")).toString()).states;
let routes2 = [];
FSMTool.parseRoutes(states2, "initial", routes2, [])

compareRoutes(routes, routes2, {eventArgs: 1, serviceStates: 1});
