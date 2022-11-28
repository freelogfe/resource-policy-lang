// Generated from tmp\resourcePolicy.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var resourcePolicyListener = require('./resourcePolicyListener').resourcePolicyListener;
var resourcePolicyVisitor = require('./resourcePolicyVisitor').resourcePolicyVisitor;

var grammarFileName = "resourcePolicy.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00036\u012a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002P\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004[\n\u0004\f\u0004\u000e",
    "\u0004^\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0006\u0007h\n\u0007",
    "\r\u0007\u000e\u0007i\u0003\b\u0003\b\u0005\bn\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0006\u000bv\n\u000b\r\u000b\u000e\u000b",
    "w\u0003\f\u0003\f\u0005\f|\n\f\u0003\f\u0003\f\u0006\f\u0080\n\f\r\f",
    "\u000e\f\u0081\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u008a\n\u000e\f\u000e\u000e\u000e\u008d\u000b\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0098\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00a3\n\u0013\f\u0013\u000e",
    "\u0013\u00a6\u000b\u0013\u0005\u0013\u00a8\n\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0007\u0015\u00b3\n\u0015\f\u0015\u000e\u0015\u00b6",
    "\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00bb\n",
    "\u0016\f\u0016\u000e\u0016\u00be\u000b\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u00c3\n\u0017\f\u0017\u000e\u0017\u00c6\u000b",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u00ce\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0007\u0019\u00d5\n\u0019\f\u0019\u000e\u0019",
    "\u00d8\u000b\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u00e6\n\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0005\u001e\u00ee\n",
    "\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u00f2\n\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0007 \u00f9\n \f \u000e \u00fc\u000b \u0007",
    " \u00fe\n \f \u000e \u0101\u000b \u0003 \u0003 \u0003!\u0003!\u0005",
    "!\u0107\n!\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0005#\u0111\n#\u0003#\u0003#\u0003$\u0003$\u0003$\u0005$\u0118\n",
    "$\u0003%\u0003%\u0003%\u0007%\u011d\n%\f%\u000e%\u0120\u000b%\u0003",
    "&\u0003&\u0003&\u0007&\u0125\n&\f&\u000e&\u0128\u000b&\u0003&\u0002",
    "\u0003\u0006\'\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJ\u0002\u0006\u0004\u0002",
    "\u0004\u0007!!\u0003\u0002\u0019\u001a\u0003\u0002\u001b\u001c\u0003",
    "\u0002\u000e\u000f\u0002\u0123\u0002L\u0003\u0002\u0002\u0002\u0004",
    "Q\u0003\u0002\u0002\u0002\u0006T\u0003\u0002\u0002\u0002\b_\u0003\u0002",
    "\u0002\u0002\na\u0003\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000e",
    "m\u0003\u0002\u0002\u0002\u0010o\u0003\u0002\u0002\u0002\u0012r\u0003",
    "\u0002\u0002\u0002\u0014u\u0003\u0002\u0002\u0002\u0016y\u0003\u0002",
    "\u0002\u0002\u0018\u0083\u0003\u0002\u0002\u0002\u001a\u0085\u0003\u0002",
    "\u0002\u0002\u001c\u0090\u0003\u0002\u0002\u0002\u001e\u0097\u0003\u0002",
    "\u0002\u0002 \u0099\u0003\u0002\u0002\u0002\"\u009b\u0003\u0002\u0002",
    "\u0002$\u009d\u0003\u0002\u0002\u0002&\u00ad\u0003\u0002\u0002\u0002",
    "(\u00af\u0003\u0002\u0002\u0002*\u00b7\u0003\u0002\u0002\u0002,\u00bf",
    "\u0003\u0002\u0002\u0002.\u00cd\u0003\u0002\u0002\u00020\u00cf\u0003",
    "\u0002\u0002\u00022\u00db\u0003\u0002\u0002\u00024\u00e5\u0003\u0002",
    "\u0002\u00026\u00e7\u0003\u0002\u0002\u00028\u00e9\u0003\u0002\u0002",
    "\u0002:\u00ed\u0003\u0002\u0002\u0002<\u00f1\u0003\u0002\u0002\u0002",
    ">\u00f3\u0003\u0002\u0002\u0002@\u0106\u0003\u0002\u0002\u0002B\u0108",
    "\u0003\u0002\u0002\u0002D\u010a\u0003\u0002\u0002\u0002F\u0114\u0003",
    "\u0002\u0002\u0002H\u0119\u0003\u0002\u0002\u0002J\u0121\u0003\u0002",
    "\u0002\u0002LM\u0005\u0004\u0003\u0002MO\u0005\u0014\u000b\u0002NP\u0007",
    "\u0002\u0002\u0003ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "P\u0003\u0003\u0002\u0002\u0002QR\u0007\u0003\u0002\u0002RS\u0005\u0006",
    "\u0004\u0002S\u0005\u0003\u0002\u0002\u0002TU\b\u0004\u0001\u0002UV",
    "\u0005\b\u0005\u0002V\\\u0003\u0002\u0002\u0002WX\f\u0003\u0002\u0002",
    "XY\u0007\u0010\u0002\u0002Y[\u0005\u0006\u0004\u0004ZW\u0003\u0002\u0002",
    "\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003",
    "\u0002\u0002\u0002]\u0007\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002_`\t\u0002\u0002\u0002`\t\u0003\u0002\u0002\u0002ab\u0007\b\u0002",
    "\u0002bc\u0005 \u0011\u0002cd\u0007\t\u0002\u0002de\u0005\"\u0012\u0002",
    "e\u000b\u0003\u0002\u0002\u0002fh\u0005\u000e\b\u0002gf\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003",
    "\u0002\u0002\u0002j\r\u0003\u0002\u0002\u0002kn\u0005\u0010\t\u0002",
    "ln\u0005$\u0013\u0002mk\u0003\u0002\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002n\u000f\u0003\u0002\u0002\u0002op\u0005\u0012\n\u0002pq\u0005",
    "\u001c\u000f\u0002q\u0011\u0003\u0002\u0002\u0002rs\u0007\u000b\u0002",
    "\u0002s\u0013\u0003\u0002\u0002\u0002tv\u0005\u0016\f\u0002ut\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002x\u0015\u0003\u0002\u0002\u0002y{\u0005\u0018",
    "\r\u0002z|\u0005\u001a\u000e\u0002{z\u0003\u0002\u0002\u0002{|\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u007f\u0007\u0012\u0002",
    "\u0002~\u0080\u0005\u001e\u0010\u0002\u007f~\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0017\u0003\u0002\u0002\u0002",
    "\u0083\u0084\u0007(\u0002\u0002\u0084\u0019\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0007\u0017\u0002\u0002\u0086\u008b\u0005\u001c\u000f\u0002",
    "\u0087\u0088\u0007\u0010\u0002\u0002\u0088\u008a\u0005\u001c\u000f\u0002",
    "\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007\u0018\u0002\u0002\u008f\u001b\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0007(\u0002\u0002\u0091\u001d\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0005D#\u0002\u0093\u0094\u0007 \u0002\u0002\u0094\u0095",
    "\u0005\u0018\r\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0098",
    "\u0007\f\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0097\u0096",
    "\u0003\u0002\u0002\u0002\u0098\u001f\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007(\u0002\u0002\u009a!\u0003\u0002\u0002\u0002\u009b\u009c\u0007",
    "(\u0002\u0002\u009c#\u0003\u0002\u0002\u0002\u009d\u009e\u0005&\u0014",
    "\u0002\u009e\u00a7\u0007\u0015\u0002\u0002\u009f\u00a4\u0007(\u0002",
    "\u0002\u00a0\u00a1\u0007\u0010\u0002\u0002\u00a1\u00a3\u0007(\u0002",
    "\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002",
    "\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002",
    "\u0002\u00a7\u009f\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007\u0016\u0002",
    "\u0002\u00aa\u00ab\u0007\u001e\u0002\u0002\u00ab\u00ac\u0005(\u0015",
    "\u0002\u00ac%\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007(\u0002\u0002",
    "\u00ae\'\u0003\u0002\u0002\u0002\u00af\u00b4\u0005*\u0016\u0002\u00b0",
    "\u00b1\t\u0003\u0002\u0002\u00b1\u00b3\u0005*\u0016\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5)",
    "\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b7\u00bc",
    "\u0005,\u0017\u0002\u00b8\u00b9\t\u0004\u0002\u0002\u00b9\u00bb\u0005",
    ",\u0017\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00be\u0003",
    "\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd+\u0003\u0002\u0002\u0002\u00be\u00bc\u0003",
    "\u0002\u0002\u0002\u00bf\u00c4\u0005.\u0018\u0002\u00c0\u00c1\u0007",
    "\u001d\u0002\u0002\u00c1\u00c3\u0005.\u0018\u0002\u00c2\u00c0\u0003",
    "\u0002\u0002\u0002\u00c3\u00c6\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003",
    "\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5-\u0003",
    "\u0002\u0002\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007",
    "\u0019\u0002\u0002\u00c8\u00ce\u0005.\u0018\u0002\u00c9\u00ca\u0007",
    "\u001a\u0002\u0002\u00ca\u00ce\u0005.\u0018\u0002\u00cb\u00ce\u0005",
    "0\u0019\u0002\u00cc\u00ce\u00054\u001b\u0002\u00cd\u00c7\u0003\u0002",
    "\u0002\u0002\u00cd\u00c9\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002",
    "\u0002\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00ce/\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u00052\u001a\u0002\u00d0\u00d1\u0007\u0015",
    "\u0002\u0002\u00d1\u00d6\u0005(\u0015\u0002\u00d2\u00d3\u0007\u0010",
    "\u0002\u0002\u00d3\u00d5\u0005(\u0015\u0002\u00d4\u00d2\u0003\u0002",
    "\u0002\u0002\u00d5\u00d8\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d9\u0003\u0002",
    "\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u0016",
    "\u0002\u0002\u00da1\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\r\u0002",
    "\u0002\u00dc3\u0003\u0002\u0002\u0002\u00dd\u00e6\u00056\u001c\u0002",
    "\u00de\u00e6\u00058\u001d\u0002\u00df\u00e0\u0007\u0015\u0002\u0002",
    "\u00e0\u00e1\u0005(\u0015\u0002\u00e1\u00e2\u0007\u0016\u0002\u0002",
    "\u00e2\u00e6\u0003\u0002\u0002\u0002\u00e3\u00e6\u0007\'\u0002\u0002",
    "\u00e4\u00e6\u0005:\u001e\u0002\u00e5\u00dd\u0003\u0002\u0002\u0002",
    "\u00e5\u00de\u0003\u0002\u0002\u0002\u00e5\u00df\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002",
    "\u00e65\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007$\u0002\u0002\u00e8",
    "7\u0003\u0002\u0002\u0002\u00e9\u00ea\t\u0005\u0002\u0002\u00ea9\u0003",
    "\u0002\u0002\u0002\u00eb\u00ee\u0005B\"\u0002\u00ec\u00ee\u0007(\u0002",
    "\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002",
    "\u0002\u00ee;\u0003\u0002\u0002\u0002\u00ef\u00f2\u0005> \u0002\u00f0",
    "\u00f2\u0005(\u0015\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f2=\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0005&\u0014\u0002\u00f4\u00ff\u0007\u0015\u0002\u0002\u00f5",
    "\u00fa\u0005@!\u0002\u00f6\u00f7\u0007\u0010\u0002\u0002\u00f7\u00f9",
    "\u0005@!\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003",
    "\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003",
    "\u0002\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003",
    "\u0002\u0002\u0002\u00fd\u00f5\u0003\u0002\u0002\u0002\u00fe\u0101\u0003",
    "\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003",
    "\u0002\u0002\u0002\u0100\u0102\u0003\u0002\u0002\u0002\u0101\u00ff\u0003",
    "\u0002\u0002\u0002\u0102\u0103\u0007\u0016\u0002\u0002\u0103?\u0003",
    "\u0002\u0002\u0002\u0104\u0107\u0007\'\u0002\u0002\u0105\u0107\u0005",
    "B\"\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0105\u0003\u0002",
    "\u0002\u0002\u0107A\u0003\u0002\u0002\u0002\u0108\u0109\u0007%\u0002",
    "\u0002\u0109C\u0003\u0002\u0002\u0002\u010a\u010b\u0007\u001f\u0002",
    "\u0002\u010b\u010c\u0005F$\u0002\u010c\u010d\u00073\u0002\u0002\u010d",
    "\u010e\u00070\u0002\u0002\u010e\u0110\u00074\u0002\u0002\u010f\u0111",
    "\u0005J&\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110\u0111\u0003",
    "\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0113\u0007",
    "5\u0002\u0002\u0113E\u0003\u0002\u0002\u0002\u0114\u0117\u00070\u0002",
    "\u0002\u0115\u0116\u00073\u0002\u0002\u0116\u0118\u0005H%\u0002\u0117",
    "\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118",
    "G\u0003\u0002\u0002\u0002\u0119\u011e\u00070\u0002\u0002\u011a\u011b",
    "\u00073\u0002\u0002\u011b\u011d\u00070\u0002\u0002\u011c\u011a\u0003",
    "\u0002\u0002\u0002\u011d\u0120\u0003\u0002\u0002\u0002\u011e\u011c\u0003",
    "\u0002\u0002\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011fI\u0003",
    "\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0121\u0126\u0007",
    "1\u0002\u0002\u0122\u0123\u00072\u0002\u0002\u0123\u0125\u00071\u0002",
    "\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u0128\u0003\u0002\u0002",
    "\u0002\u0126\u0124\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002",
    "\u0002\u0127K\u0003\u0002\u0002\u0002\u0128\u0126\u0003\u0002\u0002",
    "\u0002\u001cO\\imw{\u0081\u008b\u0097\u00a4\u00a7\u00b4\u00bc\u00c4",
    "\u00cd\u00d6\u00e5\u00ed\u00f1\u00fa\u00ff\u0106\u0110\u0117\u011e\u0126"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'for'", "'public'", "'nodes'", "'userGroup'", 
                     "'registeredUsers'", "'include'", "'require'", "'contract with'", 
                     "'always'", "'terminate'", "'sum'", "'pi'", "'e'", 
                     null, null, "':'", "'<'", "'>'", null, null, "'['", 
                     "']'", "'+'", "'-'", "'*'", "'/'", "'^'", "'='", "'~'", 
                     "'=>'", null, null, null, null, null, "'exhibited'" ];

