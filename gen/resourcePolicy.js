// Generated from tmp\resourcePolicy.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var resourcePolicyListener = require('./resourcePolicyListener').resourcePolicyListener;
var resourcePolicyVisitor = require('./resourcePolicyVisitor').resourcePolicyVisitor;

var grammarFileName = "resourcePolicy.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00039\u014a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0005\u0002W\n\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "[\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004f\n\u0004",
    "\f\u0004\u000e\u0004i\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0006\bt\n\b\r\b\u000e\bu\u0003\t\u0003\t\u0005\tz\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\f\u0082\n\f\r\f\u000e",
    "\f\u0083\u0003\r\u0003\r\u0005\r\u0088\n\r\u0003\r\u0003\r\u0006\r\u008c",
    "\n\r\r\r\u000e\r\u008d\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000f\u0096\n\u000f\f\u000f\u000e\u000f",
    "\u0099\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00a4",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00ad\n\u0013\f\u0013\u000e\u0013",
    "\u00b0\u000b\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0007\u0018\u00c3\n\u0018\f\u0018\u000e\u0018\u00c6\u000b\u0018",
    "\u0005\u0018\u00c8\n\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0007",
    "\u001a\u00d3\n\u001a\f\u001a\u000e\u001a\u00d6\u000b\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0007\u001b\u00db\n\u001b\f\u001b\u000e\u001b",
    "\u00de\u000b\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u00e3",
    "\n\u001c\f\u001c\u000e\u001c\u00e6\u000b\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u00ee\n",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007",
    "\u001e\u00f5\n\u001e\f\u001e\u000e\u001e\u00f8\u000b\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u0106\n \u0003!\u0003!\u0003\"\u0003\"",
    "\u0003#\u0003#\u0005#\u010e\n#\u0003$\u0003$\u0005$\u0112\n$\u0003%",
    "\u0003%\u0003%\u0003%\u0003%\u0007%\u0119\n%\f%\u000e%\u011c\u000b%",
    "\u0007%\u011e\n%\f%\u000e%\u0121\u000b%\u0003%\u0003%\u0003&\u0003&",
    "\u0005&\u0127\n&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(",
    "\u0003(\u0005(\u0131\n(\u0003(\u0003(\u0003(\u0005(\u0136\n(\u0003(",
    "\u0003(\u0003)\u0003)\u0003)\u0007)\u013d\n)\f)\u000e)\u0140\u000b)",
    "\u0003*\u0003*\u0003*\u0007*\u0145\n*\f*\u000e*\u0148\u000b*\u0003*",
    "\u0002\u0003\u0006+\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0002\u0006",
    "\u0004\u0002\u0004\u0007  \u0003\u0002\u0018\u0019\u0003\u0002\u001a",
    "\u001b\u0003\u0002\r\u000e\u0002\u0144\u0002T\u0003\u0002\u0002\u0002",
    "\u0004\\\u0003\u0002\u0002\u0002\u0006_\u0003\u0002\u0002\u0002\bj\u0003",
    "\u0002\u0002\u0002\nl\u0003\u0002\u0002\u0002\fo\u0003\u0002\u0002\u0002",
    "\u000es\u0003\u0002\u0002\u0002\u0010y\u0003\u0002\u0002\u0002\u0012",
    "{\u0003\u0002\u0002\u0002\u0014~\u0003\u0002\u0002\u0002\u0016\u0081",
    "\u0003\u0002\u0002\u0002\u0018\u0085\u0003\u0002\u0002\u0002\u001a\u008f",
    "\u0003\u0002\u0002\u0002\u001c\u0091\u0003\u0002\u0002\u0002\u001e\u009c",
    "\u0003\u0002\u0002\u0002 \u00a3\u0003\u0002\u0002\u0002\"\u00a5\u0003",
    "\u0002\u0002\u0002$\u00ae\u0003\u0002\u0002\u0002&\u00b1\u0003\u0002",
    "\u0002\u0002(\u00b3\u0003\u0002\u0002\u0002*\u00b9\u0003\u0002\u0002",
    "\u0002,\u00bb\u0003\u0002\u0002\u0002.\u00bd\u0003\u0002\u0002\u0002",
    "0\u00cd\u0003\u0002\u0002\u00022\u00cf\u0003\u0002\u0002\u00024\u00d7",
    "\u0003\u0002\u0002\u00026\u00df\u0003\u0002\u0002\u00028\u00ed\u0003",
    "\u0002\u0002\u0002:\u00ef\u0003\u0002\u0002\u0002<\u00fb\u0003\u0002",
    "\u0002\u0002>\u0105\u0003\u0002\u0002\u0002@\u0107\u0003\u0002\u0002",
    "\u0002B\u0109\u0003\u0002\u0002\u0002D\u010d\u0003\u0002\u0002\u0002",
    "F\u0111\u0003\u0002\u0002\u0002H\u0113\u0003\u0002\u0002\u0002J\u0126",
    "\u0003\u0002\u0002\u0002L\u0128\u0003\u0002\u0002\u0002N\u012a\u0003",
    "\u0002\u0002\u0002P\u0139\u0003\u0002\u0002\u0002R\u0141\u0003\u0002",
    "\u0002\u0002TV\u0005\u0004\u0003\u0002UW\u0005\u000e\b\u0002VU\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
    "XZ\u0005\u0016\f\u0002Y[\u0007\u0002\u0002\u0003ZY\u0003\u0002\u0002",
    "\u0002Z[\u0003\u0002\u0002\u0002[\u0003\u0003\u0002\u0002\u0002\\]\u0007",
    "\u0003\u0002\u0002]^\u0005\u0006\u0004\u0002^\u0005\u0003\u0002\u0002",
    "\u0002_`\b\u0004\u0001\u0002`a\u0005\b\u0005\u0002ag\u0003\u0002\u0002",
    "\u0002bc\f\u0003\u0002\u0002cd\u0007\u000f\u0002\u0002df\u0005\u0006",
    "\u0004\u0004eb\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002h\u0007\u0003\u0002\u0002",
    "\u0002ig\u0003\u0002\u0002\u0002jk\t\u0002\u0002\u0002k\t\u0003\u0002",
    "\u0002\u0002lm\u0007\b\u0002\u0002mn\u0005\f\u0007\u0002n\u000b\u0003",
    "\u0002\u0002\u0002op\u0007\t\u0002\u0002pq\u0005(\u0015\u0002q\r\u0003",
    "\u0002\u0002\u0002rt\u0005\u0010\t\u0002sr\u0003\u0002\u0002\u0002t",
    "u\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002v\u000f\u0003\u0002\u0002\u0002wz\u0005\u0012\n\u0002xz\u0005",
    ".\u0018\u0002yw\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z\u0011",
    "\u0003\u0002\u0002\u0002{|\u0005\u0014\u000b\u0002|}\u0005\u001e\u0010",
    "\u0002}\u0013\u0003\u0002\u0002\u0002~\u007f\u0007\n\u0002\u0002\u007f",
    "\u0015\u0003\u0002\u0002\u0002\u0080\u0082\u0005\u0018\r\u0002\u0081",
    "\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084",
    "\u0017\u0003\u0002\u0002\u0002\u0085\u0087\u0005\u001a\u000e\u0002\u0086",
    "\u0088\u0005\u001c\u000f\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089",
    "\u008b\u0007\u0011\u0002\u0002\u008a\u008c\u0005 \u0011\u0002\u008b",
    "\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e",
    "\u0019\u0003\u0002\u0002\u0002\u008f\u0090\u0007+\u0002\u0002\u0090",
    "\u001b\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0016\u0002\u0002\u0092",
    "\u0097\u0005\u001e\u0010\u0002\u0093\u0094\u0007\u000f\u0002\u0002\u0094",
    "\u0096\u0005\u001e\u0010\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096",
    "\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0003\u0002\u0002\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099",
    "\u0097\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0017\u0002\u0002\u009b",
    "\u001d\u0003\u0002\u0002\u0002\u009c\u009d\u0007+\u0002\u0002\u009d",
    "\u001f\u0003\u0002\u0002\u0002\u009e\u009f\u0005N(\u0002\u009f\u00a0",
    "\u0007\u001f\u0002\u0002\u00a0\u00a1\u0005\u001a\u000e\u0002\u00a1\u00a4",
    "\u0003\u0002\u0002\u0002\u00a2\u00a4\u0007\u000b\u0002\u0002\u00a3\u009e",
    "\u0003\u0002\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4!",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0005(\u0015\u0002\u00a6\u00a7",
    "\b\u0012\u0001\u0002\u00a7#\u0003\u0002\u0002\u0002\u00a8\u00ad\u0005",
    "&\u0014\u0002\u00a9\u00ad\u0005(\u0015\u0002\u00aa\u00ad\u0005*\u0016",
    "\u0002\u00ab\u00ad\u0005,\u0017\u0002\u00ac\u00a8\u0003\u0002\u0002",
    "\u0002\u00ac\u00a9\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00b0\u0003\u0002\u0002",
    "\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af%\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002",
    "\u0002\u00b1\u00b2\u0007#\u0002\u0002\u00b2\'\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0005*\u0016\u0002\u00b4\u00b5\u0007\u0010\u0002\u0002",
    "\u00b5\u00b6\u0005,\u0017\u0002\u00b6\u00b7\u0007\u0010\u0002\u0002",
    "\u00b7\u00b8\u0007&\u0002\u0002\u00b8)\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0007$\u0002\u0002\u00ba+\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0007%\u0002\u0002\u00bc-\u0003\u0002\u0002\u0002\u00bd\u00be\u0005",
    "0\u0019\u0002\u00be\u00c7\u0007\u0014\u0002\u0002\u00bf\u00c4\u0007",
    "+\u0002\u0002\u00c0\u00c1\u0007\u000f\u0002\u0002\u00c1\u00c3\u0007",
    "+\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003",
    "\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003",
    "\u0002\u0002\u0002\u00c7\u00bf\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007",
    "\u0015\u0002\u0002\u00ca\u00cb\u0007\u001d\u0002\u0002\u00cb\u00cc\u0005",
    "2\u001a\u0002\u00cc/\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007+\u0002",
    "\u0002\u00ce1\u0003\u0002\u0002\u0002\u00cf\u00d4\u00054\u001b\u0002",
    "\u00d0\u00d1\t\u0003\u0002\u0002\u00d1\u00d3\u00054\u001b\u0002\u00d2",
    "\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4",
    "\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5",
    "3\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7",
    "\u00dc\u00056\u001c\u0002\u00d8\u00d9\t\u0004\u0002\u0002\u00d9\u00db",
    "\u00056\u001c\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00de",
    "\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd",
    "\u0003\u0002\u0002\u0002\u00dd5\u0003\u0002\u0002\u0002\u00de\u00dc",
    "\u0003\u0002\u0002\u0002\u00df\u00e4\u00058\u001d\u0002\u00e0\u00e1",
    "\u0007\u001c\u0002\u0002\u00e1\u00e3\u00058\u001d\u0002\u00e2\u00e0",
    "\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002\u0002\u00e57",
    "\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\u0007\u0018\u0002\u0002\u00e8\u00ee\u00058\u001d\u0002\u00e9\u00ea",
    "\u0007\u0019\u0002\u0002\u00ea\u00ee\u00058\u001d\u0002\u00eb\u00ee",
    "\u0005:\u001e\u0002\u00ec\u00ee\u0005> \u0002\u00ed\u00e7\u0003\u0002",
    "\u0002\u0002\u00ed\u00e9\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002",
    "\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee9\u0003\u0002",
    "\u0002\u0002\u00ef\u00f0\u0005<\u001f\u0002\u00f0\u00f1\u0007\u0014",
    "\u0002\u0002\u00f1\u00f6\u00052\u001a\u0002\u00f2\u00f3\u0007\u000f",
    "\u0002\u0002\u00f3\u00f5\u00052\u001a\u0002\u00f4\u00f2\u0003\u0002",
    "\u0002\u0002\u00f5\u00f8\u0003\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f9\u0003\u0002",
    "\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u0015",
    "\u0002\u0002\u00fa;\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007\f\u0002",
    "\u0002\u00fc=\u0003\u0002\u0002\u0002\u00fd\u0106\u0005@!\u0002\u00fe",
    "\u0106\u0005B\"\u0002\u00ff\u0100\u0007\u0014\u0002\u0002\u0100\u0101",
    "\u00052\u001a\u0002\u0101\u0102\u0007\u0015\u0002\u0002\u0102\u0106",
    "\u0003\u0002\u0002\u0002\u0103\u0106\u0007*\u0002\u0002\u0104\u0106",
    "\u0005D#\u0002\u0105\u00fd\u0003\u0002\u0002\u0002\u0105\u00fe\u0003",
    "\u0002\u0002\u0002\u0105\u00ff\u0003\u0002\u0002\u0002\u0105\u0103\u0003",
    "\u0002\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106?\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0007\'\u0002\u0002\u0108A\u0003\u0002",
    "\u0002\u0002\u0109\u010a\t\u0005\u0002\u0002\u010aC\u0003\u0002\u0002",
    "\u0002\u010b\u010e\u0005L\'\u0002\u010c\u010e\u0007+\u0002\u0002\u010d",
    "\u010b\u0003\u0002\u0002\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010e",
    "E\u0003\u0002\u0002\u0002\u010f\u0112\u0005H%\u0002\u0110\u0112\u0005",
    "2\u001a\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0110\u0003",
    "\u0002\u0002\u0002\u0112G\u0003\u0002\u0002\u0002\u0113\u0114\u0005",
    "0\u0019\u0002\u0114\u011f\u0007\u0014\u0002\u0002\u0115\u011a\u0005",
    "J&\u0002\u0116\u0117\u0007\u000f\u0002\u0002\u0117\u0119\u0005J&\u0002",
    "\u0118\u0116\u0003\u0002\u0002\u0002\u0119\u011c\u0003\u0002\u0002\u0002",
    "\u011a\u0118\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002",
    "\u011b\u011e\u0003\u0002\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002",
    "\u011d\u0115\u0003\u0002\u0002\u0002\u011e\u0121\u0003\u0002\u0002\u0002",
    "\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002",
    "\u0120\u0122\u0003\u0002\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0007\u0015\u0002\u0002\u0123I\u0003\u0002\u0002\u0002",
    "\u0124\u0127\u0007*\u0002\u0002\u0125\u0127\u0005L\'\u0002\u0126\u0124",
    "\u0003\u0002\u0002\u0002\u0126\u0125\u0003\u0002\u0002\u0002\u0127K",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0007(\u0002\u0002\u0129M\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0007\u001e\u0002\u0002\u012b\u012c\u0007",
    "3\u0002\u0002\u012c\u0130\u00076\u0002\u0002\u012d\u012e\u0005P)\u0002",
    "\u012e\u012f\u00076\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002",
    "\u0130\u012d\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0003\u0002\u0002\u0002\u0132\u0133\u00073\u0002\u0002",
    "\u0133\u0135\u00077\u0002\u0002\u0134\u0136\u0005R*\u0002\u0135\u0134",
    "\u0003\u0002\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u0137",
    "\u0003\u0002\u0002\u0002\u0137\u0138\u00078\u0002\u0002\u0138O\u0003",
    "\u0002\u0002\u0002\u0139\u013e\u00073\u0002\u0002\u013a\u013b\u0007",
    "6\u0002\u0002\u013b\u013d\u00073\u0002\u0002\u013c\u013a\u0003\u0002",
    "\u0002\u0002\u013d\u0140\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002",
    "\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013fQ\u0003\u0002",
    "\u0002\u0002\u0140\u013e\u0003\u0002\u0002\u0002\u0141\u0146\u00074",
    "\u0002\u0002\u0142\u0143\u00075\u0002\u0002\u0143\u0145\u00074\u0002",
    "\u0002\u0144\u0142\u0003\u0002\u0002\u0002\u0145\u0148\u0003\u0002\u0002",
    "\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0146\u0147\u0003\u0002\u0002",
    "\u0002\u0147S\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002",
    "\u0002\u001fVZguy\u0083\u0087\u008d\u0097\u00a3\u00ac\u00ae\u00c4\u00c7",
    "\u00d4\u00dc\u00e4\u00ed\u00f6\u0105\u010d\u0111\u011a\u011f\u0126\u0130",
    "\u0135\u013e\u0146"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'for'", "'public'", "'nodes'", "'userGroup'", 
                     "'registeredUsers'", "'require'", "'contract with'", 
                     "'always'", "'terminate'", "'sum'", "'pi'", "'e'", 
                     null, null, "':'", "'<'", "'>'", null, null, "'['", 
                     "']'", "'+'", "'-'", "'*'", "'/'", "'^'", "'='", "'~'", 
                     "'=>'", null, null, null, null, null, null, null, null, 
                     null, "'exhibited'" ];

var symbolicNames = [ null, "FOR", "PUBLIC", "NODES", "USER_GROUP", "REGISTERED_USERS", 
                      "REQUIRE", "CONTRACT_WITH", "SERVICE_STATE_SCOPE", 
                      "TERMINATE", "SUM", "PI", "EULER", "COMMA", "POINT", 
                      "COLON", "LT", "GT", "LPAREN", "RPAREN", "LBRACKET", 
                      "RBRACKET", "PLUS", "MINUS", "TIMES", "DIV", "POW", 
                      "EQ", "TILDE", "EQUANDGT", "USER_ID", "PHONE_NUMBER_CN_MOBILE", 
                      "EMAIL", "ACCOUNT_NUMBER", "SUBJECT_SERVICE_NAME", 
                      "UOID", "SUBJECT_ID", "SCIENTIFIC_NUMBER", "VARIABLE_CONTRACT", 
                      "VARIABLE_CONTRACT_ATTRIBUTE", "INT", "ID", "PERIOD", 
                      "DATE", "TIME", "MONEY_AMOUNT", "COMMENT", "COMMENT_LINE", 
                      "WS", "EVENT_SERVICE_PATH_NAME", "EVENT_ARG", "EVENT_COMMA", 
                      "EVENT_POINT", "EVENT_LPAREN", "EVENT_RPAREN", "EVENT_WS" ];

var ruleNames =  [ "policy", "audience_strict", "audience_clause", "audience", 
                   "requirement", "contract_with_subject", "declaration_section", 
                   "declaration_statement", "service_state_constant", "service_state_scope", 
                   "state_definition_section", "state_definition", "state_name", 
                   "service_state_definition", "service_state", "state_transition", 
                   "subject_id", "entity_bracket", "account", "subject", 
                   "subject_service", "user_organization_name", "expression_assignment", 
                   "expression_handle", "expression", "multiplyingExpression", 
                   "powExpression", "signedAtom", "built_in_function", "funcname", 
                   "atom", "scientific", "constant", "variable", "expression_call_or_literal", 
                   "expression_call", "expression_call_argument", "environment_variable", 
                   "event", "event_path", "event_args" ];

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
resourcePolicy.REQUIRE = 6;
resourcePolicy.CONTRACT_WITH = 7;
resourcePolicy.SERVICE_STATE_SCOPE = 8;
resourcePolicy.TERMINATE = 9;
resourcePolicy.SUM = 10;
resourcePolicy.PI = 11;
resourcePolicy.EULER = 12;
resourcePolicy.COMMA = 13;
resourcePolicy.POINT = 14;
resourcePolicy.COLON = 15;
resourcePolicy.LT = 16;
resourcePolicy.GT = 17;
resourcePolicy.LPAREN = 18;
resourcePolicy.RPAREN = 19;
resourcePolicy.LBRACKET = 20;
resourcePolicy.RBRACKET = 21;
resourcePolicy.PLUS = 22;
resourcePolicy.MINUS = 23;
resourcePolicy.TIMES = 24;
resourcePolicy.DIV = 25;
resourcePolicy.POW = 26;
resourcePolicy.EQ = 27;
resourcePolicy.TILDE = 28;
resourcePolicy.EQUANDGT = 29;
resourcePolicy.USER_ID = 30;
resourcePolicy.PHONE_NUMBER_CN_MOBILE = 31;
resourcePolicy.EMAIL = 32;
resourcePolicy.ACCOUNT_NUMBER = 33;
resourcePolicy.SUBJECT_SERVICE_NAME = 34;
resourcePolicy.UOID = 35;
resourcePolicy.SUBJECT_ID = 36;
resourcePolicy.SCIENTIFIC_NUMBER = 37;
resourcePolicy.VARIABLE_CONTRACT = 38;
resourcePolicy.VARIABLE_CONTRACT_ATTRIBUTE = 39;
resourcePolicy.INT = 40;
resourcePolicy.ID = 41;
resourcePolicy.PERIOD = 42;
resourcePolicy.DATE = 43;
resourcePolicy.TIME = 44;
resourcePolicy.MONEY_AMOUNT = 45;
resourcePolicy.COMMENT = 46;
resourcePolicy.COMMENT_LINE = 47;
resourcePolicy.WS = 48;
resourcePolicy.EVENT_SERVICE_PATH_NAME = 49;
resourcePolicy.EVENT_ARG = 50;
resourcePolicy.EVENT_COMMA = 51;
resourcePolicy.EVENT_POINT = 52;
resourcePolicy.EVENT_LPAREN = 53;
resourcePolicy.EVENT_RPAREN = 54;
resourcePolicy.EVENT_WS = 55;

resourcePolicy.RULE_policy = 0;
resourcePolicy.RULE_audience_strict = 1;
resourcePolicy.RULE_audience_clause = 2;
resourcePolicy.RULE_audience = 3;
resourcePolicy.RULE_requirement = 4;
resourcePolicy.RULE_contract_with_subject = 5;
resourcePolicy.RULE_declaration_section = 6;
resourcePolicy.RULE_declaration_statement = 7;
resourcePolicy.RULE_service_state_constant = 8;
resourcePolicy.RULE_service_state_scope = 9;
resourcePolicy.RULE_state_definition_section = 10;
resourcePolicy.RULE_state_definition = 11;
resourcePolicy.RULE_state_name = 12;
resourcePolicy.RULE_service_state_definition = 13;
resourcePolicy.RULE_service_state = 14;
resourcePolicy.RULE_state_transition = 15;
resourcePolicy.RULE_subject_id = 16;
resourcePolicy.RULE_entity_bracket = 17;
resourcePolicy.RULE_account = 18;
resourcePolicy.RULE_subject = 19;
resourcePolicy.RULE_subject_service = 20;
resourcePolicy.RULE_user_organization_name = 21;
resourcePolicy.RULE_expression_assignment = 22;
resourcePolicy.RULE_expression_handle = 23;
resourcePolicy.RULE_expression = 24;
resourcePolicy.RULE_multiplyingExpression = 25;
resourcePolicy.RULE_powExpression = 26;
resourcePolicy.RULE_signedAtom = 27;
resourcePolicy.RULE_built_in_function = 28;
resourcePolicy.RULE_funcname = 29;
resourcePolicy.RULE_atom = 30;
resourcePolicy.RULE_scientific = 31;
resourcePolicy.RULE_constant = 32;
resourcePolicy.RULE_variable = 33;
resourcePolicy.RULE_expression_call_or_literal = 34;
resourcePolicy.RULE_expression_call = 35;
resourcePolicy.RULE_expression_call_argument = 36;
resourcePolicy.RULE_environment_variable = 37;
resourcePolicy.RULE_event = 38;
resourcePolicy.RULE_event_path = 39;
resourcePolicy.RULE_event_args = 40;


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

PolicyContext.prototype.declaration_section = function() {
    return this.getTypedRuleContext(Declaration_sectionContext,0);
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
        this.state = 82;
        this.audience_strict();
        this.state = 84;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 83;
            this.declaration_section();

        }
        this.state = 86;
        this.state_definition_section();
        this.state = 88;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 87;
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
        this.state = 90;
        this.match(resourcePolicy.FOR);
        this.state = 91;
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
        this.state = 94;
        this.audience();
        this._ctx.stop = this._input.LT(-1);
        this.state = 101;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Audience_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, resourcePolicy.RULE_audience_clause);
                this.state = 96;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 97;
                this.match(resourcePolicy.COMMA);
                this.state = 98;
                this.audience_clause(2); 
            }
            this.state = 103;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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
        this.state = 104;
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


function RequirementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_requirement;
    return this;
}

RequirementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RequirementContext.prototype.constructor = RequirementContext;

RequirementContext.prototype.REQUIRE = function() {
    return this.getToken(resourcePolicy.REQUIRE, 0);
};

RequirementContext.prototype.contract_with_subject = function() {
    return this.getTypedRuleContext(Contract_with_subjectContext,0);
};

RequirementContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterRequirement(this);
	}
};

RequirementContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitRequirement(this);
	}
};

RequirementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitRequirement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.RequirementContext = RequirementContext;

resourcePolicy.prototype.requirement = function() {

    var localctx = new RequirementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, resourcePolicy.RULE_requirement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(resourcePolicy.REQUIRE);

        this.state = 107;
        this.contract_with_subject();
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


function Contract_with_subjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_contract_with_subject;
    return this;
}

Contract_with_subjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_with_subjectContext.prototype.constructor = Contract_with_subjectContext;

Contract_with_subjectContext.prototype.CONTRACT_WITH = function() {
    return this.getToken(resourcePolicy.CONTRACT_WITH, 0);
};

Contract_with_subjectContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

Contract_with_subjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterContract_with_subject(this);
	}
};

Contract_with_subjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitContract_with_subject(this);
	}
};

Contract_with_subjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitContract_with_subject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Contract_with_subjectContext = Contract_with_subjectContext;

