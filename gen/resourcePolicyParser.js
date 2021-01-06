// Generated from tmp\resourcePolicy.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var resourcePolicyListener = require('./resourcePolicyListener').resourcePolicyListener;
var resourcePolicyVisitor = require('./resourcePolicyVisitor').resourcePolicyVisitor;

var grammarFileName = "resourcePolicy.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u015c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0003\u0002\u0003\u0002\u0005\u0002]\n\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "k\n\u0004\f\u0004\u000e\u0004n\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0006\bz\n\b\r\b\u000e\b{\u0003\t\u0003\t\u0005\t\u0080",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\f",
    "\u0088\n\f\r\f\u000e\f\u0089\u0003\r\u0003\r\u0005\r\u008e\n\r\u0003",
    "\r\u0003\r\u0006\r\u0092\n\r\r\r\u000e\r\u0093\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u009c\n",
    "\u000f\f\u000f\u000e\u000f\u009f\u000b\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00aa\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00b3",
    "\n\u0013\f\u0013\u000e\u0013\u00b6\u000b\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0006\u0018\u00c7\n\u0018\r\u0018\u000e\u0018\u00c8\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0007\u0019\u00d2\n\u0019\f\u0019\u000e\u0019\u00d5\u000b\u0019",
    "\u0005\u0019\u00d7\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0007",
    "\u001b\u00e2\n\u001b\f\u001b\u000e\u001b\u00e5\u000b\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0007\u001c\u00ea\n\u001c\f\u001c\u000e\u001c",
    "\u00ed\u000b\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u00f2",
    "\n\u001d\f\u001d\u000e\u001d\u00f5\u000b\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u00fd\n",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u0104\n\u001f\f\u001f\u000e\u001f\u0107\u000b\u001f\u0003\u001f",
    "\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0005!\u0115\n!\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "$\u0003$\u0005$\u011d\n$\u0003%\u0003%\u0005%\u0121\n%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0007&\u0128\n&\f&\u000e&\u012b\u000b&\u0007",
    "&\u012d\n&\f&\u000e&\u0130\u000b&\u0003&\u0003&\u0003\'\u0003\'\u0005",
    "\'\u0136\n\'\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0005",
    ")\u013f\n)\u0003)\u0003)\u0005)\u0143\n)\u0003*\u0003*\u0003+\u0003",
    "+\u0006+\u0149\n+\r+\u000e+\u014a\u0003+\u0003+\u0003,\u0003,\u0003",
    "-\u0003-\u0003-\u0003-\u0007-\u0155\n-\f-\u000e-\u0158\u000b-\u0003",
    "-\u0003-\u0003-\u0002\u0003\u0006.\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "PRTVX\u0002\u0007\u0003\u0002\u0005\u0007\u0004\u0002\r\u000e!!\u0003",
    "\u0002\u0017\u0018\u0003\u0002\u0019\u001a\u0003\u0002,-\u0002\u0153",
    "\u0002Z\u0003\u0002\u0002\u0002\u0004a\u0003\u0002\u0002\u0002\u0006",
    "d\u0003\u0002\u0002\u0002\bo\u0003\u0002\u0002\u0002\nq\u0003\u0002",
    "\u0002\u0002\ft\u0003\u0002\u0002\u0002\u000ey\u0003\u0002\u0002\u0002",
    "\u0010\u007f\u0003\u0002\u0002\u0002\u0012\u0081\u0003\u0002\u0002\u0002",
    "\u0014\u0084\u0003\u0002\u0002\u0002\u0016\u0087\u0003\u0002\u0002\u0002",
    "\u0018\u008b\u0003\u0002\u0002\u0002\u001a\u0095\u0003\u0002\u0002\u0002",
    "\u001c\u0097\u0003\u0002\u0002\u0002\u001e\u00a2\u0003\u0002\u0002\u0002",
    " \u00a9\u0003\u0002\u0002\u0002\"\u00ab\u0003\u0002\u0002\u0002$\u00b4",
    "\u0003\u0002\u0002\u0002&\u00b9\u0003\u0002\u0002\u0002(\u00bb\u0003",
    "\u0002\u0002\u0002*\u00c1\u0003\u0002\u0002\u0002,\u00c3\u0003\u0002",
    "\u0002\u0002.\u00c6\u0003\u0002\u0002\u00020\u00cc\u0003\u0002\u0002",
    "\u00022\u00dc\u0003\u0002\u0002\u00024\u00de\u0003\u0002\u0002\u0002",
    "6\u00e6\u0003\u0002\u0002\u00028\u00ee\u0003\u0002\u0002\u0002:\u00fc",
    "\u0003\u0002\u0002\u0002<\u00fe\u0003\u0002\u0002\u0002>\u010a\u0003",
    "\u0002\u0002\u0002@\u0114\u0003\u0002\u0002\u0002B\u0116\u0003\u0002",
    "\u0002\u0002D\u0118\u0003\u0002\u0002\u0002F\u011c\u0003\u0002\u0002",
    "\u0002H\u0120\u0003\u0002\u0002\u0002J\u0122\u0003\u0002\u0002\u0002",
    "L\u0135\u0003\u0002\u0002\u0002N\u0137\u0003\u0002\u0002\u0002P\u0139",
    "\u0003\u0002\u0002\u0002R\u0144\u0003\u0002\u0002\u0002T\u0148\u0003",
    "\u0002\u0002\u0002V\u014e\u0003\u0002\u0002\u0002X\u0150\u0003\u0002",
    "\u0002\u0002Z\\\u0005\u0004\u0003\u0002[]\u0005\u000e\b\u0002\\[\u0003",
    "\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002",
    "^_\u0005\u0016\f\u0002_`\u0007\u0002\u0002\u0003`\u0003\u0003\u0002",
    "\u0002\u0002ab\u0007\u0003\u0002\u0002bc\u0005\u0006\u0004\u0002c\u0005",
    "\u0003\u0002\u0002\u0002de\b\u0004\u0001\u0002ef\u0005\b\u0005\u0002",
    "fl\u0003\u0002\u0002\u0002gh\f\u0003\u0002\u0002hi\u0007\u0004\u0002",
    "\u0002ik\u0005\u0006\u0004\u0004jg\u0003\u0002\u0002\u0002kn\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002m\u0007",
    "\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002op\t\u0002\u0002\u0002",
    "p\t\u0003\u0002\u0002\u0002qr\u0007\b\u0002\u0002rs\u0005\f\u0007\u0002",
    "s\u000b\u0003\u0002\u0002\u0002tu\u0007\t\u0002\u0002uv\u0007\n\u0002",
    "\u0002vw\u0005(\u0015\u0002w\r\u0003\u0002\u0002\u0002xz\u0005\u0010",
    "\t\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u000f\u0003\u0002\u0002",
    "\u0002}\u0080\u0005\u0012\n\u0002~\u0080\u00050\u0019\u0002\u007f}\u0003",
    "\u0002\u0002\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u0011\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0005\u0014\u000b\u0002\u0082\u0083\u0005",
    "\u001e\u0010\u0002\u0083\u0013\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
    "\u000b\u0002\u0002\u0085\u0015\u0003\u0002\u0002\u0002\u0086\u0088\u0005",
    "\u0018\r\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003",
    "\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u0017\u0003\u0002\u0002\u0002\u008b\u008d\u0005",
    "\u001a\u000e\u0002\u008c\u008e\u0005\u001c\u000f\u0002\u008d\u008c\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f\u0003",
    "\u0002\u0002\u0002\u008f\u0091\u0007\f\u0002\u0002\u0090\u0092\u0005",
    " \u0011\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003",
    "\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093\u0094\u0003",
    "\u0002\u0002\u0002\u0094\u0019\u0003\u0002\u0002\u0002\u0095\u0096\t",
    "\u0003\u0002\u0002\u0096\u001b\u0003\u0002\u0002\u0002\u0097\u0098\u0007",
    "\u000f\u0002\u0002\u0098\u009d\u0005\u001e\u0010\u0002\u0099\u009a\u0007",
    "\u0004\u0002\u0002\u009a\u009c\u0005\u001e\u0010\u0002\u009b\u0099\u0003",
    "\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007",
    "\u0010\u0002\u0002\u00a1\u001d\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007",
    "!\u0002\u0002\u00a3\u001f\u0003\u0002\u0002\u0002\u00a4\u00a5\u0005",
    "P)\u0002\u00a5\u00a6\u0007\u0011\u0002\u0002\u00a6\u00a7\u0005\u001a",
    "\u000e\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00aa\u0007\u0012",
    "\u0002\u0002\u00a9\u00a4\u0003\u0002\u0002\u0002\u00a9\u00a8\u0003\u0002",
    "\u0002\u0002\u00aa!\u0003\u0002\u0002\u0002\u00ab\u00ac\u0005(\u0015",
    "\u0002\u00ac\u00ad\b\u0012\u0001\u0002\u00ad#\u0003\u0002\u0002\u0002",
    "\u00ae\u00b3\u0005&\u0014\u0002\u00af\u00b3\u0005(\u0015\u0002\u00b0",
    "\u00b3\u0005*\u0016\u0002\u00b1\u00b3\u0005,\u0017\u0002\u00b2\u00ae",
    "\u0003\u0002\u0002\u0002\u00b2\u00af\u0003\u0002\u0002\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b6",
    "\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0003\u0002\u0002\u0002\u00b5\u00b7\u0003\u0002\u0002\u0002\u00b6\u00b4",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0002\u0002\u0003\u00b8%",
    "\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\u001d\u0002\u0002\u00ba\'",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0005*\u0016\u0002\u00bc\u00bd",
    "\u0007\u0013\u0002\u0002\u00bd\u00be\u0005,\u0017\u0002\u00be\u00bf",
    "\u0007\u0013\u0002\u0002\u00bf\u00c0\u0007 \u0002\u0002\u00c0)\u0003",
    "\u0002\u0002\u0002\u00c1\u00c2\u0007\u001e\u0002\u0002\u00c2+\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0007\u001f\u0002\u0002\u00c4-\u0003",
    "\u0002\u0002\u0002\u00c5\u00c7\u00054\u001b\u0002\u00c6\u00c5\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003",
    "\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003",
    "\u0002\u0002\u0002\u00ca\u00cb\u0007\u0002\u0002\u0003\u00cb/\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u00052\u001a\u0002\u00cd\u00d6\u0007",
    "\u0014\u0002\u0002\u00ce\u00d3\u0007!\u0002\u0002\u00cf\u00d0\u0007",
    "\u0004\u0002\u0002\u00d0\u00d2\u0007!\u0002\u0002\u00d1\u00cf\u0003",
    "\u0002\u0002\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d7\u0003",
    "\u0002\u0002\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003",
    "\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d8\u00d9\u0007\u0015\u0002\u0002\u00d9\u00da\u0007",
    "\u0016\u0002\u0002\u00da\u00db\u00054\u001b\u0002\u00db1\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\u0007!\u0002\u0002\u00dd3\u0003\u0002\u0002",
    "\u0002\u00de\u00e3\u00056\u001c\u0002\u00df\u00e0\t\u0004\u0002\u0002",
    "\u00e0\u00e2\u00056\u001c\u0002\u00e1\u00df\u0003\u0002\u0002\u0002",
    "\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e45\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00eb\u00058\u001d\u0002",
    "\u00e7\u00e8\t\u0005\u0002\u0002\u00e8\u00ea\u00058\u001d\u0002\u00e9",
    "\u00e7\u0003\u0002\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec",
    "7\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee",
    "\u00f3\u0005:\u001e\u0002\u00ef\u00f0\u0007\u001b\u0002\u0002\u00f0",
    "\u00f2\u0005:\u001e\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2",
    "\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0003\u0002\u0002\u0002\u00f49\u0003\u0002\u0002\u0002\u00f5",
    "\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007\u0017\u0002\u0002\u00f7",
    "\u00fd\u0005:\u001e\u0002\u00f8\u00f9\u0007\u0018\u0002\u0002\u00f9",
    "\u00fd\u0005:\u001e\u0002\u00fa\u00fd\u0005<\u001f\u0002\u00fb\u00fd",
    "\u0005@!\u0002\u00fc\u00f6\u0003\u0002\u0002\u0002\u00fc\u00f8\u0003",
    "\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002\u0002\u0002\u00fc\u00fb\u0003",
    "\u0002\u0002\u0002\u00fd;\u0003\u0002\u0002\u0002\u00fe\u00ff\u0005",
    "> \u0002\u00ff\u0100\u0007\u0014\u0002\u0002\u0100\u0105\u00054\u001b",
    "\u0002\u0101\u0102\u0007\u0004\u0002\u0002\u0102\u0104\u00054\u001b",
    "\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0104\u0107\u0003\u0002\u0002",
    "\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002",
    "\u0002\u0106\u0108\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0007\u0015\u0002\u0002\u0109=\u0003\u0002\u0002",
    "\u0002\u010a\u010b\u0007\u001c\u0002\u0002\u010b?\u0003\u0002\u0002",
    "\u0002\u010c\u0115\u0005B\"\u0002\u010d\u0115\u0005D#\u0002\u010e\u010f",
    "\u0007\u0014\u0002\u0002\u010f\u0110\u00054\u001b\u0002\u0110\u0111",
    "\u0007\u0015\u0002\u0002\u0111\u0115\u0003\u0002\u0002\u0002\u0112\u0115",
    "\u0007\"\u0002\u0002\u0113\u0115\u0005F$\u0002\u0114\u010c\u0003\u0002",
    "\u0002\u0002\u0114\u010d\u0003\u0002\u0002\u0002\u0114\u010e\u0003\u0002",
    "\u0002\u0002\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002",
    "\u0002\u0002\u0115A\u0003\u0002\u0002\u0002\u0116\u0117\u0007+\u0002",
    "\u0002\u0117C\u0003\u0002\u0002\u0002\u0118\u0119\t\u0006\u0002\u0002",
    "\u0119E\u0003\u0002\u0002\u0002\u011a\u011d\u0005N(\u0002\u011b\u011d",
    "\u0007!\u0002\u0002\u011c\u011a\u0003\u0002\u0002\u0002\u011c\u011b",
    "\u0003\u0002\u0002\u0002\u011dG\u0003\u0002\u0002\u0002\u011e\u0121",
    "\u0005J&\u0002\u011f\u0121\u00054\u001b\u0002\u0120\u011e\u0003\u0002",
    "\u0002\u0002\u0120\u011f\u0003\u0002\u0002\u0002\u0121I\u0003\u0002",
    "\u0002\u0002\u0122\u0123\u00052\u001a\u0002\u0123\u012e\u0007\u0014",
    "\u0002\u0002\u0124\u0129\u0005L\'\u0002\u0125\u0126\u0007\u0004\u0002",
    "\u0002\u0126\u0128\u0005L\'\u0002\u0127\u0125\u0003\u0002\u0002\u0002",
    "\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u012d\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u0124\u0003\u0002\u0002\u0002",
    "\u012d\u0130\u0003\u0002\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002",
    "\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002",
    "\u0130\u012e\u0003\u0002\u0002\u0002\u0131\u0132\u0007\u0015\u0002\u0002",
    "\u0132K\u0003\u0002\u0002\u0002\u0133\u0136\u0007\"\u0002\u0002\u0134",
    "\u0136\u0005N(\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134",
    "\u0003\u0002\u0002\u0002\u0136M\u0003\u0002\u0002\u0002\u0137\u0138",
    "\u0007.\u0002\u0002\u0138O\u0003\u0002\u0002\u0002\u0139\u013a\u0005",
    "R*\u0002\u013a\u013e\u0007\u0013\u0002\u0002\u013b\u013c\u0005T+\u0002",
    "\u013c\u013d\u0007\u0013\u0002\u0002\u013d\u013f\u0003\u0002\u0002\u0002",
    "\u013e\u013b\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002",
    "\u013f\u0140\u0003\u0002\u0002\u0002\u0140\u0142\u0005V,\u0002\u0141",
    "\u0143\u0005X-\u0002\u0142\u0141\u0003\u0002\u0002\u0002\u0142\u0143",
    "\u0003\u0002\u0002\u0002\u0143Q\u0003\u0002\u0002\u0002\u0144\u0145",
    "\u0007/\u0002\u0002\u0145S\u0003\u0002\u0002\u0002\u0146\u0147\u0007",
    "!\u0002\u0002\u0147\u0149\u0007\u0013\u0002\u0002\u0148\u0146\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u0148\u0003",
    "\u0002\u0002\u0002\u014a\u014b\u0003\u0002\u0002\u0002\u014b\u014c\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0007!\u0002\u0002\u014dU\u0003\u0002",
    "\u0002\u0002\u014e\u014f\u0007!\u0002\u0002\u014fW\u0003\u0002\u0002",
    "\u0002\u0150\u0151\u0007\u0014\u0002\u0002\u0151\u0156\u0007!\u0002",
    "\u0002\u0152\u0153\u0007\u0004\u0002\u0002\u0153\u0155\u0007!\u0002",
    "\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0155\u0158\u0003\u0002\u0002",
    "\u0002\u0156\u0154\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002",
    "\u0002\u0157\u0159\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002\u0002",
    "\u0002\u0159\u015a\u0007\u0015\u0002\u0002\u015aY\u0003\u0002\u0002",
    "\u0002\u001f\\l{\u007f\u0089\u008d\u0093\u009d\u00a9\u00b2\u00b4\u00c8",
    "\u00d3\u00d6\u00e3\u00eb\u00f3\u00fc\u0105\u0114\u011c\u0120\u0129\u012e",
    "\u0135\u013e\u0142\u014a\u0156"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'for'", "','", "'public'", "'nodes'", "'registered_users'", 
                     "'require'", "'contract'", "'with'", "'always'", "':'", 
                     "'initial'", "'finish'", "'['", "']'", "'=>'", "'terminate'", 
                     "'.'", "'('", "')'", "'='", "'+'", "'-'", "'*'", "'/'", 
                     "'^'", "'sum'", null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'pi'", "'e'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "ACCOUNT_NUMBER", "SUBJECT_SERVICE_NAME", "UOID", 
                      "SUBJECT_ID", "ID", "INT", "USER_ID", "PHONE_NUMBER_CN_MOBILE", 
                      "EMAIL", "PERIOD", "TIME", "DATE", "MONEY_AMOUNT", 
                      "WS", "SCIENTIFIC_NUMBER", "PI", "EULER", "VARIABLE_CONTRACT", 
                      "EVENT_SERVICE_NAME" ];