var symbolicNames = [ null, "FOR", "PUBLIC", "NODES", "USER_GROUP", "REGISTERED_USERS", 
                      "INCLUDE", "REQUIRE", "CONTRACT_WITH", "SERVICE_STATE_SCOPE", 
                      "TERMINATE", "SUM", "PI", "EULER", "COMMA", "POINT", 
                      "COLON", "LT", "GT", "LPAREN", "RPAREN", "LBRACKET", 
                      "RBRACKET", "PLUS", "MINUS", "TIMES", "DIV", "POW", 
                      "EQ", "TILDE", "EQUANDGT", "USER_ID", "PHONE_NUMBER_CN_MOBILE", 
                      "EMAIL", "SCIENTIFIC_NUMBER", "VARIABLE_CONTRACT", 
                      "VARIABLE_CONTRACT_ATTRIBUTE", "INT", "ID", "PERIOD", 
                      "DATE", "TIME", "MONEY_AMOUNT", "COMMENT", "COMMENT_LINE", 
                      "WS", "EVENT_SERVICE_PATH_NAME", "EVENT_ARG", "EVENT_COMMA", 
                      "EVENT_POINT", "EVENT_LPAREN", "EVENT_RPAREN", "EVENT_WS" ];

var ruleNames =  [ "policy", "audience_strict", "audience_clause", "audience", 
                   "subject_icon_strict", "declaration_section", "declaration_statement", 
                   "service_state_constant", "service_state_scope", "state_definition_section", 
                   "state_definition", "state_name", "service_state_definition", 
                   "service_state", "state_transition", "subject_icon", 
                   "subject_icon_lv", "expression_assignment", "expression_handle", 
                   "expression", "multiplyingExpression", "powExpression", 
                   "signedAtom", "built_in_function", "funcname", "atom", 
                   "scientific", "constant", "variable", "expression_call_or_literal", 
                   "expression_call", "expression_call_argument", "environment_variable", 
                   "event", "event_organization", "event_path", "event_args" ];