resourcePolicy.prototype.contract_with_subject = function() {

    var localctx = new Contract_with_subjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, resourcePolicy.RULE_contract_with_subject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.match(resourcePolicy.CONTRACT_WITH);
        this.state = 110;
        this.subject();
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
    this.enterRule(localctx, 12, resourcePolicy.RULE_declaration_section);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 112;
        		this.declaration_statement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 115; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
    this.enterRule(localctx, 14, resourcePolicy.RULE_declaration_statement);
    try {
        this.state = 119;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.SERVICE_STATE_SCOPE:
            this.enterOuterAlt(localctx, 1);
            this.state = 117;
            this.service_state_constant();
            break;
        case resourcePolicy.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
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
    this.enterRule(localctx, 16, resourcePolicy.RULE_service_state_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.service_state_scope();
        this.state = 122;
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
    this.enterRule(localctx, 18, resourcePolicy.RULE_service_state_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
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
    this.enterRule(localctx, 20, resourcePolicy.RULE_state_definition_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 126;
            this.state_definition();
            this.state = 129; 
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
    this.enterRule(localctx, 22, resourcePolicy.RULE_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.state_name();
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.LBRACKET) {
            this.state = 132;
            this.service_state_definition();
        }

        this.state = 135;
        this.match(resourcePolicy.COLON);
        this.state = 137; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 136;
            this.state_transition();
            this.state = 139; 
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
    this.enterRule(localctx, 24, resourcePolicy.RULE_state_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
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
    this.enterRule(localctx, 26, resourcePolicy.RULE_service_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(resourcePolicy.LBRACKET);
        this.state = 144;
        this.service_state();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.COMMA) {
            this.state = 145;
            this.match(resourcePolicy.COMMA);
            this.state = 146;
            this.service_state();
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 152;
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
    this.enterRule(localctx, 28, resourcePolicy.RULE_service_state);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
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
    this.enterRule(localctx, 30, resourcePolicy.RULE_state_transition);
    try {
        this.state = 161;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.TILDE:
            this.enterOuterAlt(localctx, 1);
            this.state = 156;
            this.event();
            this.state = 157;
            this.match(resourcePolicy.EQUANDGT);
            this.state = 158;
            this.state_name();
            break;
        case resourcePolicy.TERMINATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
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


function Subject_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject_id;
    return this;
}

Subject_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_idContext.prototype.constructor = Subject_idContext;

Subject_idContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

Subject_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject_id(this);
	}
};

Subject_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject_id(this);
	}
};

Subject_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Subject_idContext = Subject_idContext;

resourcePolicy.prototype.subject_id = function() {

    var localctx = new Subject_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, resourcePolicy.RULE_subject_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.subject();
         this._ctx.start._text = this._ctx.getText().substr(1) 
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


function Entity_bracketContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_entity_bracket;
    return this;
}

Entity_bracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entity_bracketContext.prototype.constructor = Entity_bracketContext;

Entity_bracketContext.prototype.account = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AccountContext);
    } else {
        return this.getTypedRuleContext(AccountContext,i);
    }
};