var ruleNames =  [ "policy", "audience_strict", "audience_clause", "users", 
                   "requirement", "contract_with_subject", "declaration_section", 
                   "declaration_statements", "service_state_constant", "service_state_scope", 
                   "state_definition_section", "state_definition", "state_name", 
                   "service_state_definition", "service_state", "state_transition", 
                   "subject_id", "entity_bracket", "account", "subject", 
                   "subject_service", "user_organization_name", "expression_test", 
                   "expression_assignment", "expression_handle", "expression", 
                   "multiplyingExpression", "powExpression", "signedAtom", 
                   "built_in_function", "funcname", "atom", "scientific", 
                   "constant", "variable", "expression_call_or_literal", 
                   "expression_call", "expression_call_argument", "environment_variable", 
                   "event", "event_service", "event_path", "event_name", 
                   "event_args" ];

function resourcePolicyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

resourcePolicyParser.prototype = Object.create(antlr4.Parser.prototype);
resourcePolicyParser.prototype.constructor = resourcePolicyParser;

Object.defineProperty(resourcePolicyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

resourcePolicyParser.EOF = antlr4.Token.EOF;
resourcePolicyParser.T__0 = 1;
resourcePolicyParser.T__1 = 2;
resourcePolicyParser.T__2 = 3;
resourcePolicyParser.T__3 = 4;
resourcePolicyParser.T__4 = 5;
resourcePolicyParser.T__5 = 6;
resourcePolicyParser.T__6 = 7;
resourcePolicyParser.T__7 = 8;
resourcePolicyParser.T__8 = 9;
resourcePolicyParser.T__9 = 10;
resourcePolicyParser.T__10 = 11;
resourcePolicyParser.T__11 = 12;
resourcePolicyParser.T__12 = 13;
resourcePolicyParser.T__13 = 14;
resourcePolicyParser.T__14 = 15;
resourcePolicyParser.T__15 = 16;
resourcePolicyParser.T__16 = 17;
resourcePolicyParser.T__17 = 18;
resourcePolicyParser.T__18 = 19;
resourcePolicyParser.T__19 = 20;
resourcePolicyParser.T__20 = 21;
resourcePolicyParser.T__21 = 22;
resourcePolicyParser.T__22 = 23;
resourcePolicyParser.T__23 = 24;
resourcePolicyParser.T__24 = 25;
resourcePolicyParser.T__25 = 26;
resourcePolicyParser.ACCOUNT_NUMBER = 27;
resourcePolicyParser.SUBJECT_SERVICE_NAME = 28;
resourcePolicyParser.UOID = 29;
resourcePolicyParser.SUBJECT_ID = 30;
resourcePolicyParser.ID = 31;
resourcePolicyParser.INT = 32;
resourcePolicyParser.USER_ID = 33;
resourcePolicyParser.PHONE_NUMBER_CN_MOBILE = 34;
resourcePolicyParser.EMAIL = 35;
resourcePolicyParser.PERIOD = 36;
resourcePolicyParser.TIME = 37;
resourcePolicyParser.DATE = 38;
resourcePolicyParser.MONEY_AMOUNT = 39;
resourcePolicyParser.WS = 40;
resourcePolicyParser.SCIENTIFIC_NUMBER = 41;
resourcePolicyParser.PI = 42;
resourcePolicyParser.EULER = 43;
resourcePolicyParser.VARIABLE_CONTRACT = 44;
resourcePolicyParser.EVENT_SERVICE_NAME = 45;

resourcePolicyParser.RULE_policy = 0;
resourcePolicyParser.RULE_audience_strict = 1;
resourcePolicyParser.RULE_audience_clause = 2;
resourcePolicyParser.RULE_users = 3;
resourcePolicyParser.RULE_requirement = 4;
resourcePolicyParser.RULE_contract_with_subject = 5;
resourcePolicyParser.RULE_declaration_section = 6;
resourcePolicyParser.RULE_declaration_statements = 7;
resourcePolicyParser.RULE_service_state_constant = 8;
resourcePolicyParser.RULE_service_state_scope = 9;
resourcePolicyParser.RULE_state_definition_section = 10;
resourcePolicyParser.RULE_state_definition = 11;
resourcePolicyParser.RULE_state_name = 12;
resourcePolicyParser.RULE_service_state_definition = 13;
resourcePolicyParser.RULE_service_state = 14;
resourcePolicyParser.RULE_state_transition = 15;
resourcePolicyParser.RULE_subject_id = 16;
resourcePolicyParser.RULE_entity_bracket = 17;
resourcePolicyParser.RULE_account = 18;
resourcePolicyParser.RULE_subject = 19;
resourcePolicyParser.RULE_subject_service = 20;
resourcePolicyParser.RULE_user_organization_name = 21;
resourcePolicyParser.RULE_expression_test = 22;
resourcePolicyParser.RULE_expression_assignment = 23;
resourcePolicyParser.RULE_expression_handle = 24;
resourcePolicyParser.RULE_expression = 25;
resourcePolicyParser.RULE_multiplyingExpression = 26;
resourcePolicyParser.RULE_powExpression = 27;
resourcePolicyParser.RULE_signedAtom = 28;
resourcePolicyParser.RULE_built_in_function = 29;
resourcePolicyParser.RULE_funcname = 30;
resourcePolicyParser.RULE_atom = 31;
resourcePolicyParser.RULE_scientific = 32;
resourcePolicyParser.RULE_constant = 33;
resourcePolicyParser.RULE_variable = 34;
resourcePolicyParser.RULE_expression_call_or_literal = 35;
resourcePolicyParser.RULE_expression_call = 36;
resourcePolicyParser.RULE_expression_call_argument = 37;
resourcePolicyParser.RULE_environment_variable = 38;
resourcePolicyParser.RULE_event = 39;
resourcePolicyParser.RULE_event_service = 40;
resourcePolicyParser.RULE_event_path = 41;
resourcePolicyParser.RULE_event_name = 42;
resourcePolicyParser.RULE_event_args = 43;


function PolicyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_policy;
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
    return this.getToken(resourcePolicyParser.EOF, 0);
};

