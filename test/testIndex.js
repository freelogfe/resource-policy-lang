const fs = require("fs");
const policy_lang = require("../index");
const {UserPolicyDecompiler} = require("../UserPolicyDecompiler");
const lodash = require("lodash");
const moment = require("moment/moment");
// main();
// main2();
main3();

async function main3(){
    console.log(moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"))
    console.log(moment(moment(Date.now()).format("YYYY-MM")).format("YYYY-MM-DD HH:mm:ss"))
}

async function main2() {
    const REGEX_ID = "^[\u4e00-\u9fefa-zA-Z0-9\\-&.,\\\\]{1,40}$";
    // const REGEX = `^(${REGEX_ID})\\.${REGEX_ID} => (${REGEX_ID})$`;
    const content = "12\\-3";
    console.log(content.match(REGEX_ID));
    // console.log(new RegExp(REGEX,'g').exec(content));

    // let reg = /^(.+?)(_(\d+))?$/g;
    // console.log(reg.exec("Hello123_1"));

    // console.log([{name: "a", age: 1}, {name: "b", age: 2}].reduce((result, e) => {
    //     result[e.name] = e.age
    //     return result;
    // }, {}));
}

async function main() {
    try {
        let result = await policy_lang.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"), "resource", "http://qi.testfreelog.com", "dev");

        fs.writeFile("./resources/zhaojn.json", JSON.stringify(result, null, 4), (err) => {
            if (err) throw err;
        });

        // console.log(new UserPolicyDecompiler().decompile(result));

        console.log(await policy_lang.reformat(fs.readFileSync("./resources/zhaojn.sc", "utf-8")));
    } catch (e) {
        console.log(e);
    }
}
