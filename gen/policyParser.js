// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var policyListener = require('./policyListener').policyListener;
var grammarFileName = "policy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00033\u0112\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0003",
    "\u0002\u0003\u0002\u0006\u0002K\n\u0002\r\u0002\u000e\u0002L\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003T\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003Y\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0006\u0004_\n\u0004\r\u0004\u000e",
    "\u0004`\u0003\u0004\u0003\u0004\u0007\u0004e\n\u0004\f\u0004\u000e\u0004",
    "h\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005m\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005r\n\u0005\u0005\u0005",
    "t\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006y\n\u0006\f",
    "\u0006\u000e\u0006|\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u0082\n\u0007\f\u0007\u000e\u0007\u0085\u000b",
    "\u0007\u0003\b\u0003\b\u0006\b\u0089\n\b\r\b\u000e\b\u008a\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u0096",
    "\n\n\f\n\u000e\n\u0099\u000b\n\u0003\n\u0003\n\u0007\n\u009d\n\n\f\n",
    "\u000e\n\u00a0\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ac\n\f\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00b8\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00bd\n\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00c7\n\u0011\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00cb\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0006\u0015\u00d8\n\u0015\r\u0015\u000e\u0015\u00d9\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00de\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u00e8\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u00f7\n\u001e\f\u001e",
    "\u000e\u001e\u00fa\u000b\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u00ff\n\u001f\f\u001f\u000e\u001f\u0102\u000b\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0002\u0002%\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDF\u0002",
    "\u0004\u0004\u0002\u0013\u0013\u001d\u001d\u0003\u0002\u001e \u0002",
    "\u0110\u0002H\u0003\u0002\u0002\u0002\u0004P\u0003\u0002\u0002\u0002",
    "\u0006\\\u0003\u0002\u0002\u0002\bs\u0003\u0002\u0002\u0002\nu\u0003",
    "\u0002\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e\u0086\u0003\u0002",
    "\u0002\u0002\u0010\u008c\u0003\u0002\u0002\u0002\u0012\u0090\u0003\u0002",
    "\u0002\u0002\u0014\u00a1\u0003\u0002\u0002\u0002\u0016\u00ab\u0003\u0002",
    "\u0002\u0002\u0018\u00ad\u0003\u0002\u0002\u0002\u001a\u00b7\u0003\u0002",
    "\u0002\u0002\u001c\u00b9\u0003\u0002\u0002\u0002\u001e\u00be\u0003\u0002",
    "\u0002\u0002 \u00c6\u0003\u0002\u0002\u0002\"\u00ca\u0003\u0002\u0002",
    "\u0002$\u00cc\u0003\u0002\u0002\u0002&\u00d2\u0003\u0002\u0002\u0002",
    "(\u00d5\u0003\u0002\u0002\u0002*\u00dd\u0003\u0002\u0002\u0002,\u00df",
    "\u0003\u0002\u0002\u0002.\u00e2\u0003\u0002\u0002\u00020\u00e7\u0003",
    "\u0002\u0002\u00022\u00e9\u0003\u0002\u0002\u00024\u00ec\u0003\u0002",
    "\u0002\u00026\u00ef\u0003\u0002\u0002\u00028\u00f1\u0003\u0002\u0002",
    "\u0002:\u00f3\u0003\u0002\u0002\u0002<\u00fb\u0003\u0002\u0002\u0002",
    ">\u0103\u0003\u0002\u0002\u0002@\u0105\u0003\u0002\u0002\u0002B\u0107",
    "\u0003\u0002\u0002\u0002D\u0109\u0003\u0002\u0002\u0002F\u010d\u0003",
    "\u0002\u0002\u0002HJ\u0005\u0004\u0003\u0002IK\u0005\u0006\u0004\u0002",
    "JI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0007\u0002",
    "\u0002\u0003O\u0003\u0003\u0002\u0002\u0002PQ\u0007\u0003\u0002\u0002",
    "QS\u00073\u0002\u0002RT\u0005D#\u0002SR\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\u0007\u0004\u0002\u0002",
    "VX\u00073\u0002\u0002WY\u0005F$\u0002XW\u0003\u0002\u0002\u0002XY\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0007\u0005\u0002\u0002",
    "[\u0005\u0003\u0002\u0002\u0002\\^\u0007!\u0002\u0002]_\u0005\b\u0005",
    "\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`^\u0003\u0002",
    "\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bf\u0007",
    "\u0006\u0002\u0002ce\u0005\u000e\b\u0002dc\u0003\u0002\u0002\u0002e",
    "h\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002",
    "\u0002g\u0007\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002il\u0005",
    "\n\u0006\u0002jk\u0007\u0007\u0002\u0002km\u0005\f\u0007\u0002lj\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mt\u0003\u0002\u0002\u0002",
    "nq\u0005\f\u0007\u0002op\u0007\u0007\u0002\u0002pr\u0005\n\u0006\u0002",
    "qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rt\u0003\u0002\u0002",
    "\u0002si\u0003\u0002\u0002\u0002sn\u0003\u0002\u0002\u0002t\t\u0003",
    "\u0002\u0002\u0002uz\u0005:\u001e\u0002vw\u0007\b\u0002\u0002wy\u0005",
    ":\u001e\u0002xv\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx",
    "\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{\u000b\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002}~\u0007\t\u0002\u0002~\u0083",
    "\u0005<\u001f\u0002\u007f\u0080\u0007\b\u0002\u0002\u0080\u0082\u0005",
    "<\u001f\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0085\u0003",
    "\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003",
    "\u0002\u0002\u0002\u0084\r\u0003\u0002\u0002\u0002\u0085\u0083\u0003",
    "\u0002\u0002\u0002\u0086\u0088\u0005\u0010\t\u0002\u0087\u0089\u0005",
    "\u0012\n\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003",
    "\u0002\u0002\u0002\u008b\u000f\u0003\u0002\u0002\u0002\u008c\u008d\u0007",
    "&\u0002\u0002\u008d\u008e\u00070\u0002\u0002\u008e\u008f\u0007\u0006",
    "\u0002\u0002\u008f\u0011\u0003\u0002\u0002\u0002\u0090\u0091\u0007$",
    "\u0002\u0002\u0091\u0092\u0007%\u0002\u0002\u0092\u0093\u00070\u0002",
    "\u0002\u0093\u0097\u0007\'\u0002\u0002\u0094\u0096\u0005\u0014\u000b",
    "\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002",
    "\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002",
    "\u0002\u009a\u009e\u0005\u0016\f\u0002\u009b\u009d\u0005\u0018\r\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002",
    "\u009f\u0013\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0007(\u0002\u0002\u00a2\u0015\u0003\u0002\u0002\u0002",
    "\u00a3\u00ac\u0005\u001a\u000e\u0002\u00a4\u00ac\u0005\u001e\u0010\u0002",
    "\u00a5\u00ac\u0005 \u0011\u0002\u00a6\u00ac\u0005\"\u0012\u0002\u00a7",
    "\u00ac\u0005(\u0015\u0002\u00a8\u00ac\u0005*\u0016\u0002\u00a9\u00ac",
    "\u00050\u0019\u0002\u00aa\u00ac\u00056\u001c\u0002\u00ab\u00a3\u0003",
    "\u0002\u0002\u0002\u00ab\u00a4\u0003\u0002\u0002\u0002\u00ab\u00a5\u0003",
    "\u0002\u0002\u0002\u00ab\u00a6\u0003\u0002\u0002\u0002\u00ab\u00a7\u0003",
    "\u0002\u0002\u0002\u00ab\u00a8\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003",
    "\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac\u0017\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0007\u0007\u0002\u0002\u00ae\u00af\u0005",
    "\u0016\f\u0002\u00af\u0019\u0003\u0002\u0002\u0002\u00b0\u00b8\u0007",
    "\n\u0002\u0002\u00b1\u00b8\u0007\u000b\u0002\u0002\u00b2\u00b8\u0007",
    "\f\u0002\u0002\u00b3\u00b8\u0007\r\u0002\u0002\u00b4\u00b8\u0007\u000e",
    "\u0002\u0002\u00b5\u00b8\u0007\u000f\u0002\u0002\u00b6\u00b8\u0005\u001c",
    "\u000f\u0002\u00b7\u00b0\u0003\u0002\u0002\u0002\u00b7\u00b1\u0003\u0002",
    "\u0002\u0002\u00b7\u00b2\u0003\u0002\u0002\u0002\u00b7\u00b3\u0003\u0002",
    "\u0002\u0002\u00b7\u00b4\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002",
    "\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u001b\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0007\u0010\u0002\u0002\u00ba\u00bc\u00073",
    "\u0002\u0002\u00bb\u00bd\u0005F$\u0002\u00bc\u00bb\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u001d\u0003\u0002\u0002",
    "\u0002\u00be\u00bf\u0007\u0011\u0002\u0002\u00bf\u001f\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0007\u0012\u0002\u0002\u00c1\u00c2\u00072\u0002",
    "\u0002\u00c2\u00c7\u0007\u0013\u0002\u0002\u00c3\u00c4\u0007\u0012\u0002",
    "\u0002\u00c4\u00c5\u00072\u0002\u0002\u00c5\u00c7\u0007\u0014\u0002",
    "\u0002\u00c6\u00c0\u0003\u0002\u0002\u0002\u00c6\u00c3\u0003\u0002\u0002",
    "\u0002\u00c7!\u0003\u0002\u0002\u0002\u00c8\u00cb\u0005$\u0013\u0002",
    "\u00c9\u00cb\u0005&\u0014\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002",
    "\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb#\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0007\u0015\u0002\u0002\u00cd\u00ce\u00072\u0002\u0002",
    "\u00ce\u00cf\u0007\u0016\u0002\u0002\u00cf\u00d0\u00072\u0002\u0002",
    "\u00d0\u00d1\u0005B\"\u0002\u00d1%\u0003\u0002\u0002\u0002\u00d2\u00d3",
    "\u0007\u0017\u0002\u0002\u00d3\u00d4\u00072\u0002\u0002\u00d4\'\u0003",
    "\u0002\u0002\u0002\u00d5\u00d7\u0007*\u0002\u0002\u00d6\u00d8\u0005",
    "8\u001d\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003",
    "\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003",
    "\u0002\u0002\u0002\u00da)\u0003\u0002\u0002\u0002\u00db\u00de\u0005",
    ",\u0017\u0002\u00dc\u00de\u0005.\u0018\u0002\u00dd\u00db\u0003\u0002",
    "\u0002\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00de+\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007\u0018\u0002\u0002\u00e0\u00e1\u00072",
    "\u0002\u0002\u00e1-\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007\u0019",
    "\u0002\u0002\u00e3\u00e4\u00072\u0002\u0002\u00e4/\u0003\u0002\u0002",
    "\u0002\u00e5\u00e8\u00052\u001a\u0002\u00e6\u00e8\u00054\u001b\u0002",
    "\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002",
    "\u00e81\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007\u001a\u0002\u0002",
    "\u00ea\u00eb\u00072\u0002\u0002\u00eb3\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0007\u001b\u0002\u0002\u00ed\u00ee\u00072\u0002\u0002\u00ee",
    "5\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u001c\u0002\u0002\u00f0",
    "7\u0003\u0002\u0002\u0002\u00f1\u00f2\u00070\u0002\u0002\u00f29\u0003",
    "\u0002\u0002\u0002\u00f3\u00f8\u00070\u0002\u0002\u00f4\u00f5\u0007",
    "\b\u0002\u0002\u00f5\u00f7\u00070\u0002\u0002\u00f6\u00f4\u0003\u0002",
    "\u0002\u0002\u00f7\u00fa\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002",
    "\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9;\u0003\u0002",
    "\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fb\u0100\u00070",
    "\u0002\u0002\u00fc\u00fd\u0007\b\u0002\u0002\u00fd\u00ff\u00070\u0002",
    "\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00ff\u0102\u0003\u0002\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002",
    "\u0002\u0101=\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0007\u0007\u0002\u0002\u0104?\u0003\u0002\u0002",
    "\u0002\u0105\u0106\t\u0002\u0002\u0002\u0106A\u0003\u0002\u0002\u0002",
    "\u0107\u0108\t\u0003\u0002\u0002\u0108C\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u00072\u0002\u0002\u010a\u010b\u0007\u0006\u0002\u0002\u010b",
    "\u010c\u00072\u0002\u0002\u010cE\u0003\u0002\u0002\u0002\u010d\u010e",
    "\u00072\u0002\u0002\u010e\u010f\u0007\u0006\u0002\u0002\u010f\u0110",
    "\u00072\u0002\u0002\u0110G\u0003\u0002\u0002\u0002\u0019LSX`flqsz\u0083",
    "\u008a\u0097\u009e\u00ab\u00b7\u00bc\u00c6\u00ca\u00d9\u00dd\u00e7\u00f8",
    "\u0100"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'This contract shall commence with effect from'", 
                     "'and shall continue until'", "'unless terminated earlier in accordance with its terms and conditions'", 
                     "':'", "'and'", "','", "'users in'", "'the end of hour'", 
                     "'the end of day'", "'the end of week'", "'the end of month'", 
                     "'the end of quarter'", "'the end of year'", "'the end of'", 
                     "'price priceExpression'", "'transaction of'", "'in total'", 
                     "'for once'", "'contract_guaranty of'", "'refund after'", 
                     "'platform_guaranty of'", "'visit_increment of'", "'visit of'", 
                     "'account_balance greater than'", "'account_balance smaller than'", 
                     "'account_settled'", "'per view'", "'year'", "'month'", 
                     "'day'", "'For'", "'usergroups'", "'users'", "'proceed'", 
                     "'to'", "'in'", "'on'", "'accepting'", null, "'license'", 
                     "'paying'", "'per'", "'view'", "'require'", "'nothing'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "FOR", "USERGROUPS", "USERS", 
                      "PROCEED", "TO", "IN", "ON", "ACCEPTING", "SELF", 
                      "LICENSE", "PAYING", "PER", "VIEW", "REQUIRE", "NOTHING", 
                      "ID", "WS", "INT", "DATE" ];

