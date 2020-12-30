const minimist = require("minimist");

class Option {
    constructor(argv) {
        this.args = minimist(argv.slice(2));
    }

    build() {
        this.targetType = this.args.type;
        if (this.targetType == null) {
            throw new Error("缺少必要的参数 --type");
        }
    }
}

exports.Option = Option;