PolicyContext.prototype.declaration_section = function() {
    return this.getTypedRuleContext(Declaration_sectionContext,0);
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




resourcePolicyParser.PolicyContext = PolicyContext;

resourcePolicyParser.prototype.policy = function() {

    var localctx = new PolicyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, resourcePolicyParser.RULE_policy);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.audience_strict();
        this.state = 90;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 89;
            this.declaration_section();

        }
        this.state = 92;
        this.state_definition_section();
        this.state = 93;
        this.match(resourcePolicyParser.EOF);
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
    this.ruleIndex = resourcePolicyParser.RULE_audience_strict;
    return this;
}

Audience_strictContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_strictContext.prototype.constructor = Audience_strictContext;

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




resourcePolicyParser.Audience_strictContext = Audience_strictContext;

resourcePolicyParser.prototype.audience_strict = function() {

    var localctx = new Audience_strictContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, resourcePolicyParser.RULE_audience_strict);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(resourcePolicyParser.T__0);
        this.state = 96;
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
    this.ruleIndex = resourcePolicyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.users = function() {
    return this.getTypedRuleContext(UsersContext,0);
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



resourcePolicyParser.prototype.audience_clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Audience_clauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, resourcePolicyParser.RULE_audience_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.users();
        this._ctx.stop = this._input.LT(-1);
        this.state = 106;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Audience_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, resourcePolicyParser.RULE_audience_clause);
                this.state = 101;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 102;
                this.match(resourcePolicyParser.T__1);
                this.state = 103;
                this.audience_clause(2); 
            }
            this.state = 108;
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