Entity_bracketContext.prototype.subject = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubjectContext);
    } else {
        return this.getTypedRuleContext(SubjectContext,i);
    }
};

Entity_bracketContext.prototype.subject_service = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Subject_serviceContext);
    } else {
        return this.getTypedRuleContext(Subject_serviceContext,i);
    }
};

Entity_bracketContext.prototype.user_organization_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(User_organization_nameContext);
    } else {
        return this.getTypedRuleContext(User_organization_nameContext,i);
    }
};

Entity_bracketContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEntity_bracket(this);
	}
};

Entity_bracketContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEntity_bracket(this);
	}
};

Entity_bracketContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEntity_bracket(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Entity_bracketContext = Entity_bracketContext;

resourcePolicy.prototype.entity_bracket = function() {

    var localctx = new Entity_bracketContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, resourcePolicy.RULE_entity_bracket);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (resourcePolicy.ACCOUNT_NUMBER - 33)) | (1 << (resourcePolicy.SUBJECT_SERVICE_NAME - 33)) | (1 << (resourcePolicy.UOID - 33)))) !== 0)) {
            this.state = 170;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            switch(la_) {
            case 1:
                this.state = 166;
                this.account();
                break;

            case 2:
                this.state = 167;
                this.subject();
                break;

            case 3:
                this.state = 168;
                this.subject_service();
                break;

            case 4:
                this.state = 169;
                this.user_organization_name();
                break;

            }
            this.state = 174;
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


function AccountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_account;
    return this;
}

AccountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AccountContext.prototype.constructor = AccountContext;

AccountContext.prototype.ACCOUNT_NUMBER = function() {
    return this.getToken(resourcePolicy.ACCOUNT_NUMBER, 0);
};

AccountContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterAccount(this);
	}
};

AccountContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitAccount(this);
	}
};

AccountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitAccount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.AccountContext = AccountContext;

resourcePolicy.prototype.account = function() {

    var localctx = new AccountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, resourcePolicy.RULE_account);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(resourcePolicy.ACCOUNT_NUMBER);
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


function SubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.subject_service = function() {
    return this.getTypedRuleContext(Subject_serviceContext,0);
};

SubjectContext.prototype.POINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.POINT);
    } else {
        return this.getToken(resourcePolicy.POINT, i);
    }
};


SubjectContext.prototype.user_organization_name = function() {
    return this.getTypedRuleContext(User_organization_nameContext,0);
};

SubjectContext.prototype.SUBJECT_ID = function() {
    return this.getToken(resourcePolicy.SUBJECT_ID, 0);
};

SubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject(this);
	}
};

SubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject(this);
	}
};

SubjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.SubjectContext = SubjectContext;

resourcePolicy.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, resourcePolicy.RULE_subject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.subject_service();
        this.state = 178;
        this.match(resourcePolicy.POINT);
        this.state = 179;
        this.user_organization_name();
        this.state = 180;
        this.match(resourcePolicy.POINT);
        this.state = 181;
        this.match(resourcePolicy.SUBJECT_ID);
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


