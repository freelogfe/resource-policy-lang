"use strict"

const Opiton = require("../Option").Option;
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "../gen";
const LexToken = require(`${gen_dir}/LexToken`);
const resourcePolicy = require(`${gen_dir}/resourcePolicy`);
const SMGenerator = require("../SMGenerator").SMGenerator;

main();

async function main() {
    let option = new Opiton(process.argv);
    option.build();
    let input = fs.readFileSync("./resources/zhaojn.sc", "utf-8");

    let chars = new antlr4.InputStream(input);
    let lexer = new LexToken.LexToken(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new resourcePolicy.resourcePolicy(stream);
    // 关闭恢复机制
    parser._errHandler = new antlr4.error.BailErrorStrategy();
    parser.buildParseTrees = true;

    let tree = null;
    try {
        tree = parser.policy();
    } catch (e) {
        throw new Error("输入格式错误");
    }

    let gen = new SMGenerator(option.subjectType, null, option.env);
    try {
        gen.visit(tree);
    } catch (e) {
        throw new Error(e);
    }

    await gen.verify()
        .then(() => {
            console.log(JSON.stringify(gen.state_machine, null, 4));

            fs.writeFile("./resources/zhaojn.json", JSON.stringify(gen.state_machine, null, 4), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        })
        .catch((e) => {
            throw new Error(e);
        });
}