function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;


UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitUsers(this);
	}
};

UsersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitUsers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicyParser.UsersContext = UsersContext;

resourcePolicyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, resourcePolicyParser.RULE_users);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << resourcePolicyParser.T__2) | (1 << resourcePolicyParser.T__3) | (1 << resourcePolicyParser.T__4))) !== 0))) {
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
    this.ruleIndex = resourcePolicyParser.RULE_requirement;
    return this;
}

RequirementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RequirementContext.prototype.constructor = RequirementContext;

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




resourcePolicyParser.RequirementContext = RequirementContext;

resourcePolicyParser.prototype.requirement = function() {

    var localctx = new RequirementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, resourcePolicyParser.RULE_requirement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(resourcePolicyParser.T__5);

        this.state = 112;
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
    this.ruleIndex = resourcePolicyParser.RULE_contract_with_subject;
    return this;
}

Contract_with_subjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_with_subjectContext.prototype.constructor = Contract_with_subjectContext;

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




resourcePolicyParser.Contract_with_subjectContext = Contract_with_subjectContext;

resourcePolicyParser.prototype.contract_with_subject = function() {

    var localctx = new Contract_with_subjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, resourcePolicyParser.RULE_contract_with_subject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(resourcePolicyParser.T__6);
        this.state = 115;
        this.match(resourcePolicyParser.T__7);
        this.state = 116;
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
    this.ruleIndex = resourcePolicyParser.RULE_declaration_section;
    return this;
}

