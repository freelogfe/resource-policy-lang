import {cleanUpRoutes, parseRoutes} from "../../src/translate";

let states = require("../../resources/zhaojn.json").state_machine.states;
let routes = [];
parseRoutes(states, "initial", routes, []);
cleanUpRoutes(routes);

let stateMap = new Map();
for (let state in states) {
    let transitionMap = new Map();
    for (let transition of states[state].transitions) {
        let eventName = transition.name;
        let transitionArray = [];
        if (transitionMap.has(eventName)) {
            transitionArray = transitionMap.get(eventName);
        }
        transitionArray.push(transition);
        transitionMap.set(eventName, transitionArray);
    }
    stateMap.set(state, transitionMap);
}
console.log(stateMap);