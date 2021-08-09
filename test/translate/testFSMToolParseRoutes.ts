import * as path from "path";
import * as fs from "fs";
import {parseRoutes} from "../../src/translate";

let states = JSON.parse(fs.readFileSync(path.join(__dirname, "../../resources/zhaojn.json")).toString()).states;
let routes = [];
parseRoutes(states, "initial", routes, [])
console.log(JSON.stringify(routes, null, 4));
