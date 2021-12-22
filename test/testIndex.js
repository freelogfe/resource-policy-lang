const fs = require("fs");
const policy_lang = require("../index");
const {UserPolicyDecompiler} = require("../UserPolicyDecompiler");

main();

async function main() {
    try {
        let result = await policy_lang.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"), "resource", null, "dev");

        fs.writeFile("./resources/zhaojn.json", JSON.stringify(result, null, 4), (err) => {
            if (err) throw err;
        });

        console.log(new UserPolicyDecompiler().decompile(result));
    } catch (e) {
        console.log(e);
    }
}