function resourcePolicy (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

resourcePolicy.prototype = Object.create(antlr4.Parser.prototype);
resourcePolicy.prototype.constructor = resourcePolicy;

Object.defineProperty(resourcePolicy.prototype, "atn", {
	get : function() {
		return atn;
	}
});

resourcePolicy.EOF = antlr4.Token.EOF;
resourcePolicy.FOR = 1;
resourcePolicy.PUBLIC = 2;
resourcePolicy.NODES = 3;
resourcePolicy.USER_GROUP = 4;
resourcePolicy.REGISTERED_USERS = 5;
resourcePolicy.INCLUDE = 6;
resourcePolicy.REQUIRE = 7;
resourcePolicy.CONTRACT_WITH = 8;
resourcePolicy.SERVICE_STATE_SCOPE = 9;
resourcePolicy.TERMINATE = 10;
resourcePolicy.SUM = 11;
resourcePolicy.PI = 12;
resourcePolicy.EULER = 13;
resourcePolicy.COMMA = 14;
resourcePolicy.POINT = 15;
resourcePolicy.COLON = 16;
resourcePolicy.LT = 17;
resourcePolicy.GT = 18;
resourcePolicy.LPAREN = 19;
resourcePolicy.RPAREN = 20;
resourcePolicy.LBRACKET = 21;
resourcePolicy.RBRACKET = 22;
resourcePolicy.PLUS = 23;
resourcePolicy.MINUS = 24;
resourcePolicy.TIMES = 25;
resourcePolicy.DIV = 26;
resourcePolicy.POW = 27;
resourcePolicy.EQ = 28;
resourcePolicy.TILDE = 29;
resourcePolicy.EQUANDGT = 30;
resourcePolicy.USER_ID = 31;
resourcePolicy.PHONE_NUMBER_CN_MOBILE = 32;
resourcePolicy.EMAIL = 33;
resourcePolicy.SCIENTIFIC_NUMBER = 34;
resourcePolicy.VARIABLE_CONTRACT = 35;
resourcePolicy.VARIABLE_CONTRACT_ATTRIBUTE = 36;
resourcePolicy.INT = 37;
resourcePolicy.ID = 38;
resourcePolicy.PERIOD = 39;
resourcePolicy.DATE = 40;
resourcePolicy.TIME = 41;
resourcePolicy.MONEY_AMOUNT = 42;
resourcePolicy.COMMENT = 43;
resourcePolicy.COMMENT_LINE = 44;
resourcePolicy.WS = 45;
resourcePolicy.EVENT_SERVICE_PATH_NAME = 46;
resourcePolicy.EVENT_ARG = 47;
resourcePolicy.EVENT_COMMA = 48;
resourcePolicy.EVENT_POINT = 49;
resourcePolicy.EVENT_LPAREN = 50;
resourcePolicy.EVENT_RPAREN = 51;
resourcePolicy.EVENT_WS = 52;

resourcePolicy.RULE_policy = 0;
resourcePolicy.RULE_audience_strict = 1;
resourcePolicy.RULE_audience_clause = 2;
resourcePolicy.RULE_audience = 3;
resourcePolicy.RULE_subject_icon_strict = 4;
resourcePolicy.RULE_declaration_section = 5;
resourcePolicy.RULE_declaration_statement = 6;
resourcePolicy.RULE_service_state_constant = 7;
resourcePolicy.RULE_service_state_scope = 8;
resourcePolicy.RULE_state_definition_section = 9;
resourcePolicy.RULE_state_definition = 10;
resourcePolicy.RULE_state_name = 11;
resourcePolicy.RULE_service_state_definition = 12;
resourcePolicy.RULE_service_state = 13;
resourcePolicy.RULE_state_transition = 14;
resourcePolicy.RULE_subject_icon = 15;
resourcePolicy.RULE_subject_icon_lv = 16;
resourcePolicy.RULE_expression_assignment = 17;
resourcePolicy.RULE_expression_handle = 18;
resourcePolicy.RULE_expression = 19;
resourcePolicy.RULE_multiplyingExpression = 20;
resourcePolicy.RULE_powExpression = 21;
resourcePolicy.RULE_signedAtom = 22;
resourcePolicy.RULE_built_in_function = 23;
resourcePolicy.RULE_funcname = 24;
resourcePolicy.RULE_atom = 25;
resourcePolicy.RULE_scientific = 26;
resourcePolicy.RULE_constant = 27;
resourcePolicy.RULE_variable = 28;
resourcePolicy.RULE_expression_call_or_literal = 29;
resourcePolicy.RULE_expression_call = 30;
resourcePolicy.RULE_expression_call_argument = 31;
resourcePolicy.RULE_environment_variable = 32;
resourcePolicy.RULE_event = 33;
resourcePolicy.RULE_event_organization = 34;
resourcePolicy.RULE_event_path = 35;
resourcePolicy.RULE_event_args = 36;


function PolicyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_policy;
    return this;
}

PolicyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PolicyContext.prototype.constructor = PolicyContext;

PolicyContext.prototype.audience_strict = function() {
    return this.getTypedRuleContext(Audience_strictContext,0);
};

PolicyContext.prototype.state_definition_section = function() {
    return this.getTypedRuleContext(State_definition_sectionContext,0);
};

PolicyContext.prototype.EOF = function() {
    return this.getToken(resourcePolicy.EOF, 0);
};

PolicyContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPolicy(this);
	}
};

PolicyContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPolicy(this);
	}
};

PolicyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitPolicy(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.PolicyContext = PolicyContext;

resourcePolicy.prototype.policy = function() {

    var localctx = new PolicyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, resourcePolicy.RULE_policy);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.audience_strict();
        this.state = 75;
        this.state_definition_section();
        this.state = 77;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 76;
            this.match(resourcePolicy.EOF);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Audience_strictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_audience_strict;
    return this;
}

Audience_strictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_strictContext.prototype.constructor = Audience_strictContext;

Audience_strictContext.prototype.FOR = function() {
    return this.getToken(resourcePolicy.FOR, 0);
};

Audience_strictContext.prototype.audience_clause = function() {
    return this.getTypedRuleContext(Audience_clauseContext,0);
};

Audience_strictContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAudience_strict(this);
	}
};

Audience_strictContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAudience_strict(this);
	}
};

Audience_strictContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitAudience_strict(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Audience_strictContext = Audience_strictContext;

resourcePolicy.prototype.audience_strict = function() {

    var localctx = new Audience_strictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, resourcePolicy.RULE_audience_strict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(resourcePolicy.FOR);
        this.state = 80;
        this.audience_clause(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Audience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.audience = function() {
    return this.getTypedRuleContext(AudienceContext,0);
};

Audience_clauseContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

Audience_clauseContext.prototype.COMMA = function() {
    return this.getToken(resourcePolicy.COMMA, 0);
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAudience_clause(this);
	}
};

Audience_clauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitAudience_clause(this);
    } else {
        return visitor.visitChildren(this);
    }
};



resourcePolicy.prototype.audience_clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Audience_clauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, resourcePolicy.RULE_audience_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.audience();
        this._ctx.stop = this._input.LT(-1);
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Audience_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, resourcePolicy.RULE_audience_clause);
                this.state = 85;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 86;
                this.match(resourcePolicy.COMMA);
                this.state = 87;
                this.audience_clause(2); 
            }
            this.state = 92;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function AudienceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_audience;
    return this;
}

AudienceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AudienceContext.prototype.constructor = AudienceContext;

AudienceContext.prototype.PUBLIC = function() {
    return this.getToken(resourcePolicy.PUBLIC, 0);
};

AudienceContext.prototype.NODES = function() {
    return this.getToken(resourcePolicy.NODES, 0);
};

AudienceContext.prototype.USER_GROUP = function() {
    return this.getToken(resourcePolicy.USER_GROUP, 0);
};

AudienceContext.prototype.REGISTERED_USERS = function() {
    return this.getToken(resourcePolicy.REGISTERED_USERS, 0);
};

AudienceContext.prototype.USER_ID = function() {
    return this.getToken(resourcePolicy.USER_ID, 0);
};

AudienceContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAudience(this);
	}
};

AudienceContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAudience(this);
	}
};

AudienceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitAudience(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.AudienceContext = AudienceContext;

resourcePolicy.prototype.audience = function() {

    var localctx = new AudienceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, resourcePolicy.RULE_audience);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << resourcePolicy.PUBLIC) | (1 << resourcePolicy.NODES) | (1 << resourcePolicy.USER_GROUP) | (1 << resourcePolicy.REGISTERED_USERS) | (1 << resourcePolicy.USER_ID))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Subject_icon_strictContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject_icon_strict;
    return this;
}

Subject_icon_strictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_icon_strictContext.prototype.constructor = Subject_icon_strictContext;

Subject_icon_strictContext.prototype.INCLUDE = function() {
    return this.getToken(resourcePolicy.INCLUDE, 0);
};

Subject_icon_strictContext.prototype.subject_icon = function() {
    return this.getTypedRuleContext(Subject_iconContext,0);
};

Subject_icon_strictContext.prototype.REQUIRE = function() {
    return this.getToken(resourcePolicy.REQUIRE, 0);
};

Subject_icon_strictContext.prototype.subject_icon_lv = function() {
    return this.getTypedRuleContext(Subject_icon_lvContext,0);
};

Subject_icon_strictContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject_icon_strict(this);
	}
};

Subject_icon_strictContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject_icon_strict(this);
	}
};

Subject_icon_strictContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject_icon_strict(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Subject_icon_strictContext = Subject_icon_strictContext;

resourcePolicy.prototype.subject_icon_strict = function() {

    var localctx = new Subject_icon_strictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, resourcePolicy.RULE_subject_icon_strict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(resourcePolicy.INCLUDE);
        this.state = 96;
        this.subject_icon();
        this.state = 97;
        this.match(resourcePolicy.REQUIRE);
        this.state = 98;
        this.subject_icon_lv();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Declaration_sectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_declaration_section;
    return this;
}

Declaration_sectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_sectionContext.prototype.constructor = Declaration_sectionContext;

Declaration_sectionContext.prototype.declaration_statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Declaration_statementContext);
    } else {
        return this.getTypedRuleContext(Declaration_statementContext,i);
    }
};

Declaration_sectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterDeclaration_section(this);
	}
};

Declaration_sectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitDeclaration_section(this);
	}
};

Declaration_sectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitDeclaration_section(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Declaration_sectionContext = Declaration_sectionContext;

resourcePolicy.prototype.declaration_section = function() {

    var localctx = new Declaration_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, resourcePolicy.RULE_declaration_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 100;
            this.declaration_statement();
            this.state = 103; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===resourcePolicy.SERVICE_STATE_SCOPE || _la===resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Declaration_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_declaration_statement;
    return this;
}

Declaration_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_statementContext.prototype.constructor = Declaration_statementContext;

Declaration_statementContext.prototype.service_state_constant = function() {
    return this.getTypedRuleContext(Service_state_constantContext,0);
};

Declaration_statementContext.prototype.expression_assignment = function() {
    return this.getTypedRuleContext(Expression_assignmentContext,0);
};

Declaration_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterDeclaration_statement(this);
	}
};

