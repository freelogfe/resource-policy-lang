const minimist = require("minimist");

class Option {

    constructor(argv) {
        const args = minimist(argv.slice(2));
        this.type = args.type;
    }
}

exports.Option = Option;