var ruleNames =  [ "p", "duration", "segment", "audience_clause", "audience_individuals_clause", 
                   "audience_groups_clause", "state_clause", "current_state_clause", 
                   "target_clause", "accepting", "event", "and_event", "time_event", 
                   "end_time_event", "price_event", "transaction_event", 
                   "guaranty_event", "contract_guaranty", "platform_guaranty", 
                   "signing_event", "access_count_event", "visit_increment_event", 
                   "visit_event", "balance_event", "balance_greater", "balance_smaller", 
                   "settlement_event", "license_resource_id", "users", "user_groups", 
                   "and", "view_unit", "time_unit", "start_hour", "end_hour" ];

function policyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

policyParser.prototype = Object.create(antlr4.Parser.prototype);
policyParser.prototype.constructor = policyParser;

Object.defineProperty(policyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

policyParser.EOF = antlr4.Token.EOF;
policyParser.T__0 = 1;
policyParser.T__1 = 2;
policyParser.T__2 = 3;
policyParser.T__3 = 4;
policyParser.T__4 = 5;
policyParser.T__5 = 6;
policyParser.T__6 = 7;
policyParser.T__7 = 8;
policyParser.T__8 = 9;
policyParser.T__9 = 10;
policyParser.T__10 = 11;
policyParser.T__11 = 12;
policyParser.T__12 = 13;
policyParser.T__13 = 14;
policyParser.T__14 = 15;
policyParser.T__15 = 16;
policyParser.T__16 = 17;
policyParser.T__17 = 18;
policyParser.T__18 = 19;
policyParser.T__19 = 20;
policyParser.T__20 = 21;
policyParser.T__21 = 22;
policyParser.T__22 = 23;
policyParser.T__23 = 24;
policyParser.T__24 = 25;
policyParser.T__25 = 26;
policyParser.T__26 = 27;
policyParser.T__27 = 28;
policyParser.T__28 = 29;
policyParser.T__29 = 30;
policyParser.FOR = 31;
policyParser.USERGROUPS = 32;
policyParser.USERS = 33;
policyParser.PROCEED = 34;
policyParser.TO = 35;
policyParser.IN = 36;
policyParser.ON = 37;
policyParser.ACCEPTING = 38;
policyParser.SELF = 39;
policyParser.LICENSE = 40;
policyParser.PAYING = 41;
policyParser.PER = 42;
policyParser.VIEW = 43;
policyParser.REQUIRE = 44;
policyParser.NOTHING = 45;
policyParser.ID = 46;
policyParser.WS = 47;
policyParser.INT = 48;
policyParser.DATE = 49;

policyParser.RULE_p = 0;
policyParser.RULE_duration = 1;
policyParser.RULE_segment = 2;
policyParser.RULE_audience_clause = 3;
policyParser.RULE_audience_individuals_clause = 4;
policyParser.RULE_audience_groups_clause = 5;
policyParser.RULE_state_clause = 6;
policyParser.RULE_current_state_clause = 7;
policyParser.RULE_target_clause = 8;
policyParser.RULE_accepting = 9;
policyParser.RULE_event = 10;
policyParser.RULE_and_event = 11;
policyParser.RULE_time_event = 12;
policyParser.RULE_end_time_event = 13;
policyParser.RULE_price_event = 14;
policyParser.RULE_transaction_event = 15;
policyParser.RULE_guaranty_event = 16;
policyParser.RULE_contract_guaranty = 17;
policyParser.RULE_platform_guaranty = 18;
policyParser.RULE_signing_event = 19;
policyParser.RULE_access_count_event = 20;
policyParser.RULE_visit_increment_event = 21;
policyParser.RULE_visit_event = 22;
policyParser.RULE_balance_event = 23;
policyParser.RULE_balance_greater = 24;
policyParser.RULE_balance_smaller = 25;
policyParser.RULE_settlement_event = 26;
policyParser.RULE_license_resource_id = 27;
policyParser.RULE_users = 28;
policyParser.RULE_user_groups = 29;
policyParser.RULE_and = 30;
policyParser.RULE_view_unit = 31;
policyParser.RULE_time_unit = 32;
policyParser.RULE_start_hour = 33;
policyParser.RULE_end_hour = 34;

function PContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_p;
    return this;
}

PContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PContext.prototype.constructor = PContext;

PContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

PContext.prototype.EOF = function() {
    return this.getToken(policyParser.EOF, 0);
};

PContext.prototype.segment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SegmentContext);
    } else {
        return this.getTypedRuleContext(SegmentContext,i);
    }
};

PContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterP(this);
	}
};

PContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitP(this);
	}
};




policyParser.PContext = PContext;

policyParser.prototype.p = function() {

    var localctx = new PContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, policyParser.RULE_p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.duration();
        this.state = 72; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 71;
            this.segment();
            this.state = 74; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.FOR);
        this.state = 76;
        this.match(policyParser.EOF);
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

function DurationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.DATE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.DATE);
    } else {
        return this.getToken(policyParser.DATE, i);
    }
};


DurationContext.prototype.start_hour = function() {
    return this.getTypedRuleContext(Start_hourContext,0);
};

DurationContext.prototype.end_hour = function() {
    return this.getTypedRuleContext(End_hourContext,0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitDuration(this);
	}
};




policyParser.DurationContext = DurationContext;

policyParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, policyParser.RULE_duration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(policyParser.T__0);
        this.state = 79;
        this.match(policyParser.DATE);
        this.state = 81;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.INT) {
            this.state = 80;
            this.start_hour();
        }

        this.state = 83;
        this.match(policyParser.T__1);
        this.state = 84;
        this.match(policyParser.DATE);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.INT) {
            this.state = 85;
            this.end_hour();
        }

        this.state = 88;
        this.match(policyParser.T__2);
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

function SegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_segment;
    return this;
}

SegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentContext.prototype.constructor = SegmentContext;

SegmentContext.prototype.FOR = function() {
    return this.getToken(policyParser.FOR, 0);
};

SegmentContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

SegmentContext.prototype.state_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_clauseContext);
    } else {
        return this.getTypedRuleContext(State_clauseContext,i);
    }
};

SegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterSegment(this);
	}
};

SegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSegment(this);
	}
};




policyParser.SegmentContext = SegmentContext;

policyParser.prototype.segment = function() {

    var localctx = new SegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, policyParser.RULE_segment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(policyParser.FOR);
        this.state = 92; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 91;
            this.audience_clause();
            this.state = 94; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.T__6 || _la===policyParser.ID);
        this.state = 96;
        this.match(policyParser.T__3);
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.IN) {
            this.state = 97;
            this.state_clause();
            this.state = 102;
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

function Audience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.audience_individuals_clause = function() {
    return this.getTypedRuleContext(Audience_individuals_clauseContext,0);
};

Audience_clauseContext.prototype.audience_groups_clause = function() {
    return this.getTypedRuleContext(Audience_groups_clauseContext,0);
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_clause(this);
	}
};




policyParser.Audience_clauseContext = Audience_clauseContext;

policyParser.prototype.audience_clause = function() {

    var localctx = new Audience_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, policyParser.RULE_audience_clause);
    var _la = 0; // Token type
    try {
        this.state = 113;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.audience_individuals_clause();
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===policyParser.T__4) {
                this.state = 104;
                this.match(policyParser.T__4);
                this.state = 105;
                this.audience_groups_clause();
            }

            break;
        case policyParser.T__6:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.audience_groups_clause();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===policyParser.T__4) {
                this.state = 109;
                this.match(policyParser.T__4);
                this.state = 110;
                this.audience_individuals_clause();
            }

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

function Audience_individuals_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_individuals_clause;
    return this;
}

Audience_individuals_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_individuals_clauseContext.prototype.constructor = Audience_individuals_clauseContext;

Audience_individuals_clauseContext.prototype.users = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsersContext);
    } else {
        return this.getTypedRuleContext(UsersContext,i);
    }
};

Audience_individuals_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_individuals_clause(this);
	}
};

Audience_individuals_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_individuals_clause(this);
	}
};




