const fs = require("fs");
const policy_lang = require("../index");
const {UserPolicyDecompiler} = require("../UserPolicyDecompiler");

main();
// main2();

async function main2() {
    let ID = "[a-zA-z]\\w+"
    let reg = new RegExp(`\\$\\{(${ID}(\\.${ID}(\\[\\d+])?\\.${ID})?)}`, "g");
    let str = "hello ${name},${name} 今天的心情是${color.green.str}的";
    let rst = null;
    while (rst = reg.exec(str)) {
        console.log(rst);
    }
}

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
