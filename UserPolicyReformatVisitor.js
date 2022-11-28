const resourcePolicyVisitor = require('./gen/resourcePolicyVisitor').resourcePolicyVisitor;

const tagsMap = require("./resources/tags_map.json");

class UserPolicyReformatVisitor extends resourcePolicyVisitor {

    constructor(props) {
        super(props);

        this.positions = [];
        this.sb = "";
        this.lineCurrent = 0;
        this.sentenceCurrent = "";
        this.sentenceIndex = 0;
    }


    cutLine() {
        this.sb += this.sentenceCurrent;
        this.sentenceIndex = 0;
        this.sentenceCurrent = "";

        this.sb += "\n";
        this.lineCurrent++;

        return this;
    }

    appendTab() {
        this.sentenceIndex = this.sentenceCurrent.length;
        this.sentenceCurrent += "    ";

        return this;
    }

    appendSentence(sentence) {
        this.sentenceIndex = this.sentenceCurrent.length;
        this.sentenceCurrent += sentence;

        return this;
    }

    appendSentenceByType(sentence, type) {
        this.appendSentence(sentence);

        this.positions.push({
            type: type,
            content: sentence,
            line: this.lineCurrent,
            index: this.sentenceIndex,
            length: sentence.length,
            tags: tagsMap[type]
        });

        return this;
    }

    visitAudience_strict(ctx) {
        this.appendSentence(ctx.FOR().getText()).appendSentence(" ").appendSentence(ctx.audience_clause().getText()).cutLine().cutLine();

        return super.visitAudience_strict(ctx);
    }

    visitState_definition(ctx) {
        this.appendSentenceByType(ctx.state_name().getText(), "stateName");

        if (ctx.service_state_definition() != null) {
            this.appendSentence(ctx.service_state_definition().getText());
        }
        this.appendSentence(ctx.COLON().getText()).cutLine();

        return super.visitState_definition(ctx);
    }

    visitState_transition(ctx) {
        this.appendTab();
        if (ctx.terminate == null) {
            this.appendSentence(ctx.event().TILDE().getText()).appendSentence(ctx.event().event_organization().getText()).appendSentence(ctx.event().EVENT_POINT().getText());
            this.appendSentenceByType(ctx.event().eventName.text, "eventName");
            this.appendSentence(ctx.event().EVENT_LPAREN().getText());
            if (ctx.event().event_args() != null) {
                this.appendSentence(ctx.event().event_args().getText());
            }
            this.appendSentence(ctx.event().EVENT_RPAREN().getText());
            this.appendSentence(" ").appendSentence(ctx.EQUANDGT().getText()).appendSentence(" ").appendSentenceByType(ctx.state_name().getText(), "stateName");
        } else {
            this.appendSentenceByType(ctx.terminate.text, "eventName");
        }
        this.cutLine();

        return super.visitState_transition(ctx);
    }
}

exports.UserPolicyReformatVisitor = UserPolicyReformatVisitor;
