"use strict"

const Opiton = require("./Option").Option;
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "./gen";
const resourcePolicyLexer = require(`${gen_dir}/resourcePolicyLexer`);
const resourcePolicyParser = require(`${gen_dir}/resourcePolicyParser`);
const SMGenerator = require("./SMGenerator").SMGenerator;

let option = new Opiton(process.argv);
let input = fs.readFileSync("./resources/zhaojn.sc", "utf-8");
let chars = new antlr4.InputStream(input);
let lexer = new resourcePolicyLexer.resourcePolicyLexer(chars);
let stream = new antlr4.CommonTokenStream(lexer);
let parser = new resourcePolicyParser.resourcePolicyParser(stream);
parser.buildParseTrees = true;
let tree = parser.policy();

let gen = new SMGenerator();
gen.visit(tree);
gen.verify().then(() => {
        console.log(JSON.stringify(gen.state_machine, null, 4));

        fs.writeFile("./resources/zhaojn.json", JSON.stringify(gen.state_machine, null, 4), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
);