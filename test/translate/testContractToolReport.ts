const policy_lang = require("../../index");

let result = policy_lang.report({
    "audiences": [{
        "name": "public",
        "type": "public"
    }],
    "fsmStates": [{
        "name": "initial",
        "serviceStates": [],
        "events": [{
            "id": "47a53396dcc9403a969c72e267b31e63",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "a"
        }, {
            "id": "de9e57fa8fac4d40b12de24479d21018",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "b"
        }, {
            "id": "2a655c79516d480db060d30935d1c587",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "c"
        }, {
            "id": "b1fa1a85e2344f37903ea37a6c9df1c0",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "f"
        }]
    }, {
        "name": "a",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "5d7ab9cf34a2406fa2fac8bc70fbdd5a",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "d"
        }, {
            "id": "e6517fb504dc49c98a760a023b1348ba",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "h"
        }, {
            "id": "345fc5b3dce941af8d1cd133a3231612",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "g"
        }]
    }, {
        "name": "b",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "be36cfd5b64143c799d0504b38e84bc4",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "d"
        }, {
            "id": "9b176b9fc7a3455da65a78e602e4d66e",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "f"
        }]
    }, {
        "name": "c",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "5f666f1d1a924c68bf1f266d3d370b84",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "h"
        }]
    }, {
        "name": "d",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "3cc048f2dfcc4271bb54605ef5088987",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "g"
        }]
    }, {
        "name": "h",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "efbfecf5eb6146eebddb376ff3be8f88",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "finish"
        }]
    }, {
        "name": "f",
        "serviceStates": ["testActive"],
        "events": [{
            "id": "ec514aa010bd48968cb80100bc1870b4",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "finish"
        }]
    }, {
        "name": "g",
        "serviceStates": ["active"],
        "events": [{
            "id": "547038291e9140b4b57d757d89bfbdd8",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "finish"
        }, {
            "id": "c49995146d3348248d6cc28ba4c7edf3",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "initial"
        }, {
            "id": "643aa05324fe40ab95d582adee22e612",
            "name": "TransactionEvent",
            "args": {
                "amount": 1,
                "account": "self.account"
            },
            "state": "a"
        }]
    }, {
        "name": "finish",
        "serviceStates": [],
        "events": []
    }]
}, false);

// console.log(JSON.stringify(result, null, 4));
console.log(result.content);