policyParser.Audience_individuals_clauseContext = Audience_individuals_clauseContext;

policyParser.prototype.audience_individuals_clause = function() {

    var localctx = new Audience_individuals_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, policyParser.RULE_audience_individuals_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.users();
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__5) {
            this.state = 116;
            this.match(policyParser.T__5);
            this.state = 117;
            this.users();
            this.state = 122;
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

function Audience_groups_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_audience_groups_clause;
    return this;
}

Audience_groups_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_groups_clauseContext.prototype.constructor = Audience_groups_clauseContext;

Audience_groups_clauseContext.prototype.user_groups = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(User_groupsContext);
    } else {
        return this.getTypedRuleContext(User_groupsContext,i);
    }
};

Audience_groups_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAudience_groups_clause(this);
	}
};

Audience_groups_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAudience_groups_clause(this);
	}
};




policyParser.Audience_groups_clauseContext = Audience_groups_clauseContext;

policyParser.prototype.audience_groups_clause = function() {

    var localctx = new Audience_groups_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, policyParser.RULE_audience_groups_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(policyParser.T__6);
        this.state = 124;
        this.user_groups();
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__5) {
            this.state = 125;
            this.match(policyParser.T__5);
            this.state = 126;
            this.user_groups();
            this.state = 131;
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

function State_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_state_clause;
    return this;
}

State_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_clauseContext.prototype.constructor = State_clauseContext;

State_clauseContext.prototype.current_state_clause = function() {
    return this.getTypedRuleContext(Current_state_clauseContext,0);
};

State_clauseContext.prototype.target_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Target_clauseContext);
    } else {
        return this.getTypedRuleContext(Target_clauseContext,i);
    }
};

State_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterState_clause(this);
	}
};

State_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitState_clause(this);
	}
};




policyParser.State_clauseContext = State_clauseContext;

policyParser.prototype.state_clause = function() {

    var localctx = new State_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, policyParser.RULE_state_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.current_state_clause();
        this.state = 134; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 133;
            this.target_clause();
            this.state = 136; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.PROCEED);
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

function Current_state_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_current_state_clause;
    return this;
}

Current_state_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Current_state_clauseContext.prototype.constructor = Current_state_clauseContext;

Current_state_clauseContext.prototype.IN = function() {
    return this.getToken(policyParser.IN, 0);
};

Current_state_clauseContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

Current_state_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterCurrent_state_clause(this);
	}
};

Current_state_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitCurrent_state_clause(this);
	}
};




policyParser.Current_state_clauseContext = Current_state_clauseContext;

policyParser.prototype.current_state_clause = function() {

    var localctx = new Current_state_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, policyParser.RULE_current_state_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(policyParser.IN);
        this.state = 139;
        this.match(policyParser.ID);
        this.state = 140;
        this.match(policyParser.T__3);
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

function Target_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_target_clause;
    return this;
}

Target_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Target_clauseContext.prototype.constructor = Target_clauseContext;

Target_clauseContext.prototype.PROCEED = function() {
    return this.getToken(policyParser.PROCEED, 0);
};

Target_clauseContext.prototype.TO = function() {
    return this.getToken(policyParser.TO, 0);
};

Target_clauseContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

Target_clauseContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

Target_clauseContext.prototype.accepting = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AcceptingContext);
    } else {
        return this.getTypedRuleContext(AcceptingContext,i);
    }
};

Target_clauseContext.prototype.and_event = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_eventContext);
    } else {
        return this.getTypedRuleContext(And_eventContext,i);
    }
};

Target_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTarget_clause(this);
	}
};

Target_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTarget_clause(this);
	}
};




policyParser.Target_clauseContext = Target_clauseContext;

policyParser.prototype.target_clause = function() {

    var localctx = new Target_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, policyParser.RULE_target_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(policyParser.PROCEED);
        this.state = 143;
        this.match(policyParser.TO);
        this.state = 144;
        this.match(policyParser.ID);
        this.state = 145;
        this.match(policyParser.ON);
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.ACCEPTING) {
            this.state = 146;
            this.accepting();
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 152;
        this.event();
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===policyParser.T__4) {
            this.state = 153;
            this.and_event();
            this.state = 158;
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

function AcceptingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_accepting;
    return this;
}

AcceptingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AcceptingContext.prototype.constructor = AcceptingContext;


AcceptingContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAccepting(this);
	}
};

AcceptingContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAccepting(this);
	}
};




policyParser.AcceptingContext = AcceptingContext;

policyParser.prototype.accepting = function() {

    var localctx = new AcceptingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, policyParser.RULE_accepting);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(policyParser.ACCEPTING);
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
    this.ruleIndex = policyParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.time_event = function() {
    return this.getTypedRuleContext(Time_eventContext,0);
};

EventContext.prototype.price_event = function() {
    return this.getTypedRuleContext(Price_eventContext,0);
};

EventContext.prototype.transaction_event = function() {
    return this.getTypedRuleContext(Transaction_eventContext,0);
};

EventContext.prototype.guaranty_event = function() {
    return this.getTypedRuleContext(Guaranty_eventContext,0);
};

EventContext.prototype.signing_event = function() {
    return this.getTypedRuleContext(Signing_eventContext,0);
};

EventContext.prototype.access_count_event = function() {
    return this.getTypedRuleContext(Access_count_eventContext,0);
};

EventContext.prototype.balance_event = function() {
    return this.getTypedRuleContext(Balance_eventContext,0);
};

EventContext.prototype.settlement_event = function() {
    return this.getTypedRuleContext(Settlement_eventContext,0);
};

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitEvent(this);
	}
};




policyParser.EventContext = EventContext;

policyParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, policyParser.RULE_event);
    try {
        this.state = 169;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__7:
        case policyParser.T__8:
        case policyParser.T__9:
        case policyParser.T__10:
        case policyParser.T__11:
        case policyParser.T__12:
        case policyParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.time_event();
            break;
        case policyParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.price_event();
            break;
        case policyParser.T__15:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.transaction_event();
            break;
        case policyParser.T__18:
        case policyParser.T__20:
            this.enterOuterAlt(localctx, 4);
            this.state = 164;
            this.guaranty_event();
            break;
        case policyParser.LICENSE:
            this.enterOuterAlt(localctx, 5);
            this.state = 165;
            this.signing_event();
            break;
        case policyParser.T__21:
        case policyParser.T__22:
            this.enterOuterAlt(localctx, 6);
            this.state = 166;
            this.access_count_event();
            break;
        case policyParser.T__23:
        case policyParser.T__24:
            this.enterOuterAlt(localctx, 7);
            this.state = 167;
            this.balance_event();
            break;
        case policyParser.T__25:
            this.enterOuterAlt(localctx, 8);
            this.state = 168;
            this.settlement_event();
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

function And_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_and_event;
    return this;
}

And_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_eventContext.prototype.constructor = And_eventContext;

And_eventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

And_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAnd_event(this);
	}
};

And_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAnd_event(this);
	}
};




policyParser.And_eventContext = And_eventContext;

policyParser.prototype.and_event = function() {

    var localctx = new And_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, policyParser.RULE_and_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(policyParser.T__4);
        this.state = 172;
        this.event();
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

function Time_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_time_event;
    return this;
}

Time_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_eventContext.prototype.constructor = Time_eventContext;

Time_eventContext.prototype.end_time_event = function() {
    return this.getTypedRuleContext(End_time_eventContext,0);
};

Time_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTime_event(this);
	}
};

Time_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTime_event(this);
	}
};




policyParser.Time_eventContext = Time_eventContext;

policyParser.prototype.time_event = function() {

    var localctx = new Time_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, policyParser.RULE_time_event);
    try {
        this.state = 181;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this.match(policyParser.T__7);
            break;
        case policyParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(policyParser.T__8);
            break;
        case policyParser.T__9:
            this.enterOuterAlt(localctx, 3);
            this.state = 176;
            this.match(policyParser.T__9);
            break;
        case policyParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 177;
            this.match(policyParser.T__10);
            break;
        case policyParser.T__11:
            this.enterOuterAlt(localctx, 5);
            this.state = 178;
            this.match(policyParser.T__11);
            break;
        case policyParser.T__12:
            this.enterOuterAlt(localctx, 6);
            this.state = 179;
            this.match(policyParser.T__12);
            break;
        case policyParser.T__13:
            this.enterOuterAlt(localctx, 7);
            this.state = 180;
            this.end_time_event();
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

function End_time_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_end_time_event;
    return this;
}

End_time_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
End_time_eventContext.prototype.constructor = End_time_eventContext;

End_time_eventContext.prototype.DATE = function() {
    return this.getToken(policyParser.DATE, 0);
};

End_time_eventContext.prototype.end_hour = function() {
    return this.getTypedRuleContext(End_hourContext,0);
};

End_time_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterEnd_time_event(this);
	}
};

End_time_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitEnd_time_event(this);
	}
};




policyParser.End_time_eventContext = End_time_eventContext;

policyParser.prototype.end_time_event = function() {

    var localctx = new End_time_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, policyParser.RULE_end_time_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(policyParser.T__13);
        this.state = 184;
        this.match(policyParser.DATE);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===policyParser.INT) {
            this.state = 185;
            this.end_hour();
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

function Price_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_price_event;
    return this;
}

Price_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Price_eventContext.prototype.constructor = Price_eventContext;


Price_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterPrice_event(this);
	}
};

Price_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitPrice_event(this);
	}
};




policyParser.Price_eventContext = Price_eventContext;

policyParser.prototype.price_event = function() {

    var localctx = new Price_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, policyParser.RULE_price_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(policyParser.T__14);
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

function Transaction_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_transaction_event;
    return this;
}

Transaction_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Transaction_eventContext.prototype.constructor = Transaction_eventContext;

Transaction_eventContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Transaction_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTransaction_event(this);
	}
};

Transaction_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTransaction_event(this);
	}
};




policyParser.Transaction_eventContext = Transaction_eventContext;

policyParser.prototype.transaction_event = function() {

    var localctx = new Transaction_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, policyParser.RULE_transaction_event);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.match(policyParser.T__15);
            this.state = 191;
            this.match(policyParser.INT);
            this.state = 192;
            this.match(policyParser.T__16);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 193;
            this.match(policyParser.T__15);
            this.state = 194;
            this.match(policyParser.INT);
            this.state = 195;
            this.match(policyParser.T__17);
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

function Guaranty_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_guaranty_event;
    return this;
}

Guaranty_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guaranty_eventContext.prototype.constructor = Guaranty_eventContext;

Guaranty_eventContext.prototype.contract_guaranty = function() {
    return this.getTypedRuleContext(Contract_guarantyContext,0);
};

Guaranty_eventContext.prototype.platform_guaranty = function() {
    return this.getTypedRuleContext(Platform_guarantyContext,0);
};

Guaranty_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterGuaranty_event(this);
	}
};

Guaranty_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitGuaranty_event(this);
	}
};




policyParser.Guaranty_eventContext = Guaranty_eventContext;

