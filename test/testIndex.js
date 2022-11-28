const fs = require("fs");
const policy_lang = require("../index");
const {UserPolicyDecompiler} = require("../UserPolicyDecompiler");

main();
// main2();

async function main2() {
    const REGEX_ID = "[a-zA-z]\\w+";
    const REGEX = `^(${REGEX_ID})\\.${REGEX_ID} => (${REGEX_ID})$`;
    const content = "auth.TransactionEvent => auth_month";
    console.log(content.match(REGEX));
    console.log(new RegExp(REGEX,'g').exec(content));
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