function Subject_serviceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_subject_service;
    return this;
}

Subject_serviceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_serviceContext.prototype.constructor = Subject_serviceContext;

Subject_serviceContext.prototype.SUBJECT_SERVICE_NAME = function() {
    return this.getToken(resourcePolicy.SUBJECT_SERVICE_NAME, 0);
};

Subject_serviceContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterSubject_service(this);
	}
};

Subject_serviceContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitSubject_service(this);
	}
};

Subject_serviceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitSubject_service(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.Subject_serviceContext = Subject_serviceContext;

resourcePolicy.prototype.subject_service = function() {

    var localctx = new Subject_serviceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, resourcePolicy.RULE_subject_service);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(resourcePolicy.SUBJECT_SERVICE_NAME);
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


function User_organization_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicy.RULE_user_organization_name;
    return this;
}

User_organization_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_organization_nameContext.prototype.constructor = User_organization_nameContext;

User_organization_nameContext.prototype.UOID = function() {
    return this.getToken(resourcePolicy.UOID, 0);
};

User_organization_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterUser_organization_name(this);
	}
};

User_organization_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitUser_organization_name(this);
	}
};

User_organization_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitUser_organization_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicy.User_organization_nameContext = User_organization_nameContext;

resourcePolicy.prototype.user_organization_name = function() {

    var localctx = new User_organization_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, resourcePolicy.RULE_user_organization_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(resourcePolicy.UOID);
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
    this.enterRule(localctx, 44, resourcePolicy.RULE_expression_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.expression_handle();
        this.state = 188;
        this.match(resourcePolicy.LPAREN);
        this.state = 197;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.ID) {
            this.state = 189;
            this.match(resourcePolicy.ID);
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicy.COMMA) {
                this.state = 190;
                this.match(resourcePolicy.COMMA);
                this.state = 191;
                this.match(resourcePolicy.ID);
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 199;
        this.match(resourcePolicy.RPAREN);
        this.state = 200;
        this.match(resourcePolicy.EQ);
        this.state = 201;
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
    this.enterRule(localctx, 46, resourcePolicy.RULE_expression_handle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
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
    this.enterRule(localctx, 48, resourcePolicy.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.multiplyingExpression();
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.PLUS || _la===resourcePolicy.MINUS) {
            this.state = 206;
            _la = this._input.LA(1);
            if(!(_la===resourcePolicy.PLUS || _la===resourcePolicy.MINUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 207;
            this.multiplyingExpression();
            this.state = 212;
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
    this.enterRule(localctx, 50, resourcePolicy.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.powExpression();
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.TIMES || _la===resourcePolicy.DIV) {
            this.state = 214;
            _la = this._input.LA(1);
            if(!(_la===resourcePolicy.TIMES || _la===resourcePolicy.DIV)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 215;
            this.powExpression();
            this.state = 220;
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
    this.enterRule(localctx, 52, resourcePolicy.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.signedAtom();
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.POW) {
            this.state = 222;
            this.match(resourcePolicy.POW);
            this.state = 223;
            this.signedAtom();
            this.state = 228;
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
    this.enterRule(localctx, 54, resourcePolicy.RULE_signedAtom);
    try {
        this.state = 235;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.PLUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.match(resourcePolicy.PLUS);
            this.state = 230;
            this.signedAtom();
            break;
        case resourcePolicy.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 231;
            this.match(resourcePolicy.MINUS);
            this.state = 232;
            this.signedAtom();
            break;
        case resourcePolicy.SUM:
            this.enterOuterAlt(localctx, 3);
            this.state = 233;
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
            this.state = 234;
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
    this.enterRule(localctx, 56, resourcePolicy.RULE_built_in_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.funcname();
        this.state = 238;
        this.match(resourcePolicy.LPAREN);
        this.state = 239;
        this.expression();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.COMMA) {
            this.state = 240;
            this.match(resourcePolicy.COMMA);
            this.state = 241;
            this.expression();
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 247;
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
    this.enterRule(localctx, 58, resourcePolicy.RULE_funcname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
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
    this.enterRule(localctx, 60, resourcePolicy.RULE_atom);
    try {
        this.state = 259;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 251;
            this.scientific();
            break;
        case resourcePolicy.PI:
        case resourcePolicy.EULER:
            this.enterOuterAlt(localctx, 2);
            this.state = 252;
            this.constant();
            break;
        case resourcePolicy.LPAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 253;
            this.match(resourcePolicy.LPAREN);
            this.state = 254;
            this.expression();
            this.state = 255;
            this.match(resourcePolicy.RPAREN);
            break;
        case resourcePolicy.INT:
            this.enterOuterAlt(localctx, 4);
            this.state = 257;
            this.match(resourcePolicy.INT);
            break;
        case resourcePolicy.VARIABLE_CONTRACT:
        case resourcePolicy.ID:
            this.enterOuterAlt(localctx, 5);
            this.state = 258;
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
    this.enterRule(localctx, 62, resourcePolicy.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
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
    this.enterRule(localctx, 64, resourcePolicy.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
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
    this.enterRule(localctx, 66, resourcePolicy.RULE_variable);
    try {
        this.state = 267;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.VARIABLE_CONTRACT:
            localctx = new VariableEnvironmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 265;
            this.environment_variable();
            break;
        case resourcePolicy.ID:
            localctx = new VariableArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
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
    this.enterRule(localctx, 68, resourcePolicy.RULE_expression_call_or_literal);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.expression_call();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 270;
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
    this.enterRule(localctx, 70, resourcePolicy.RULE_expression_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.expression_handle();
        this.state = 274;
        this.match(resourcePolicy.LPAREN);
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.VARIABLE_CONTRACT || _la===resourcePolicy.INT) {
            this.state = 275;
            this.expression_call_argument();
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicy.COMMA) {
                this.state = 276;
                this.match(resourcePolicy.COMMA);
                this.state = 277;
                this.expression_call_argument();
                this.state = 282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 288;
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
    this.enterRule(localctx, 72, resourcePolicy.RULE_expression_call_argument);
    try {
        this.state = 292;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicy.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 290;
            this.match(resourcePolicy.INT);
            break;
        case resourcePolicy.VARIABLE_CONTRACT:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
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
    this.enterRule(localctx, 74, resourcePolicy.RULE_environment_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
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
    this.eventService = null; // Token
    this.eventName = null; // Token
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.TILDE = function() {
    return this.getToken(resourcePolicy.TILDE, 0);
};

EventContext.prototype.EVENT_POINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_POINT);
    } else {
        return this.getToken(resourcePolicy.EVENT_POINT, i);
    }
};


EventContext.prototype.EVENT_LPAREN = function() {
    return this.getToken(resourcePolicy.EVENT_LPAREN, 0);
};

EventContext.prototype.EVENT_RPAREN = function() {
    return this.getToken(resourcePolicy.EVENT_RPAREN, 0);
};

EventContext.prototype.EVENT_SERVICE_PATH_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicy.EVENT_SERVICE_PATH_NAME);
    } else {
        return this.getToken(resourcePolicy.EVENT_SERVICE_PATH_NAME, i);
    }
};


EventContext.prototype.event_path = function() {
    return this.getTypedRuleContext(Event_pathContext,0);
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
    this.enterRule(localctx, 76, resourcePolicy.RULE_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(resourcePolicy.TILDE);
        this.state = 297;
        localctx.eventService = this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 298;
        this.match(resourcePolicy.EVENT_POINT);
        this.state = 302;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 299;
            this.event_path();
            this.state = 300;
            this.match(resourcePolicy.EVENT_POINT);

        }
        this.state = 304;
        localctx.eventName = this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 305;
        this.match(resourcePolicy.EVENT_LPAREN);
        this.state = 307;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicy.EVENT_ARG) {
            this.state = 306;
            this.event_args();
        }

        this.state = 309;
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
    this.enterRule(localctx, 78, resourcePolicy.RULE_event_path);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME);
        this.state = 316;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 312;
                this.match(resourcePolicy.EVENT_POINT);
                this.state = 313;
                this.match(resourcePolicy.EVENT_SERVICE_PATH_NAME); 
            }
            this.state = 318;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
    this.enterRule(localctx, 80, resourcePolicy.RULE_event_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.match(resourcePolicy.EVENT_ARG);
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicy.EVENT_COMMA) {
            this.state = 320;
            this.match(resourcePolicy.EVENT_COMMA);
            this.state = 321;
            this.match(resourcePolicy.EVENT_ARG);
            this.state = 326;
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