Declaration_sectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_sectionContext.prototype.constructor = Declaration_sectionContext;

Declaration_sectionContext.prototype.declaration_statements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Declaration_statementsContext);
    } else {
        return this.getTypedRuleContext(Declaration_statementsContext,i);
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




resourcePolicyParser.Declaration_sectionContext = Declaration_sectionContext;

resourcePolicyParser.prototype.declaration_section = function() {

    var localctx = new Declaration_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, resourcePolicyParser.RULE_declaration_section);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 118;
        		this.declaration_statements();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 121; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
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


function Declaration_statementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_declaration_statements;
    return this;
}

Declaration_statementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Declaration_statementsContext.prototype.constructor = Declaration_statementsContext;

Declaration_statementsContext.prototype.service_state_constant = function() {
    return this.getTypedRuleContext(Service_state_constantContext,0);
};

Declaration_statementsContext.prototype.expression_assignment = function() {
    return this.getTypedRuleContext(Expression_assignmentContext,0);
};

Declaration_statementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterDeclaration_statements(this);
	}
};

Declaration_statementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitDeclaration_statements(this);
	}
};

Declaration_statementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitDeclaration_statements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicyParser.Declaration_statementsContext = Declaration_statementsContext;

resourcePolicyParser.prototype.declaration_statements = function() {

    var localctx = new Declaration_statementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, resourcePolicyParser.RULE_declaration_statements);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__8:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.service_state_constant();
            break;
        case resourcePolicyParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
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
    this.ruleIndex = resourcePolicyParser.RULE_service_state_constant;
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




resourcePolicyParser.Service_state_constantContext = Service_state_constantContext;

resourcePolicyParser.prototype.service_state_constant = function() {

    var localctx = new Service_state_constantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, resourcePolicyParser.RULE_service_state_constant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.service_state_scope();
        this.state = 128;
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
    this.ruleIndex = resourcePolicyParser.RULE_service_state_scope;
    return this;
}

Service_state_scopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_state_scopeContext.prototype.constructor = Service_state_scopeContext;


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




resourcePolicyParser.Service_state_scopeContext = Service_state_scopeContext;

resourcePolicyParser.prototype.service_state_scope = function() {

    var localctx = new Service_state_scopeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, resourcePolicyParser.RULE_service_state_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(resourcePolicyParser.T__8);
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
    this.ruleIndex = resourcePolicyParser.RULE_state_definition_section;
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




resourcePolicyParser.State_definition_sectionContext = State_definition_sectionContext;

resourcePolicyParser.prototype.state_definition_section = function() {

    var localctx = new State_definition_sectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, resourcePolicyParser.RULE_state_definition_section);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 132;
            this.state_definition();
            this.state = 135; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << resourcePolicyParser.T__10) | (1 << resourcePolicyParser.T__11) | (1 << resourcePolicyParser.ID))) !== 0));
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
    this.ruleIndex = resourcePolicyParser.RULE_state_definition;
    return this;
}

State_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_definitionContext.prototype.constructor = State_definitionContext;

State_definitionContext.prototype.state_name = function() {
    return this.getTypedRuleContext(State_nameContext,0);
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




resourcePolicyParser.State_definitionContext = State_definitionContext;

resourcePolicyParser.prototype.state_definition = function() {

    var localctx = new State_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, resourcePolicyParser.RULE_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.state_name();
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicyParser.T__12) {
            this.state = 138;
            this.service_state_definition();
        }

        this.state = 141;
        this.match(resourcePolicyParser.T__9);
        this.state = 143; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 142;
            this.state_transition();
            this.state = 145; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===resourcePolicyParser.T__15 || _la===resourcePolicyParser.EVENT_SERVICE_NAME);
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
    this.ruleIndex = resourcePolicyParser.RULE_state_name;
    return this;
}

State_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_nameContext.prototype.constructor = State_nameContext;

State_nameContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
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




resourcePolicyParser.State_nameContext = State_nameContext;

resourcePolicyParser.prototype.state_name = function() {

    var localctx = new State_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, resourcePolicyParser.RULE_state_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << resourcePolicyParser.T__10) | (1 << resourcePolicyParser.T__11) | (1 << resourcePolicyParser.ID))) !== 0))) {
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


function Service_state_definitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_service_state_definition;
    return this;
}

Service_state_definitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_state_definitionContext.prototype.constructor = Service_state_definitionContext;

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




resourcePolicyParser.Service_state_definitionContext = Service_state_definitionContext;

resourcePolicyParser.prototype.service_state_definition = function() {

    var localctx = new Service_state_definitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, resourcePolicyParser.RULE_service_state_definition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(resourcePolicyParser.T__12);
        this.state = 150;
        this.service_state();
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__1) {
            this.state = 151;
            this.match(resourcePolicyParser.T__1);
            this.state = 152;
            this.service_state();
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 158;
        this.match(resourcePolicyParser.T__13);
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
    this.ruleIndex = resourcePolicyParser.RULE_service_state;
    return this;
}

Service_stateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Service_stateContext.prototype.constructor = Service_stateContext;

Service_stateContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
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




resourcePolicyParser.Service_stateContext = Service_stateContext;

resourcePolicyParser.prototype.service_state = function() {

    var localctx = new Service_stateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, resourcePolicyParser.RULE_service_state);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(resourcePolicyParser.ID);
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
    this.ruleIndex = resourcePolicyParser.RULE_state_transition;
    this.terminate = null; // Token
    return this;
}

State_transitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_transitionContext.prototype.constructor = State_transitionContext;

State_transitionContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