Declaration_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitDeclaration_statement(this);
	}
};

Declaration_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitDeclaration_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Declaration_statementContext = Declaration_statementContext;

resourcePolicy.prototype.declaration_statement = function() {

    var localctx = new Declaration_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, resourcePolicy.RULE_declaration_statement);
    try {
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.SERVICE_STATE_SCOPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 105;
            this.service_state_constant();
            break;
        case resourcePolicy.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 106;
            this.expression_assignment();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Service_state_constantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_service_state_constant;
    return this;
}

Service_state_constantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_state_constantContext.prototype.constructor = Service_state_constantContext;

Service_state_constantContext.prototype.service_state_scope = function() {
    return this.getTypedRuleContext(Service_state_scopeContext,0);
};

Service_state_constantContext.prototype.service_state = function() {
    return this.getTypedRuleContext(Service_stateContext,0);
};

Service_state_constantContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterService_state_constant(this);
	}
};

Service_state_constantContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitService_state_constant(this);
	}
};

Service_state_constantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitService_state_constant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Service_state_constantContext = Service_state_constantContext;

resourcePolicy.prototype.service_state_constant = function() {

    var localctx = new Service_state_constantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, resourcePolicy.RULE_service_state_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.service_state_scope();
        this.state = 110;
        this.service_state();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Service_state_scopeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_service_state_scope;
    return this;
}

Service_state_scopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_state_scopeContext.prototype.constructor = Service_state_scopeContext;

Service_state_scopeContext.prototype.SERVICE_STATE_SCOPE = function() {
    return this.getToken(resourcePolicy.SERVICE_STATE_SCOPE, 0);
};

Service_state_scopeContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterService_state_scope(this);
	}
};

Service_state_scopeContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitService_state_scope(this);
	}
};

Service_state_scopeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitService_state_scope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Service_state_scopeContext = Service_state_scopeContext;

resourcePolicy.prototype.service_state_scope = function() {

    var localctx = new Service_state_scopeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, resourcePolicy.RULE_service_state_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(resourcePolicy.SERVICE_STATE_SCOPE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_definition_sectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_state_definition_section;
    return this;
}

State_definition_sectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_definition_sectionContext.prototype.constructor = State_definition_sectionContext;

State_definition_sectionContext.prototype.state_definition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_definitionContext);
    } else {
        return this.getTypedRuleContext(State_definitionContext,i);
    }
};

State_definition_sectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterState_definition_section(this);
	}
};

State_definition_sectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitState_definition_section(this);
	}
};

State_definition_sectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitState_definition_section(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.State_definition_sectionContext = State_definition_sectionContext;

resourcePolicy.prototype.state_definition_section = function() {

    var localctx = new State_definition_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, resourcePolicy.RULE_state_definition_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 114;
            this.state_definition();
            this.state = 117; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_state_definition;
    return this;
}

State_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_definitionContext.prototype.constructor = State_definitionContext;

State_definitionContext.prototype.state_name = function() {
    return this.getTypedRuleContext(State_nameContext,0);
};

State_definitionContext.prototype.COLON = function() {
    return this.getToken(resourcePolicy.COLON, 0);
};

State_definitionContext.prototype.service_state_definition = function() {
    return this.getTypedRuleContext(Service_state_definitionContext,0);
};

State_definitionContext.prototype.state_transition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_transitionContext);
    } else {
        return this.getTypedRuleContext(State_transitionContext,i);
    }
};

State_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterState_definition(this);
	}
};

State_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitState_definition(this);
	}
};

State_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitState_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.State_definitionContext = State_definitionContext;

resourcePolicy.prototype.state_definition = function() {

    var localctx = new State_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, resourcePolicy.RULE_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.state_name();
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.LBRACKET) {
            this.state = 120;
            this.service_state_definition();
        }

        this.state = 123;
        this.match(resourcePolicy.COLON);
        this.state = 125; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 124;
            this.state_transition();
            this.state = 127; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===resourcePolicy.TERMINATE || _la===resourcePolicy.TILDE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_state_name;
    return this;
}

State_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_nameContext.prototype.constructor = State_nameContext;

State_nameContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};

State_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterState_name(this);
	}
};

State_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitState_name(this);
	}
};

State_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitState_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.State_nameContext = State_nameContext;

resourcePolicy.prototype.state_name = function() {

    var localctx = new State_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, resourcePolicy.RULE_state_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Service_state_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_service_state_definition;
    return this;
}

Service_state_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_state_definitionContext.prototype.constructor = Service_state_definitionContext;

Service_state_definitionContext.prototype.LBRACKET = function() {
    return this.getToken(resourcePolicy.LBRACKET, 0);
};

Service_state_definitionContext.prototype.service_state = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Service_stateContext);
    } else {
        return this.getTypedRuleContext(Service_stateContext,i);
    }
};

Service_state_definitionContext.prototype.RBRACKET = function() {
    return this.getToken(resourcePolicy.RBRACKET, 0);
};

Service_state_definitionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.COMMA);
    } else {
        return this.getToken(resourcePolicy.COMMA, i);
    }
};


Service_state_definitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterService_state_definition(this);
	}
};

Service_state_definitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitService_state_definition(this);
	}
};

Service_state_definitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitService_state_definition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Service_state_definitionContext = Service_state_definitionContext;

resourcePolicy.prototype.service_state_definition = function() {

    var localctx = new Service_state_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, resourcePolicy.RULE_service_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(resourcePolicy.LBRACKET);
        this.state = 132;
        this.service_state();
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.COMMA) {
            this.state = 133;
            this.match(resourcePolicy.COMMA);
            this.state = 134;
            this.service_state();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 140;
        this.match(resourcePolicy.RBRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Service_stateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_service_state;
    return this;
}

Service_stateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_stateContext.prototype.constructor = Service_stateContext;

Service_stateContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};

Service_stateContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterService_state(this);
	}
};

Service_stateContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitService_state(this);
	}
};

Service_stateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitService_state(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Service_stateContext = Service_stateContext;

resourcePolicy.prototype.service_state = function() {

    var localctx = new Service_stateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, resourcePolicy.RULE_service_state);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function State_transitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_state_transition;
    this.terminate = null; // Token
    return this;
}

State_transitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_transitionContext.prototype.constructor = State_transitionContext;

State_transitionContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

State_transitionContext.prototype.EQUANDGT = function() {
    return this.getToken(resourcePolicy.EQUANDGT, 0);
};

State_transitionContext.prototype.state_name = function() {
    return this.getTypedRuleContext(State_nameContext,0);
};

State_transitionContext.prototype.TERMINATE = function() {
    return this.getToken(resourcePolicy.TERMINATE, 0);
};

State_transitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterState_transition(this);
	}
};

State_transitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitState_transition(this);
	}
};

State_transitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitState_transition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.State_transitionContext = State_transitionContext;

