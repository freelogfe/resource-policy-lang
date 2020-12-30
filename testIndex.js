const polocy_lang = require("./index");
// console.log(require("fs").readFileSync("./resources/zhaojn.sc","utf-8"));

main();

async function main() {
    let gen = await polocy_lang.compile(require("fs").readFileSync("./resources/zhaojn.sc", "utf-8"), "resources");
    console.log(JSON.stringify(gen.state_machine, null, 4));
}