State_transitionContext.prototype.state_name = function() {
    return this.getTypedRuleContext(State_nameContext,0);
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




resourcePolicyParser.State_transitionContext = State_transitionContext;

resourcePolicyParser.prototype.state_transition = function() {

    var localctx = new State_transitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, resourcePolicyParser.RULE_state_transition);
    try {
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.EVENT_SERVICE_NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.event();
            this.state = 163;
            this.match(resourcePolicyParser.T__14);
            this.state = 164;
            this.state_name();
            break;
        case resourcePolicyParser.T__15:
            this.enterOuterAlt(localctx, 2);
            this.state = 166;
            localctx.terminate = this.match(resourcePolicyParser.T__15);
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
    this.ruleIndex = resourcePolicyParser.RULE_subject_id;
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




resourcePolicyParser.Subject_idContext = Subject_idContext;

resourcePolicyParser.prototype.subject_id = function() {

    var localctx = new Subject_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, resourcePolicyParser.RULE_subject_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
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
    this.ruleIndex = resourcePolicyParser.RULE_entity_bracket;
    return this;
}

Entity_bracketContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Entity_bracketContext.prototype.constructor = Entity_bracketContext;

Entity_bracketContext.prototype.EOF = function() {
    return this.getToken(resourcePolicyParser.EOF, 0);
};

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




resourcePolicyParser.Entity_bracketContext = Entity_bracketContext;

resourcePolicyParser.prototype.entity_bracket = function() {

    var localctx = new Entity_bracketContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, resourcePolicyParser.RULE_entity_bracket);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << resourcePolicyParser.ACCOUNT_NUMBER) | (1 << resourcePolicyParser.SUBJECT_SERVICE_NAME) | (1 << resourcePolicyParser.UOID))) !== 0)) {
            this.state = 176;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            switch(la_) {
            case 1:
                this.state = 172;
                this.account();
                break;

            case 2:
                this.state = 173;
                this.subject();
                break;

            case 3:
                this.state = 174;
                this.subject_service();
                break;

            case 4:
                this.state = 175;
                this.user_organization_name();
                break;

            }
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 181;
        this.match(resourcePolicyParser.EOF);
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
    this.ruleIndex = resourcePolicyParser.RULE_account;
    return this;
}

AccountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AccountContext.prototype.constructor = AccountContext;

AccountContext.prototype.ACCOUNT_NUMBER = function() {
    return this.getToken(resourcePolicyParser.ACCOUNT_NUMBER, 0);
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




resourcePolicyParser.AccountContext = AccountContext;

resourcePolicyParser.prototype.account = function() {

    var localctx = new AccountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, resourcePolicyParser.RULE_account);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(resourcePolicyParser.ACCOUNT_NUMBER);
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
    this.ruleIndex = resourcePolicyParser.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.subject_service = function() {
    return this.getTypedRuleContext(Subject_serviceContext,0);
};

SubjectContext.prototype.user_organization_name = function() {
    return this.getTypedRuleContext(User_organization_nameContext,0);
};

SubjectContext.prototype.SUBJECT_ID = function() {
    return this.getToken(resourcePolicyParser.SUBJECT_ID, 0);
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




resourcePolicyParser.SubjectContext = SubjectContext;

resourcePolicyParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, resourcePolicyParser.RULE_subject);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.subject_service();
        this.state = 186;
        this.match(resourcePolicyParser.T__16);
        this.state = 187;
        this.user_organization_name();
        this.state = 188;
        this.match(resourcePolicyParser.T__16);
        this.state = 189;
        this.match(resourcePolicyParser.SUBJECT_ID);
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
    this.ruleIndex = resourcePolicyParser.RULE_subject_service;
    return this;
}

Subject_serviceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Subject_serviceContext.prototype.constructor = Subject_serviceContext;

Subject_serviceContext.prototype.SUBJECT_SERVICE_NAME = function() {
    return this.getToken(resourcePolicyParser.SUBJECT_SERVICE_NAME, 0);
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




resourcePolicyParser.Subject_serviceContext = Subject_serviceContext;

resourcePolicyParser.prototype.subject_service = function() {

    var localctx = new Subject_serviceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, resourcePolicyParser.RULE_subject_service);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(resourcePolicyParser.SUBJECT_SERVICE_NAME);
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
    this.ruleIndex = resourcePolicyParser.RULE_user_organization_name;
    return this;
}

User_organization_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_organization_nameContext.prototype.constructor = User_organization_nameContext;

User_organization_nameContext.prototype.UOID = function() {
    return this.getToken(resourcePolicyParser.UOID, 0);
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




resourcePolicyParser.User_organization_nameContext = User_organization_nameContext;

resourcePolicyParser.prototype.user_organization_name = function() {

    var localctx = new User_organization_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, resourcePolicyParser.RULE_user_organization_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(resourcePolicyParser.UOID);
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


function Expression_testContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_expression_test;
    return this;
}

Expression_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_testContext.prototype.constructor = Expression_testContext;

Expression_testContext.prototype.EOF = function() {
    return this.getToken(resourcePolicyParser.EOF, 0);
};

Expression_testContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Expression_testContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterExpression_test(this);
	}
};

Expression_testContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitExpression_test(this);
	}
};

Expression_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitExpression_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicyParser.Expression_testContext = Expression_testContext;

resourcePolicyParser.prototype.expression_test = function() {

    var localctx = new Expression_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, resourcePolicyParser.RULE_expression_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 195;
            this.expression();
            this.state = 198; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (resourcePolicyParser.T__17 - 18)) | (1 << (resourcePolicyParser.T__20 - 18)) | (1 << (resourcePolicyParser.T__21 - 18)) | (1 << (resourcePolicyParser.T__25 - 18)) | (1 << (resourcePolicyParser.ID - 18)) | (1 << (resourcePolicyParser.INT - 18)) | (1 << (resourcePolicyParser.SCIENTIFIC_NUMBER - 18)) | (1 << (resourcePolicyParser.PI - 18)) | (1 << (resourcePolicyParser.EULER - 18)) | (1 << (resourcePolicyParser.VARIABLE_CONTRACT - 18)))) !== 0));
        this.state = 200;
        this.match(resourcePolicyParser.EOF);
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
    this.ruleIndex = resourcePolicyParser.RULE_expression_assignment;
    return this;
}

Expression_assignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_assignmentContext.prototype.constructor = Expression_assignmentContext;

Expression_assignmentContext.prototype.expression_handle = function() {
    return this.getTypedRuleContext(Expression_handleContext,0);
};