resourcePolicy.prototype.state_transition = function() {

    var localctx = new State_transitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, resourcePolicy.RULE_state_transition);
    try {
        this.state = 149;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.TILDE:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.event();
            this.state = 145;
            this.match(resourcePolicy.EQUANDGT);
            this.state = 146;
            this.state_name();
            break;
        case resourcePolicy.TERMINATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 148;
            localctx.terminate = this.match(resourcePolicy.TERMINATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Subject_iconContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject_icon;
    return this;
}

Subject_iconContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_iconContext.prototype.constructor = Subject_iconContext;

Subject_iconContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};

Subject_iconContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject_icon(this);
	}
};

Subject_iconContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject_icon(this);
	}
};

Subject_iconContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject_icon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Subject_iconContext = Subject_iconContext;

resourcePolicy.prototype.subject_icon = function() {

    var localctx = new Subject_iconContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, resourcePolicy.RULE_subject_icon);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Subject_icon_lvContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject_icon_lv;
    return this;
}

Subject_icon_lvContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_icon_lvContext.prototype.constructor = Subject_icon_lvContext;

Subject_icon_lvContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};

Subject_icon_lvContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject_icon_lv(this);
	}
};

Subject_icon_lvContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject_icon_lv(this);
	}
};

Subject_icon_lvContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject_icon_lv(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Subject_icon_lvContext = Subject_icon_lvContext;

resourcePolicy.prototype.subject_icon_lv = function() {

    var localctx = new Subject_icon_lvContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, resourcePolicy.RULE_subject_icon_lv);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expression_assignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression_assignment;
    return this;
}

Expression_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_assignmentContext.prototype.constructor = Expression_assignmentContext;

Expression_assignmentContext.prototype.expression_handle = function() {
    return this.getTypedRuleContext(Expression_handleContext,0);
};

Expression_assignmentContext.prototype.LPAREN = function() {
    return this.getToken(resourcePolicy.LPAREN, 0);
};

Expression_assignmentContext.prototype.RPAREN = function() {
    return this.getToken(resourcePolicy.RPAREN, 0);
};

Expression_assignmentContext.prototype.EQ = function() {
    return this.getToken(resourcePolicy.EQ, 0);
};

Expression_assignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Expression_assignmentContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.ID);
    } else {
        return this.getToken(resourcePolicy.ID, i);
    }
};


Expression_assignmentContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.COMMA);
    } else {
        return this.getToken(resourcePolicy.COMMA, i);
    }
};


Expression_assignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_assignment(this);
	}
};

Expression_assignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_assignment(this);
	}
};

Expression_assignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_assignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Expression_assignmentContext = Expression_assignmentContext;

resourcePolicy.prototype.expression_assignment = function() {

    var localctx = new Expression_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, resourcePolicy.RULE_expression_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.expression_handle();
        this.state = 156;
        this.match(resourcePolicy.LPAREN);
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.ID) {
            this.state = 157;
            this.match(resourcePolicy.ID);
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicy.COMMA) {
                this.state = 158;
                this.match(resourcePolicy.COMMA);
                this.state = 159;
                this.match(resourcePolicy.ID);
                this.state = 164;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 167;
        this.match(resourcePolicy.RPAREN);
        this.state = 168;
        this.match(resourcePolicy.EQ);
        this.state = 169;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expression_handleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression_handle;
    return this;
}

Expression_handleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_handleContext.prototype.constructor = Expression_handleContext;

Expression_handleContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};

Expression_handleContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_handle(this);
	}
};

Expression_handleContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_handle(this);
	}
};

Expression_handleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_handle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Expression_handleContext = Expression_handleContext;

resourcePolicy.prototype.expression_handle = function() {

    var localctx = new Expression_handleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, resourcePolicy.RULE_expression_handle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(resourcePolicy.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.PLUS);
    } else {
        return this.getToken(resourcePolicy.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.MINUS);
    } else {
        return this.getToken(resourcePolicy.MINUS, i);
    }
};


ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.ExpressionContext = ExpressionContext;

resourcePolicy.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, resourcePolicy.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.multiplyingExpression();
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.PLUS || _la===resourcePolicy.MINUS) {
            this.state = 174;
            _la = this._input.LA(1);
            if(!(_la===resourcePolicy.PLUS || _la===resourcePolicy.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 175;
            this.multiplyingExpression();
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.powExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PowExpressionContext);
    } else {
        return this.getTypedRuleContext(PowExpressionContext,i);
    }
};

MultiplyingExpressionContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.TIMES);
    } else {
        return this.getToken(resourcePolicy.TIMES, i);
    }
};


MultiplyingExpressionContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.DIV);
    } else {
        return this.getToken(resourcePolicy.DIV, i);
    }
};


MultiplyingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitMultiplyingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.MultiplyingExpressionContext = MultiplyingExpressionContext;

resourcePolicy.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, resourcePolicy.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.powExpression();
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.TIMES || _la===resourcePolicy.DIV) {
            this.state = 182;
            _la = this._input.LA(1);
            if(!(_la===resourcePolicy.TIMES || _la===resourcePolicy.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 183;
            this.powExpression();
            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PowExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_powExpression;
    return this;
}

PowExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowExpressionContext.prototype.constructor = PowExpressionContext;

PowExpressionContext.prototype.signedAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignedAtomContext);
    } else {
        return this.getTypedRuleContext(SignedAtomContext,i);
    }
};

PowExpressionContext.prototype.POW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.POW);
    } else {
        return this.getToken(resourcePolicy.POW, i);
    }
};


PowExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterPowExpression(this);
	}
};

PowExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitPowExpression(this);
	}
};

PowExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitPowExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.PowExpressionContext = PowExpressionContext;

resourcePolicy.prototype.powExpression = function() {

    var localctx = new PowExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, resourcePolicy.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.signedAtom();
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.POW) {
            this.state = 190;
            this.match(resourcePolicy.POW);
            this.state = 191;
            this.signedAtom();
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SignedAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.PLUS = function() {
    return this.getToken(resourcePolicy.PLUS, 0);
};

SignedAtomContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
};

SignedAtomContext.prototype.MINUS = function() {
    return this.getToken(resourcePolicy.MINUS, 0);
};

SignedAtomContext.prototype.built_in_function = function() {
    return this.getTypedRuleContext(Built_in_functionContext,0);
};

SignedAtomContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

SignedAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSignedAtom(this);
	}
};

SignedAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSignedAtom(this);
	}
};

SignedAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSignedAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.SignedAtomContext = SignedAtomContext;

resourcePolicy.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, resourcePolicy.RULE_signedAtom);
    try {
        this.state = 203;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.PLUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 197;
            this.match(resourcePolicy.PLUS);
            this.state = 198;
            this.signedAtom();
            break;
        case resourcePolicy.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
            this.match(resourcePolicy.MINUS);
            this.state = 200;
            this.signedAtom();
            break;
        case resourcePolicy.SUM:
            this.enterOuterAlt(localctx, 3);
            this.state = 201;
            this.built_in_function();
            break;
        case resourcePolicy.PI:
        case resourcePolicy.EULER:
        case resourcePolicy.LPAREN:
        case resourcePolicy.SCIENTIFIC_NUMBER:
        case resourcePolicy.VARIABLE_CONTRACT:
        case resourcePolicy.INT:
        case resourcePolicy.ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 202;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Built_in_functionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_built_in_function;
    return this;
}

