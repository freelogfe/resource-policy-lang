const fs = require("fs");
const policy_lang = require("../index");
const {UserPolicyDecompiler} = require("../UserPolicyDecompiler");
const lodash = require("lodash");
const moment = require("moment/moment");
main();

async function main() {
    try {
        let result = await policy_lang.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"), "resource", "http://api.testfreelog.com", "dev");

        fs.writeFile("./resources/zhaojn.json", JSON.stringify(result, null, 4), (err) => {
            if (err) throw err;
        });

        console.log(new UserPolicyDecompiler().decompile(result.state_machine));

        // console.log(await policy_lang.reformat(fs.readFileSync("./resources/zhaojn.sc", "utf-8")));
    } catch (e) {
        console.log(e);
    }
}
