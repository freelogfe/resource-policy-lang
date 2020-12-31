const fs = require("fs");
const polocy_lang = require("../index");

main();

async function main() {
    let gen = await polocy_lang.compile(fs.readFileSync("./resources/zhaojn.sc", "utf-8"), "resource");

    console.log(JSON.stringify(gen.state_machine, null, 4));
}