Expression_assignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Expression_assignmentContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicyParser.ID);
    } else {
        return this.getToken(resourcePolicyParser.ID, i);
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




resourcePolicyParser.Expression_assignmentContext = Expression_assignmentContext;

resourcePolicyParser.prototype.expression_assignment = function() {

    var localctx = new Expression_assignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, resourcePolicyParser.RULE_expression_assignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.expression_handle();
        this.state = 203;
        this.match(resourcePolicyParser.T__17);
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicyParser.ID) {
            this.state = 204;
            this.match(resourcePolicyParser.ID);
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicyParser.T__1) {
                this.state = 205;
                this.match(resourcePolicyParser.T__1);
                this.state = 206;
                this.match(resourcePolicyParser.ID);
                this.state = 211;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 214;
        this.match(resourcePolicyParser.T__18);
        this.state = 215;
        this.match(resourcePolicyParser.T__19);
        this.state = 216;
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
    this.ruleIndex = resourcePolicyParser.RULE_expression_handle;
    return this;
}

Expression_handleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_handleContext.prototype.constructor = Expression_handleContext;

Expression_handleContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
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




resourcePolicyParser.Expression_handleContext = Expression_handleContext;

resourcePolicyParser.prototype.expression_handle = function() {

    var localctx = new Expression_handleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, resourcePolicyParser.RULE_expression_handle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(resourcePolicyParser.ID);
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
    this.ruleIndex = resourcePolicyParser.RULE_expression;
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




resourcePolicyParser.ExpressionContext = ExpressionContext;

resourcePolicyParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, resourcePolicyParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.multiplyingExpression();
        this.state = 225;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 221;
                _la = this._input.LA(1);
                if(!(_la===resourcePolicyParser.T__20 || _la===resourcePolicyParser.T__21)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 222;
                this.multiplyingExpression(); 
            }
            this.state = 227;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
    this.ruleIndex = resourcePolicyParser.RULE_multiplyingExpression;
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




resourcePolicyParser.MultiplyingExpressionContext = MultiplyingExpressionContext;

resourcePolicyParser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, resourcePolicyParser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        this.powExpression();
        this.state = 233;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__22 || _la===resourcePolicyParser.T__23) {
            this.state = 229;
            _la = this._input.LA(1);
            if(!(_la===resourcePolicyParser.T__22 || _la===resourcePolicyParser.T__23)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 230;
            this.powExpression();
            this.state = 235;
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
    this.ruleIndex = resourcePolicyParser.RULE_powExpression;
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




resourcePolicyParser.PowExpressionContext = PowExpressionContext;

resourcePolicyParser.prototype.powExpression = function() {

    var localctx = new PowExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, resourcePolicyParser.RULE_powExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.signedAtom();
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__24) {
            this.state = 237;
            this.match(resourcePolicyParser.T__24);
            this.state = 238;
            this.signedAtom();
            this.state = 243;
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
    this.ruleIndex = resourcePolicyParser.RULE_signedAtom;
    return this;
}

SignedAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedAtomContext.prototype.constructor = SignedAtomContext;

SignedAtomContext.prototype.signedAtom = function() {
    return this.getTypedRuleContext(SignedAtomContext,0);
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




resourcePolicyParser.SignedAtomContext = SignedAtomContext;

resourcePolicyParser.prototype.signedAtom = function() {

    var localctx = new SignedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, resourcePolicyParser.RULE_signedAtom);
    try {
        this.state = 250;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.match(resourcePolicyParser.T__20);
            this.state = 245;
            this.signedAtom();
            break;
        case resourcePolicyParser.T__21:
            this.enterOuterAlt(localctx, 2);
            this.state = 246;
            this.match(resourcePolicyParser.T__21);
            this.state = 247;
            this.signedAtom();
            break;
        case resourcePolicyParser.T__25:
            this.enterOuterAlt(localctx, 3);
            this.state = 248;
            this.built_in_function();
            break;
        case resourcePolicyParser.T__17:
        case resourcePolicyParser.ID:
        case resourcePolicyParser.INT:
        case resourcePolicyParser.SCIENTIFIC_NUMBER:
        case resourcePolicyParser.PI:
        case resourcePolicyParser.EULER:
        case resourcePolicyParser.VARIABLE_CONTRACT:
            this.enterOuterAlt(localctx, 4);
            this.state = 249;
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
    this.ruleIndex = resourcePolicyParser.RULE_built_in_function;
    return this;
}

Built_in_functionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Built_in_functionContext.prototype.constructor = Built_in_functionContext;

Built_in_functionContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
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




resourcePolicyParser.Built_in_functionContext = Built_in_functionContext;

resourcePolicyParser.prototype.built_in_function = function() {

    var localctx = new Built_in_functionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, resourcePolicyParser.RULE_built_in_function);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.funcname();
        this.state = 253;
        this.match(resourcePolicyParser.T__17);
        this.state = 254;
        this.expression();
        this.state = 259;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__1) {
            this.state = 255;
            this.match(resourcePolicyParser.T__1);
            this.state = 256;
            this.expression();
            this.state = 261;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 262;
        this.match(resourcePolicyParser.T__18);
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
    this.ruleIndex = resourcePolicyParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;


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




resourcePolicyParser.FuncnameContext = FuncnameContext;

resourcePolicyParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, resourcePolicyParser.RULE_funcname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(resourcePolicyParser.T__25);
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
    this.ruleIndex = resourcePolicyParser.RULE_atom;
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

AtomContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AtomContext.prototype.INT = function() {
    return this.getToken(resourcePolicyParser.INT, 0);
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




resourcePolicyParser.AtomContext = AtomContext;

resourcePolicyParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, resourcePolicyParser.RULE_atom);
    try {
        this.state = 274;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 266;
            this.scientific();
            break;
        case resourcePolicyParser.PI:
        case resourcePolicyParser.EULER:
            this.enterOuterAlt(localctx, 2);
            this.state = 267;
            this.constant();
            break;
        case resourcePolicyParser.T__17:
            this.enterOuterAlt(localctx, 3);
            this.state = 268;
            this.match(resourcePolicyParser.T__17);
            this.state = 269;
            this.expression();
            this.state = 270;
            this.match(resourcePolicyParser.T__18);
            break;
        case resourcePolicyParser.INT:
            this.enterOuterAlt(localctx, 4);
            this.state = 272;
            this.match(resourcePolicyParser.INT);
            break;
        case resourcePolicyParser.ID:
        case resourcePolicyParser.VARIABLE_CONTRACT:
            this.enterOuterAlt(localctx, 5);
            this.state = 273;
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
    this.ruleIndex = resourcePolicyParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(resourcePolicyParser.SCIENTIFIC_NUMBER, 0);
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




resourcePolicyParser.ScientificContext = ScientificContext;

resourcePolicyParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, resourcePolicyParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 276;
        this.match(resourcePolicyParser.SCIENTIFIC_NUMBER);
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
    this.ruleIndex = resourcePolicyParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.PI = function() {
    return this.getToken(resourcePolicyParser.PI, 0);
};

ConstantContext.prototype.EULER = function() {
    return this.getToken(resourcePolicyParser.EULER, 0);
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




resourcePolicyParser.ConstantContext = ConstantContext;

resourcePolicyParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, resourcePolicyParser.RULE_constant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        _la = this._input.LA(1);
        if(!(_la===resourcePolicyParser.PI || _la===resourcePolicyParser.EULER)) {
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
    this.ruleIndex = resourcePolicyParser.RULE_variable;
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

resourcePolicyParser.VariableEnvironmentContext = VariableEnvironmentContext;

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

resourcePolicyParser.VariableArgContext = VariableArgContext;

VariableArgContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
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



resourcePolicyParser.VariableContext = VariableContext;

resourcePolicyParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, resourcePolicyParser.RULE_variable);
    try {
        this.state = 282;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.VARIABLE_CONTRACT:
            localctx = new VariableEnvironmentContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 280;
            this.environment_variable();
            break;
        case resourcePolicyParser.ID:
            localctx = new VariableArgContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 281;
            this.match(resourcePolicyParser.ID);
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
    this.ruleIndex = resourcePolicyParser.RULE_expression_call_or_literal;
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




resourcePolicyParser.Expression_call_or_literalContext = Expression_call_or_literalContext;

resourcePolicyParser.prototype.expression_call_or_literal = function() {

    var localctx = new Expression_call_or_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, resourcePolicyParser.RULE_expression_call_or_literal);
    try {
        this.state = 286;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 284;
            this.expression_call();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 285;
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
    this.ruleIndex = resourcePolicyParser.RULE_expression_call;
    return this;
}

Expression_callContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_callContext.prototype.constructor = Expression_callContext;

Expression_callContext.prototype.expression_handle = function() {
    return this.getTypedRuleContext(Expression_handleContext,0);
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




resourcePolicyParser.Expression_callContext = Expression_callContext;

resourcePolicyParser.prototype.expression_call = function() {

    var localctx = new Expression_callContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, resourcePolicyParser.RULE_expression_call);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.expression_handle();
        this.state = 289;
        this.match(resourcePolicyParser.T__17);
        this.state = 300;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.INT || _la===resourcePolicyParser.VARIABLE_CONTRACT) {
            this.state = 290;
            this.expression_call_argument();
            this.state = 295;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===resourcePolicyParser.T__1) {
                this.state = 291;
                this.match(resourcePolicyParser.T__1);
                this.state = 292;
                this.expression_call_argument();
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 302;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 303;
        this.match(resourcePolicyParser.T__18);
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
    this.ruleIndex = resourcePolicyParser.RULE_expression_call_argument;
    return this;
}

Expression_call_argumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expression_call_argumentContext.prototype.constructor = Expression_call_argumentContext;

Expression_call_argumentContext.prototype.INT = function() {
    return this.getToken(resourcePolicyParser.INT, 0);
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




resourcePolicyParser.Expression_call_argumentContext = Expression_call_argumentContext;

resourcePolicyParser.prototype.expression_call_argument = function() {

    var localctx = new Expression_call_argumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, resourcePolicyParser.RULE_expression_call_argument);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case resourcePolicyParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 305;
            this.match(resourcePolicyParser.INT);
            break;
        case resourcePolicyParser.VARIABLE_CONTRACT:
            this.enterOuterAlt(localctx, 2);
            this.state = 306;
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
    this.ruleIndex = resourcePolicyParser.RULE_environment_variable;
    return this;
}

Environment_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Environment_variableContext.prototype.constructor = Environment_variableContext;

Environment_variableContext.prototype.VARIABLE_CONTRACT = function() {
    return this.getToken(resourcePolicyParser.VARIABLE_CONTRACT, 0);
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




resourcePolicyParser.Environment_variableContext = Environment_variableContext;

resourcePolicyParser.prototype.environment_variable = function() {

    var localctx = new Environment_variableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, resourcePolicyParser.RULE_environment_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(resourcePolicyParser.VARIABLE_CONTRACT);
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
    this.ruleIndex = resourcePolicyParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.event_service = function() {
    return this.getTypedRuleContext(Event_serviceContext,0);
};

EventContext.prototype.event_name = function() {
    return this.getTypedRuleContext(Event_nameContext,0);
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




resourcePolicyParser.EventContext = EventContext;

resourcePolicyParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, resourcePolicyParser.RULE_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.event_service();
        this.state = 312;
        this.match(resourcePolicyParser.T__16);
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 313;
            this.event_path();
            this.state = 314;
            this.match(resourcePolicyParser.T__16);

        }
        this.state = 318;
        this.event_name();
        this.state = 320;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===resourcePolicyParser.T__17) {
            this.state = 319;
            this.event_args();
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


function Event_serviceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_event_service;
    return this;
}

Event_serviceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_serviceContext.prototype.constructor = Event_serviceContext;

Event_serviceContext.prototype.EVENT_SERVICE_NAME = function() {
    return this.getToken(resourcePolicyParser.EVENT_SERVICE_NAME, 0);
};

Event_serviceContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent_service(this);
	}
};

Event_serviceContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent_service(this);
	}
};

Event_serviceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent_service(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicyParser.Event_serviceContext = Event_serviceContext;

resourcePolicyParser.prototype.event_service = function() {

    var localctx = new Event_serviceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, resourcePolicyParser.RULE_event_service);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.match(resourcePolicyParser.EVENT_SERVICE_NAME);
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
    this.ruleIndex = resourcePolicyParser.RULE_event_path;
    return this;
}

Event_pathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_pathContext.prototype.constructor = Event_pathContext;

Event_pathContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicyParser.ID);
    } else {
        return this.getToken(resourcePolicyParser.ID, i);
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




resourcePolicyParser.Event_pathContext = Event_pathContext;

resourcePolicyParser.prototype.event_path = function() {

    var localctx = new Event_pathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, resourcePolicyParser.RULE_event_path);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 324;
        		this.match(resourcePolicyParser.ID);
        		this.state = 325;
        		this.match(resourcePolicyParser.T__16);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 328; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 330;
        this.match(resourcePolicyParser.ID);
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


function Event_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = resourcePolicyParser.RULE_event_name;
    return this;
}

Event_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_nameContext.prototype.constructor = Event_nameContext;

Event_nameContext.prototype.ID = function() {
    return this.getToken(resourcePolicyParser.ID, 0);
};

Event_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.enterEvent_name(this);
	}
};