Built_in_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Built_in_functionContext.prototype.constructor = Built_in_functionContext;

Built_in_functionContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

Built_in_functionContext.prototype.LPAREN = function() {
    return this.getToken(resourcePolicy.LPAREN, 0);
};

Built_in_functionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Built_in_functionContext.prototype.RPAREN = function() {
    return this.getToken(resourcePolicy.RPAREN, 0);
};

Built_in_functionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.COMMA);
    } else {
        return this.getToken(resourcePolicy.COMMA, i);
    }
};


Built_in_functionContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterBuilt_in_function(this);
	}
};

Built_in_functionContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitBuilt_in_function(this);
	}
};

Built_in_functionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitBuilt_in_function(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Built_in_functionContext = Built_in_functionContext;

resourcePolicy.prototype.built_in_function = function() {

    var localctx = new Built_in_functionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, resourcePolicy.RULE_built_in_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.funcname();
        this.state = 206;
        this.match(resourcePolicy.LPAREN);
        this.state = 207;
        this.expression();
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.COMMA) {
            this.state = 208;
            this.match(resourcePolicy.COMMA);
            this.state = 209;
            this.expression();
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 215;
        this.match(resourcePolicy.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.SUM = function() {
    return this.getToken(resourcePolicy.SUM, 0);
};

FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitFuncname(this);
	}
};

FuncnameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitFuncname(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.FuncnameContext = FuncnameContext;

resourcePolicy.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, resourcePolicy.RULE_funcname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(resourcePolicy.SUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

AtomContext.prototype.LPAREN = function() {
    return this.getToken(resourcePolicy.LPAREN, 0);
};

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.RPAREN = function() {
    return this.getToken(resourcePolicy.RPAREN, 0);
};

AtomContext.prototype.INT = function() {
    return this.getToken(resourcePolicy.INT, 0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.AtomContext = AtomContext;

resourcePolicy.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, resourcePolicy.RULE_atom);
    try {
        this.state = 227;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 219;
            this.scientific();
            break;
        case resourcePolicy.PI:
        case resourcePolicy.EULER:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.constant();
            break;
        case resourcePolicy.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 221;
            this.match(resourcePolicy.LPAREN);
            this.state = 222;
            this.expression();
            this.state = 223;
            this.match(resourcePolicy.RPAREN);
            break;
        case resourcePolicy.INT:
            this.enterOuterAlt(localctx, 4);
            this.state = 225;
            this.match(resourcePolicy.INT);
            break;
        case resourcePolicy.VARIABLE_CONTRACT:
        case resourcePolicy.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 226;
            this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(resourcePolicy.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitScientific(this);
	}
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.ScientificContext = ScientificContext;

resourcePolicy.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, resourcePolicy.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(resourcePolicy.SCIENTIFIC_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(resourcePolicy.PI, 0);
};

ConstantContext.prototype.EULER = function() {
    return this.getToken(resourcePolicy.EULER, 0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.ConstantContext = ConstantContext;

resourcePolicy.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, resourcePolicy.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        _la = this._input.LA(1);
        if(!(_la===resourcePolicy.PI || _la===resourcePolicy.EULER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;


 
VariableContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VariableEnvironmentContext(parser, ctx) {
	VariableContext.call(this, parser);
    VariableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableEnvironmentContext.prototype = Object.create(VariableContext.prototype);
VariableEnvironmentContext.prototype.constructor = VariableEnvironmentContext;

resourcePolicy.VariableEnvironmentContext = VariableEnvironmentContext;

VariableEnvironmentContext.prototype.environment_variable = function() {
    return this.getTypedRuleContext(Environment_variableContext,0);
};
VariableEnvironmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterVariableEnvironment(this);
	}
};

VariableEnvironmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitVariableEnvironment(this);
	}
};

VariableEnvironmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitVariableEnvironment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function VariableArgContext(parser, ctx) {
	VariableContext.call(this, parser);
    VariableContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VariableArgContext.prototype = Object.create(VariableContext.prototype);
VariableArgContext.prototype.constructor = VariableArgContext;

resourcePolicy.VariableArgContext = VariableArgContext;

VariableArgContext.prototype.ID = function() {
    return this.getToken(resourcePolicy.ID, 0);
};
VariableArgContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterVariableArg(this);
	}
};

VariableArgContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitVariableArg(this);
	}
};

VariableArgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitVariableArg(this);
    } else {
        return visitor.visitChildren(this);
    }
};



resourcePolicy.VariableContext = VariableContext;

resourcePolicy.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, resourcePolicy.RULE_variable);
    try {
        this.state = 235;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.VARIABLE_CONTRACT:
            localctx = new VariableEnvironmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.environment_variable();
            break;
        case resourcePolicy.ID:
            localctx = new VariableArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.match(resourcePolicy.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expression_call_or_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression_call_or_literal;
    return this;
}

Expression_call_or_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_call_or_literalContext.prototype.constructor = Expression_call_or_literalContext;

Expression_call_or_literalContext.prototype.expression_call = function() {
    return this.getTypedRuleContext(Expression_callContext,0);
};

Expression_call_or_literalContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Expression_call_or_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_call_or_literal(this);
	}
};

Expression_call_or_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_call_or_literal(this);
	}
};

Expression_call_or_literalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_call_or_literal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Expression_call_or_literalContext = Expression_call_or_literalContext;

resourcePolicy.prototype.expression_call_or_literal = function() {

    var localctx = new Expression_call_or_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, resourcePolicy.RULE_expression_call_or_literal);
    try {
        this.state = 239;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 237;
            this.expression_call();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 238;
            this.expression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expression_callContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression_call;
    return this;
}

Expression_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_callContext.prototype.constructor = Expression_callContext;

Expression_callContext.prototype.expression_handle = function() {
    return this.getTypedRuleContext(Expression_handleContext,0);
};

Expression_callContext.prototype.LPAREN = function() {
    return this.getToken(resourcePolicy.LPAREN, 0);
};

Expression_callContext.prototype.RPAREN = function() {
    return this.getToken(resourcePolicy.RPAREN, 0);
};

Expression_callContext.prototype.expression_call_argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Expression_call_argumentContext);
    } else {
        return this.getTypedRuleContext(Expression_call_argumentContext,i);
    }
};

Expression_callContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.COMMA);
    } else {
        return this.getToken(resourcePolicy.COMMA, i);
    }
};


Expression_callContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_call(this);
	}
};

Expression_callContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_call(this);
	}
};