policyParser.prototype.guaranty_event = function() {

    var localctx = new Guaranty_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, policyParser.RULE_guaranty_event);
    try {
        this.state = 200;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__18:
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.contract_guaranty();
            break;
        case policyParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
            this.platform_guaranty();
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

function Contract_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_contract_guaranty;
    return this;
}

Contract_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_guarantyContext.prototype.constructor = Contract_guarantyContext;

Contract_guarantyContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.INT);
    } else {
        return this.getToken(policyParser.INT, i);
    }
};


Contract_guarantyContext.prototype.time_unit = function() {
    return this.getTypedRuleContext(Time_unitContext,0);
};

Contract_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterContract_guaranty(this);
	}
};

Contract_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitContract_guaranty(this);
	}
};




policyParser.Contract_guarantyContext = Contract_guarantyContext;

policyParser.prototype.contract_guaranty = function() {

    var localctx = new Contract_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, policyParser.RULE_contract_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(policyParser.T__18);
        this.state = 203;
        this.match(policyParser.INT);
        this.state = 204;
        this.match(policyParser.T__19);
        this.state = 205;
        this.match(policyParser.INT);
        this.state = 206;
        this.time_unit();
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

function Platform_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_platform_guaranty;
    return this;
}

Platform_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Platform_guarantyContext.prototype.constructor = Platform_guarantyContext;

Platform_guarantyContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Platform_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterPlatform_guaranty(this);
	}
};

Platform_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitPlatform_guaranty(this);
	}
};




policyParser.Platform_guarantyContext = Platform_guarantyContext;

policyParser.prototype.platform_guaranty = function() {

    var localctx = new Platform_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, policyParser.RULE_platform_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(policyParser.T__20);
        this.state = 209;
        this.match(policyParser.INT);
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

function Signing_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_signing_event;
    return this;
}

Signing_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Signing_eventContext.prototype.constructor = Signing_eventContext;

Signing_eventContext.prototype.LICENSE = function() {
    return this.getToken(policyParser.LICENSE, 0);
};

Signing_eventContext.prototype.license_resource_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(License_resource_idContext);
    } else {
        return this.getTypedRuleContext(License_resource_idContext,i);
    }
};

Signing_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterSigning_event(this);
	}
};

Signing_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSigning_event(this);
	}
};




policyParser.Signing_eventContext = Signing_eventContext;

policyParser.prototype.signing_event = function() {

    var localctx = new Signing_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, policyParser.RULE_signing_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(policyParser.LICENSE);
        this.state = 213; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 212;
            this.license_resource_id();
            this.state = 215; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===policyParser.ID);
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

function Access_count_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_access_count_event;
    return this;
}

Access_count_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_count_eventContext.prototype.constructor = Access_count_eventContext;

Access_count_eventContext.prototype.visit_increment_event = function() {
    return this.getTypedRuleContext(Visit_increment_eventContext,0);
};

Access_count_eventContext.prototype.visit_event = function() {
    return this.getTypedRuleContext(Visit_eventContext,0);
};

Access_count_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAccess_count_event(this);
	}
};

Access_count_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAccess_count_event(this);
	}
};




policyParser.Access_count_eventContext = Access_count_eventContext;

policyParser.prototype.access_count_event = function() {

    var localctx = new Access_count_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, policyParser.RULE_access_count_event);
    try {
        this.state = 219;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__21:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.visit_increment_event();
            break;
        case policyParser.T__22:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.visit_event();
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

function Visit_increment_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_visit_increment_event;
    return this;
}

Visit_increment_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_increment_eventContext.prototype.constructor = Visit_increment_eventContext;

Visit_increment_eventContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Visit_increment_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterVisit_increment_event(this);
	}
};

Visit_increment_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitVisit_increment_event(this);
	}
};




policyParser.Visit_increment_eventContext = Visit_increment_eventContext;

policyParser.prototype.visit_increment_event = function() {

    var localctx = new Visit_increment_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, policyParser.RULE_visit_increment_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(policyParser.T__21);
        this.state = 222;
        this.match(policyParser.INT);
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

function Visit_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_visit_event;
    return this;
}

Visit_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_eventContext.prototype.constructor = Visit_eventContext;

Visit_eventContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Visit_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterVisit_event(this);
	}
};

Visit_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitVisit_event(this);
	}
};




policyParser.Visit_eventContext = Visit_eventContext;

policyParser.prototype.visit_event = function() {

    var localctx = new Visit_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, policyParser.RULE_visit_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(policyParser.T__22);
        this.state = 225;
        this.match(policyParser.INT);
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

function Balance_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_balance_event;
    return this;
}

Balance_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_eventContext.prototype.constructor = Balance_eventContext;

Balance_eventContext.prototype.balance_greater = function() {
    return this.getTypedRuleContext(Balance_greaterContext,0);
};

Balance_eventContext.prototype.balance_smaller = function() {
    return this.getTypedRuleContext(Balance_smallerContext,0);
};

Balance_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterBalance_event(this);
	}
};

Balance_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitBalance_event(this);
	}
};




policyParser.Balance_eventContext = Balance_eventContext;

policyParser.prototype.balance_event = function() {

    var localctx = new Balance_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, policyParser.RULE_balance_event);
    try {
        this.state = 229;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case policyParser.T__23:
            this.enterOuterAlt(localctx, 1);
            this.state = 227;
            this.balance_greater();
            break;
        case policyParser.T__24:
            this.enterOuterAlt(localctx, 2);
            this.state = 228;
            this.balance_smaller();
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

function Balance_greaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_balance_greater;
    return this;
}

Balance_greaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_greaterContext.prototype.constructor = Balance_greaterContext;

Balance_greaterContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Balance_greaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterBalance_greater(this);
	}
};