Event_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof resourcePolicyListener ) {
        listener.exitEvent_name(this);
	}
};

Event_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof resourcePolicyVisitor ) {
        return visitor.visitEvent_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




resourcePolicyParser.Event_nameContext = Event_nameContext;

resourcePolicyParser.prototype.event_name = function() {

    var localctx = new Event_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, resourcePolicyParser.RULE_event_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(resourcePolicyParser.ID);
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
    this.ruleIndex = resourcePolicyParser.RULE_event_args;
    return this;
}

Event_argsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Event_argsContext.prototype.constructor = Event_argsContext;

Event_argsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(resourcePolicyParser.ID);
    } else {
        return this.getToken(resourcePolicyParser.ID, i);
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




resourcePolicyParser.Event_argsContext = Event_argsContext;

resourcePolicyParser.prototype.event_args = function() {

    var localctx = new Event_argsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, resourcePolicyParser.RULE_event_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(resourcePolicyParser.T__17);
        this.state = 335;
        this.match(resourcePolicyParser.ID);
        this.state = 340;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===resourcePolicyParser.T__1) {
            this.state = 336;
            this.match(resourcePolicyParser.T__1);
            this.state = 337;
            this.match(resourcePolicyParser.ID);
            this.state = 342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 343;
        this.match(resourcePolicyParser.T__18);
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


resourcePolicyParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.audience_clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

resourcePolicyParser.prototype.audience_clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.resourcePolicyParser = resourcePolicyParser;
