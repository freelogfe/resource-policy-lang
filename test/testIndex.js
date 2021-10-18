const fs = require("fs");
const polocy_lang = require("../index");

main();

async function main() {
    try {
        let result = await polocy_lang.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"), "resource", null, "dev");

        console.log(JSON.stringify(result, null, 4));
    } catch (e) {
        console.log(e);
    }
}