Balance_greaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitBalance_greater(this);
	}
};




policyParser.Balance_greaterContext = Balance_greaterContext;

policyParser.prototype.balance_greater = function() {

    var localctx = new Balance_greaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, policyParser.RULE_balance_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.match(policyParser.T__23);
        this.state = 232;
        this.match(policyParser.INT);
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

function Balance_smallerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_balance_smaller;
    return this;
}

Balance_smallerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_smallerContext.prototype.constructor = Balance_smallerContext;

Balance_smallerContext.prototype.INT = function() {
    return this.getToken(policyParser.INT, 0);
};

Balance_smallerContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterBalance_smaller(this);
	}
};

Balance_smallerContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitBalance_smaller(this);
	}
};




policyParser.Balance_smallerContext = Balance_smallerContext;

policyParser.prototype.balance_smaller = function() {

    var localctx = new Balance_smallerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, policyParser.RULE_balance_smaller);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(policyParser.T__24);
        this.state = 235;
        this.match(policyParser.INT);
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

function Settlement_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_settlement_event;
    return this;
}

Settlement_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Settlement_eventContext.prototype.constructor = Settlement_eventContext;


Settlement_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterSettlement_event(this);
	}
};

Settlement_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitSettlement_event(this);
	}
};




policyParser.Settlement_eventContext = Settlement_eventContext;

policyParser.prototype.settlement_event = function() {

    var localctx = new Settlement_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, policyParser.RULE_settlement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(policyParser.T__25);
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

function License_resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_license_resource_id;
    return this;
}

License_resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_resource_idContext.prototype.constructor = License_resource_idContext;

License_resource_idContext.prototype.ID = function() {
    return this.getToken(policyParser.ID, 0);
};

License_resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterLicense_resource_id(this);
	}
};

License_resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitLicense_resource_id(this);
	}
};




policyParser.License_resource_idContext = License_resource_idContext;

policyParser.prototype.license_resource_id = function() {

    var localctx = new License_resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, policyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(policyParser.ID);
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

function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUsers(this);
	}
};




policyParser.UsersContext = UsersContext;

policyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, policyParser.RULE_users);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(policyParser.ID);
        this.state = 246;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 242;
                this.match(policyParser.T__5);
                this.state = 243;
                this.match(policyParser.ID); 
            }
            this.state = 248;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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

function User_groupsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_user_groups;
    return this;
}

User_groupsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_groupsContext.prototype.constructor = User_groupsContext;

User_groupsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.ID);
    } else {
        return this.getToken(policyParser.ID, i);
    }
};


User_groupsContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterUser_groups(this);
	}
};

User_groupsContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitUser_groups(this);
	}
};




policyParser.User_groupsContext = User_groupsContext;

policyParser.prototype.user_groups = function() {

    var localctx = new User_groupsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, policyParser.RULE_user_groups);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(policyParser.ID);
        this.state = 254;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 250;
                this.match(policyParser.T__5);
                this.state = 251;
                this.match(policyParser.ID); 
            }
            this.state = 256;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitAnd(this);
	}
};




policyParser.AndContext = AndContext;

policyParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, policyParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(policyParser.T__4);
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

function View_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_view_unit;
    return this;
}

View_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
View_unitContext.prototype.constructor = View_unitContext;


View_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterView_unit(this);
	}
};

View_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitView_unit(this);
	}
};




policyParser.View_unitContext = View_unitContext;

policyParser.prototype.view_unit = function() {

    var localctx = new View_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, policyParser.RULE_view_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        _la = this._input.LA(1);
        if(!(_la===policyParser.T__16 || _la===policyParser.T__26)) {
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

function Time_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_time_unit;
    return this;
}

Time_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_unitContext.prototype.constructor = Time_unitContext;


Time_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterTime_unit(this);
	}
};

Time_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitTime_unit(this);
	}
};




policyParser.Time_unitContext = Time_unitContext;

policyParser.prototype.time_unit = function() {

    var localctx = new Time_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, policyParser.RULE_time_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << policyParser.T__27) | (1 << policyParser.T__28) | (1 << policyParser.T__29))) !== 0))) {
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

function Start_hourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_start_hour;
    return this;
}

Start_hourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Start_hourContext.prototype.constructor = Start_hourContext;

Start_hourContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.INT);
    } else {
        return this.getToken(policyParser.INT, i);
    }
};


Start_hourContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterStart_hour(this);
	}
};

Start_hourContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitStart_hour(this);
	}
};




policyParser.Start_hourContext = Start_hourContext;

policyParser.prototype.start_hour = function() {

    var localctx = new Start_hourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, policyParser.RULE_start_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(policyParser.INT);
        this.state = 264;
        this.match(policyParser.T__3);
        this.state = 265;
        this.match(policyParser.INT);
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

function End_hourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = policyParser.RULE_end_hour;
    return this;
}

End_hourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
End_hourContext.prototype.constructor = End_hourContext;

End_hourContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(policyParser.INT);
    } else {
        return this.getToken(policyParser.INT, i);
    }
};


End_hourContext.prototype.enterRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.enterEnd_hour(this);
	}
};

End_hourContext.prototype.exitRule = function(listener) {
    if(listener instanceof policyListener ) {
        listener.exitEnd_hour(this);
	}
};




policyParser.End_hourContext = End_hourContext;

policyParser.prototype.end_hour = function() {

    var localctx = new End_hourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, policyParser.RULE_end_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(policyParser.INT);
        this.state = 268;
        this.match(policyParser.T__3);
        this.state = 269;
        this.match(policyParser.INT);
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


exports.policyParser = policyParser;
