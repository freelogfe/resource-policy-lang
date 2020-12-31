const minimist = require("minimist");

class Option {
    constructor(argv) {
        this.args = minimist(argv.slice(2));
    }

    build() {
        console.log(this.args);

        this.subjectType = this.args.subjectType;
        if (this.subjectType == null) {
            throw new Error("缺少必要的参数 --type");
        }
        this.env = this.args.env;
        if (this.env == null) {
            this.env = "dev";
        }
    }
}

exports.Option = Option;