Expression_callContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_call(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Expression_callContext = Expression_callContext;

resourcePolicy.prototype.expression_call = function() {

    var localctx = new Expression_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, resourcePolicy.RULE_expression_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.expression_handle();
        this.state = 242;
        this.match(resourcePolicy.LPAREN);
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.VARIABLE_CONTRACT || _la===resourcePolicy.INT) {
            this.state = 243;
            this.expression_call_argument();
            this.state = 248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicy.COMMA) {
                this.state = 244;
                this.match(resourcePolicy.COMMA);
                this.state = 245;
                this.expression_call_argument();
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 256;
        this.match(resourcePolicy.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Expression_call_argumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_expression_call_argument;
    return this;
}

Expression_call_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_call_argumentContext.prototype.constructor = Expression_call_argumentContext;

Expression_call_argumentContext.prototype.INT = function() {
    return this.getToken(resourcePolicy.INT, 0);
};

Expression_call_argumentContext.prototype.environment_variable = function() {
    return this.getTypedRuleContext(Environment_variableContext,0);
};

Expression_call_argumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_call_argument(this);
	}
};

Expression_call_argumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_call_argument(this);
	}
};

Expression_call_argumentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_call_argument(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Expression_call_argumentContext = Expression_call_argumentContext;

resourcePolicy.prototype.expression_call_argument = function() {

    var localctx = new Expression_call_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, resourcePolicy.RULE_expression_call_argument);
    try {
        this.state = 260;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 258;
            this.match(resourcePolicy.INT);
            break;
        case resourcePolicy.VARIABLE_CONTRACT:
            this.enterOuterAlt(localctx, 2);
            this.state = 259;
            this.environment_variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Environment_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_environment_variable;
    return this;
}

Environment_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Environment_variableContext.prototype.constructor = Environment_variableContext;

Environment_variableContext.prototype.VARIABLE_CONTRACT = function() {
    return this.getToken(resourcePolicy.VARIABLE_CONTRACT, 0);
};

Environment_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEnvironment_variable(this);
	}
};

Environment_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEnvironment_variable(this);
	}
};

Environment_variableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEnvironment_variable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Environment_variableContext = Environment_variableContext;

resourcePolicy.prototype.environment_variable = function() {

    var localctx = new Environment_variableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, resourcePolicy.RULE_environment_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.match(resourcePolicy.VARIABLE_CONTRACT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_event;
    this.eventName = null; // Token
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.TILDE = function() {
    return this.getToken(resourcePolicy.TILDE, 0);
};

EventContext.prototype.event_organization = function() {
    return this.getTypedRuleContext(Event_organizationContext,0);
};

EventContext.prototype.EVENT_POINT = function() {
    return this.getToken(resourcePolicy.EVENT_POINT, 0);
};

EventContext.prototype.EVENT_LPAREN = function() {
    return this.getToken(resourcePolicy.EVENT_LPAREN, 0);
};

EventContext.prototype.EVENT_RPAREN = function() {
    return this.getToken(resourcePolicy.EVENT_RPAREN, 0);
};

EventContext.prototype.EVENT_SERVICE_PATH_NAME = function() {
    return this.getToken(resourcePolicy.EVENT_SERVICE_PATH_NAME, 0);
};

EventContext.prototype.event_args = function() {
    return this.getTypedRuleContext(Event_argsContext,0);
};

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent(this);
	}
};

EventContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.EventContext = EventContext;

resourcePolicy.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, resourcePolicy.RULE_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(resourcePolicy.TILDE);
        this.state = 265;
        this.event_organization();
        this.state = 266;
        this.match(resourcePolicy.EVENT_POINT);
        this.state = 267;
        localctx.eventName = this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 268;
        this.match(resourcePolicy.EVENT_LPAREN);
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.EVENT_ARG) {
            this.state = 269;
            this.event_args();
        }

        this.state = 272;
        this.match(resourcePolicy.EVENT_RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_organizationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_event_organization;
    this.eventService = null; // Token
    return this;
}

Event_organizationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_organizationContext.prototype.constructor = Event_organizationContext;

Event_organizationContext.prototype.EVENT_SERVICE_PATH_NAME = function() {
    return this.getToken(resourcePolicy.EVENT_SERVICE_PATH_NAME, 0);
};

Event_organizationContext.prototype.EVENT_POINT = function() {
    return this.getToken(resourcePolicy.EVENT_POINT, 0);
};

Event_organizationContext.prototype.event_path = function() {
    return this.getTypedRuleContext(Event_pathContext,0);
};

Event_organizationContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent_organization(this);
	}
};

Event_organizationContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent_organization(this);
	}
};

Event_organizationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent_organization(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Event_organizationContext = Event_organizationContext;

resourcePolicy.prototype.event_organization = function() {

    var localctx = new Event_organizationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, resourcePolicy.RULE_event_organization);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        localctx.eventService = this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 277;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        if(la_===1) {
            this.state = 275;
            this.match(resourcePolicy.EVENT_POINT);
            this.state = 276;
            this.event_path();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_pathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_event_path;
    return this;
}

Event_pathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_pathContext.prototype.constructor = Event_pathContext;

Event_pathContext.prototype.EVENT_SERVICE_PATH_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_SERVICE_PATH_NAME);
    } else {
        return this.getToken(resourcePolicy.EVENT_SERVICE_PATH_NAME, i);
    }
};


Event_pathContext.prototype.EVENT_POINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_POINT);
    } else {
        return this.getToken(resourcePolicy.EVENT_POINT, i);
    }
};


Event_pathContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent_path(this);
	}
};

Event_pathContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent_path(this);
	}
};

Event_pathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent_path(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Event_pathContext = Event_pathContext;

resourcePolicy.prototype.event_path = function() {

    var localctx = new Event_pathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, resourcePolicy.RULE_event_path);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 284;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 280;
                this.match(resourcePolicy.EVENT_POINT);
                this.state = 281;
                this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME); 
            }
            this.state = 286;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Event_argsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_event_args;
    return this;
}

Event_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_argsContext.prototype.constructor = Event_argsContext;

Event_argsContext.prototype.EVENT_ARG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_ARG);
    } else {
        return this.getToken(resourcePolicy.EVENT_ARG, i);
    }
};


Event_argsContext.prototype.EVENT_COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_COMMA);
    } else {
        return this.getToken(resourcePolicy.EVENT_COMMA, i);
    }
};


Event_argsContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent_args(this);
	}
};

Event_argsContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent_args(this);
	}
};

Event_argsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent_args(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Event_argsContext = Event_argsContext;

resourcePolicy.prototype.event_args = function() {

    var localctx = new Event_argsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, resourcePolicy.RULE_event_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(resourcePolicy.EVENT_ARG);
        this.state = 292;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.EVENT_COMMA) {
            this.state = 288;
            this.match(resourcePolicy.EVENT_COMMA);
            this.state = 289;
            this.match(resourcePolicy.EVENT_ARG);
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


resourcePolicy.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.audience_clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

resourcePolicy.prototype.audience_clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.resourcePolicy = resourcePolicy;
