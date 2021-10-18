import {report} from "../../src/translate";

console.log(report({
    audiences: [{name: "public", type: "public"}],
    fsmStates: [
        {
            name: "initial",
            events: [{
                id: "1",
                name: "TimeEvent",
                args: {dateTime: "2021-06-01 00:00"},
                state: "finish"
            }, {
                id: "2",
                name: "TransactionEvent",
                args: {amount: 5, account: "self.account"},
                state: "auth"
            }]
        }, {
            name: "auth",
            serviceStates: ["active"],
            events: [{
                id: "3",
                name: "RelativeTimeEvent",
                args: {elapsed: 1, timeUnit: "month"},
                state: "finish"
            }]
        }, {
            name: "finish",
            events: [{
                name: "terminate"
            }]
        }
    ]
}, true).content);
