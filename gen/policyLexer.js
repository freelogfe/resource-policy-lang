// Generated from policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002&\u0252\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003+\u0003,\u0003",
    ",\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u00030\u00031\u0003",
    "1\u00032\u00032\u00033\u00033\u00034\u00034\u00035\u00035\u00036\u0003",
    "6\u00037\u00037\u00038\u00038\u00039\u00039\u0003:\u0003:\u0003;\u0003",
    ";\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003?\u0006?\u0226\n?\r",
    "?\u000e?\u0227\u0003@\u0003@\u0003@\u0003@\u0007@\u022e\n@\f@\u000e",
    "@\u0231\u000b@\u0003A\u0006A\u0234\nA\rA\u000eA\u0235\u0003A\u0003A",
    "\u0003A\u0003A\u0003A\u0006A\u023d\nA\rA\u000eA\u023e\u0003A\u0003A",
    "\u0003A\u0003A\u0003A\u0006A\u0246\nA\rA\u000eA\u0247\u0005A\u024a\n",
    "A\u0003B\u0006B\u024d\nB\rB\u000eB\u024e\u0003B\u0003B\u0002\u0002C",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010",
    "\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u0019",
    "1\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C\u0002E\u0002G\u0002",
    "I\u0002K\u0002M\u0002O\u0002Q\u0002S\u0002U\u0002W\u0002Y\u0002[\u0002",
    "]\u0002_\u0002a\u0002c\u0002e\u0002g\u0002i\u0002k\u0002m\u0002o\u0002",
    "q\u0002s\u0002u\u0002w\u0002y\u0002{\u0002}#\u007f$\u0081%\u0083&\u0003",
    "\u0002!\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002EEee\u0004\u0002",
    "FFff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIii\u0004\u0002JJj",
    "j\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004\u0002NNnn\u0004",
    "\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002RRrr\u0004\u0002",
    "SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVvv\u0004\u0002WWw",
    "w\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004\u0002[[{{\u0004",
    "\u0002\\\\||\u0003\u00022;\u0003\u0002c|\u0003\u0002C\\\u0004\u0002",
    "//aa\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u0244\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003",
    "\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002",
    "\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002",
    "\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002",
    "\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002\u0002",
    "1\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u00025\u0003",
    "\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003\u0002",
    "\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002\u0002",
    "\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002\u0002",
    "\u0002}\u0003\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002",
    "\u0002\u0081\u0003\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002",
    "\u0003\u0085\u0003\u0002\u0002\u0002\u0005\u0087\u0003\u0002\u0002\u0002",
    "\u0007\u0089\u0003\u0002\u0002\u0002\t\u008c\u0003\u0002\u0002\u0002",
    "\u000b\u0097\u0003\u0002\u0002\u0002\r\u009a\u0003\u0002\u0002\u0002",
    "\u000f\u00a1\u0003\u0002\u0002\u0002\u0011\u00a8\u0003\u0002\u0002\u0002",
    "\u0013\u00ad\u0003\u0002\u0002\u0002\u0015\u00c5\u0003\u0002\u0002\u0002",
    "\u0017\u00db\u0003\u0002\u0002\u0002\u0019\u00ea\u0003\u0002\u0002\u0002",
    "\u001b\u00ed\u0003\u0002\u0002\u0002\u001d\u0102\u0003\u0002\u0002\u0002",
    "\u001f\u010f\u0003\u0002\u0002\u0002!\u0113\u0003\u0002\u0002\u0002",
    "#\u0128\u0003\u0002\u0002\u0002%\u013a\u0003\u0002\u0002\u0002\'\u014d",
    "\u0003\u0002\u0002\u0002)\u0156\u0003\u0002\u0002\u0002+\u0173\u0003",
    "\u0002\u0002\u0002-\u0190\u0003\u0002\u0002\u0002/\u01a0\u0003\u0002",
    "\u0002\u00021\u01a5\u0003\u0002\u0002\u00023\u01aa\u0003\u0002\u0002",
    "\u00025\u01b0\u0003\u0002\u0002\u00027\u01b4\u0003\u0002\u0002\u0002",
    "9\u01be\u0003\u0002\u0002\u0002;\u01c3\u0003\u0002\u0002\u0002=\u01ca",
    "\u0003\u0002\u0002\u0002?\u01d7\u0003\u0002\u0002\u0002A\u01e4\u0003",
    "\u0002\u0002\u0002C\u01ea\u0003\u0002\u0002\u0002E\u01ec\u0003\u0002",
    "\u0002\u0002G\u01ee\u0003\u0002\u0002\u0002I\u01f0\u0003\u0002\u0002",
    "\u0002K\u01f2\u0003\u0002\u0002\u0002M\u01f4\u0003\u0002\u0002\u0002",
    "O\u01f6\u0003\u0002\u0002\u0002Q\u01f8\u0003\u0002\u0002\u0002S\u01fa",
    "\u0003\u0002\u0002\u0002U\u01fc\u0003\u0002\u0002\u0002W\u01fe\u0003",
    "\u0002\u0002\u0002Y\u0200\u0003\u0002\u0002\u0002[\u0202\u0003\u0002",
    "\u0002\u0002]\u0204\u0003\u0002\u0002\u0002_\u0206\u0003\u0002\u0002",
    "\u0002a\u0208\u0003\u0002\u0002\u0002c\u020a\u0003\u0002\u0002\u0002",
    "e\u020c\u0003\u0002\u0002\u0002g\u020e\u0003\u0002\u0002\u0002i\u0210",
    "\u0003\u0002\u0002\u0002k\u0212\u0003\u0002\u0002\u0002m\u0214\u0003",
    "\u0002\u0002\u0002o\u0216\u0003\u0002\u0002\u0002q\u0218\u0003\u0002",
    "\u0002\u0002s\u021a\u0003\u0002\u0002\u0002u\u021c\u0003\u0002\u0002",
    "\u0002w\u021e\u0003\u0002\u0002\u0002y\u0220\u0003\u0002\u0002\u0002",
    "{\u0222\u0003\u0002\u0002\u0002}\u0225\u0003\u0002\u0002\u0002\u007f",
    "\u0229\u0003\u0002\u0002\u0002\u0081\u0249\u0003\u0002\u0002\u0002\u0083",
    "\u024c\u0003\u0002\u0002\u0002\u0085\u0086\u0007<\u0002\u0002\u0086",
    "\u0004\u0003\u0002\u0002\u0002\u0087\u0088\u0007.\u0002\u0002\u0088",
    "\u0006\u0003\u0002\u0002\u0002\u0089\u008a\u0007k\u0002\u0002\u008a",
    "\u008b\u0007p\u0002\u0002\u008b\b\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0007r\u0002\u0002\u008d\u008e\u0007t\u0002\u0002\u008e\u008f\u0007",
    "q\u0002\u0002\u008f\u0090\u0007e\u0002\u0002\u0090\u0091\u0007g\u0002",
    "\u0002\u0091\u0092\u0007g\u0002\u0002\u0092\u0093\u0007f\u0002\u0002",
    "\u0093\u0094\u0007\"\u0002\u0002\u0094\u0095\u0007v\u0002\u0002\u0095",
    "\u0096\u0007q\u0002\u0002\u0096\n\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007q\u0002\u0002\u0098\u0099\u0007p\u0002\u0002\u0099\f\u0003\u0002",
    "\u0002\u0002\u009a\u009b\u0007c\u0002\u0002\u009b\u009c\u0007p\u0002",
    "\u0002\u009c\u009d\u0007f\u0002\u0002\u009d\u009e\u0007\"\u0002\u0002",
    "\u009e\u009f\u0007q\u0002\u0002\u009f\u00a0\u0007p\u0002\u0002\u00a0",
    "\u000e\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007g\u0002\u0002\u00a2",
    "\u00a3\u0007p\u0002\u0002\u00a3\u00a4\u0007f\u0002\u0002\u00a4\u00a5",
    "\u0007\"\u0002\u0002\u00a5\u00a6\u0007q\u0002\u0002\u00a6\u00a7\u0007",
    "h\u0002\u0002\u00a7\u0010\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007",
    "f\u0002\u0002\u00a9\u00aa\u0007c\u0002\u0002\u00aa\u00ab\u0007v\u0002",
    "\u0002\u00ab\u00ac\u0007g\u0002\u0002\u00ac\u0012\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0007c\u0002\u0002\u00ae\u00af\u0007h\u0002\u0002",
    "\u00af\u00b0\u0007v\u0002\u0002\u00b0\u00b1\u0007g\u0002\u0002\u00b1",
    "\u00b2\u0007t\u0002\u0002\u00b2\u00b3\u0007\"\u0002\u0002\u00b3\u00b4",
    "\u0007e\u0002\u0002\u00b4\u00b5\u0007q\u0002\u0002\u00b5\u00b6\u0007",
    "p\u0002\u0002\u00b6\u00b7\u0007v\u0002\u0002\u00b7\u00b8\u0007t\u0002",
    "\u0002\u00b8\u00b9\u0007c\u0002\u0002\u00b9\u00ba\u0007e\u0002\u0002",
    "\u00ba\u00bb\u0007v\u0002\u0002\u00bb\u00bc\u0007\"\u0002\u0002\u00bc",
    "\u00bd\u0007e\u0002\u0002\u00bd\u00be\u0007t\u0002\u0002\u00be\u00bf",
    "\u0007g\u0002\u0002\u00bf\u00c0\u0007c\u0002\u0002\u00c0\u00c1\u0007",
    "v\u0002\u0002\u00c1\u00c2\u0007k\u0002\u0002\u00c2\u00c3\u0007q\u0002",
    "\u0002\u00c3\u00c4\u0007p\u0002\u0002\u00c4\u0014\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\u0007r\u0002\u0002\u00c6\u00c7\u0007t\u0002\u0002",
    "\u00c7\u00c8\u0007k\u0002\u0002\u00c8\u00c9\u0007e\u0002\u0002\u00c9",
    "\u00ca\u0007g\u0002\u0002\u00ca\u00cb\u0007\"\u0002\u0002\u00cb\u00cc",
    "\u0007r\u0002\u0002\u00cc\u00cd\u0007t\u0002\u0002\u00cd\u00ce\u0007",
    "k\u0002\u0002\u00ce\u00cf\u0007e\u0002\u0002\u00cf\u00d0\u0007g\u0002",
    "\u0002\u00d0\u00d1\u0007G\u0002\u0002\u00d1\u00d2\u0007z\u0002\u0002",
    "\u00d2\u00d3\u0007r\u0002\u0002\u00d3\u00d4\u0007t\u0002\u0002\u00d4",
    "\u00d5\u0007g\u0002\u0002\u00d5\u00d6\u0007u\u0002\u0002\u00d6\u00d7",
    "\u0007u\u0002\u0002\u00d7\u00d8\u0007k\u0002\u0002\u00d8\u00d9\u0007",
    "q\u0002\u0002\u00d9\u00da\u0007p\u0002\u0002\u00da\u0016\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0007v\u0002\u0002\u00dc\u00dd\u0007t\u0002",
    "\u0002\u00dd\u00de\u0007c\u0002\u0002\u00de\u00df\u0007p\u0002\u0002",
    "\u00df\u00e0\u0007u\u0002\u0002\u00e0\u00e1\u0007c\u0002\u0002\u00e1",
    "\u00e2\u0007e\u0002\u0002\u00e2\u00e3\u0007v\u0002\u0002\u00e3\u00e4",
    "\u0007k\u0002\u0002\u00e4\u00e5\u0007q\u0002\u0002\u00e5\u00e6\u0007",
    "p\u0002\u0002\u00e6\u00e7\u0007\"\u0002\u0002\u00e7\u00e8\u0007q\u0002",
    "\u0002\u00e8\u00e9\u0007h\u0002\u0002\u00e9\u0018\u0003\u0002\u0002",
    "\u0002\u00ea\u00eb\u0007v\u0002\u0002\u00eb\u00ec\u0007q\u0002\u0002",
    "\u00ec\u001a\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007e\u0002\u0002",
    "\u00ee\u00ef\u0007q\u0002\u0002\u00ef\u00f0\u0007p\u0002\u0002\u00f0",
    "\u00f1\u0007v\u0002\u0002\u00f1\u00f2\u0007t\u0002\u0002\u00f2\u00f3",
    "\u0007c\u0002\u0002\u00f3\u00f4\u0007e\u0002\u0002\u00f4\u00f5\u0007",
    "v\u0002\u0002\u00f5\u00f6\u0007a\u0002\u0002\u00f6\u00f7\u0007i\u0002",
    "\u0002\u00f7\u00f8\u0007w\u0002\u0002\u00f8\u00f9\u0007c\u0002\u0002",
    "\u00f9\u00fa\u0007t\u0002\u0002\u00fa\u00fb\u0007c\u0002\u0002\u00fb",
    "\u00fc\u0007p\u0002\u0002\u00fc\u00fd\u0007v\u0002\u0002\u00fd\u00fe",
    "\u0007{\u0002\u0002\u00fe\u00ff\u0007\"\u0002\u0002\u00ff\u0100\u0007",
    "q\u0002\u0002\u0100\u0101\u0007h\u0002\u0002\u0101\u001c\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0007t\u0002\u0002\u0103\u0104\u0007g\u0002",
    "\u0002\u0104\u0105\u0007h\u0002\u0002\u0105\u0106\u0007w\u0002\u0002",
    "\u0106\u0107\u0007p\u0002\u0002\u0107\u0108\u0007f\u0002\u0002\u0108",
    "\u0109\u0007\"\u0002\u0002\u0109\u010a\u0007c\u0002\u0002\u010a\u010b",
    "\u0007h\u0002\u0002\u010b\u010c\u0007v\u0002\u0002\u010c\u010d\u0007",
    "g\u0002\u0002\u010d\u010e\u0007t\u0002\u0002\u010e\u001e\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0007f\u0002\u0002\u0110\u0111\u0007c\u0002",
    "\u0002\u0111\u0112\u0007{\u0002\u0002\u0112 \u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0007r\u0002\u0002\u0114\u0115\u0007n\u0002\u0002\u0115",
    "\u0116\u0007c\u0002\u0002\u0116\u0117\u0007v\u0002\u0002\u0117\u0118",
    "\u0007h\u0002\u0002\u0118\u0119\u0007q\u0002\u0002\u0119\u011a\u0007",
    "t\u0002\u0002\u011a\u011b\u0007o\u0002\u0002\u011b\u011c\u0007a\u0002",
    "\u0002\u011c\u011d\u0007i\u0002\u0002\u011d\u011e\u0007w\u0002\u0002",
    "\u011e\u011f\u0007c\u0002\u0002\u011f\u0120\u0007t\u0002\u0002\u0120",
    "\u0121\u0007c\u0002\u0002\u0121\u0122\u0007p\u0002\u0002\u0122\u0123",
    "\u0007v\u0002\u0002\u0123\u0124\u0007{\u0002\u0002\u0124\u0125\u0007",
    "\"\u0002\u0002\u0125\u0126\u0007q\u0002\u0002\u0126\u0127\u0007h\u0002",
    "\u0002\u0127\"\u0003\u0002\u0002\u0002\u0128\u0129\u0007c\u0002\u0002",
    "\u0129\u012a\u0007e\u0002\u0002\u012a\u012b\u0007e\u0002\u0002\u012b",
    "\u012c\u0007g\u0002\u0002\u012c\u012d\u0007r\u0002\u0002\u012d\u012e",
    "\u0007v\u0002\u0002\u012e\u012f\u0007k\u0002\u0002\u012f\u0130\u0007",
    "p\u0002\u0002\u0130\u0131\u0007i\u0002\u0002\u0131\u0132\u0007\"\u0002",
    "\u0002\u0132\u0133\u0007n\u0002\u0002\u0133\u0134\u0007k\u0002\u0002",
    "\u0134\u0135\u0007e\u0002\u0002\u0135\u0136\u0007g\u0002\u0002\u0136",
    "\u0137\u0007p\u0002\u0002\u0137\u0138\u0007u\u0002\u0002\u0138\u0139",
    "\u0007g\u0002\u0002\u0139$\u0003\u0002\u0002\u0002\u013a\u013b\u0007",
    "x\u0002\u0002\u013b\u013c\u0007k\u0002\u0002\u013c\u013d\u0007u\u0002",
    "\u0002\u013d\u013e\u0007k\u0002\u0002\u013e\u013f\u0007v\u0002\u0002",
    "\u013f\u0140\u0007a\u0002\u0002\u0140\u0141\u0007k\u0002\u0002\u0141",
    "\u0142\u0007p\u0002\u0002\u0142\u0143\u0007e\u0002\u0002\u0143\u0144",
    "\u0007t\u0002\u0002\u0144\u0145\u0007g\u0002\u0002\u0145\u0146\u0007",
    "o\u0002\u0002\u0146\u0147\u0007g\u0002\u0002\u0147\u0148\u0007p\u0002",
    "\u0002\u0148\u0149\u0007v\u0002\u0002\u0149\u014a\u0007\"\u0002\u0002",
    "\u014a\u014b\u0007q\u0002\u0002\u014b\u014c\u0007h\u0002\u0002\u014c",
    "&\u0003\u0002\u0002\u0002\u014d\u014e\u0007x\u0002\u0002\u014e\u014f",
    "\u0007k\u0002\u0002\u014f\u0150\u0007u\u0002\u0002\u0150\u0151\u0007",
    "k\u0002\u0002\u0151\u0152\u0007v\u0002\u0002\u0152\u0153\u0007\"\u0002",
    "\u0002\u0153\u0154\u0007q\u0002\u0002\u0154\u0155\u0007h\u0002\u0002",
    "\u0155(\u0003\u0002\u0002\u0002\u0156\u0157\u0007c\u0002\u0002\u0157",
    "\u0158\u0007e\u0002\u0002\u0158\u0159\u0007e\u0002\u0002\u0159\u015a",
    "\u0007q\u0002\u0002\u015a\u015b\u0007w\u0002\u0002\u015b\u015c\u0007",
    "p\u0002\u0002\u015c\u015d\u0007v\u0002\u0002\u015d\u015e\u0007a\u0002",
    "\u0002\u015e\u015f\u0007d\u0002\u0002\u015f\u0160\u0007c\u0002\u0002",
    "\u0160\u0161\u0007n\u0002\u0002\u0161\u0162\u0007c\u0002\u0002\u0162",
    "\u0163\u0007p\u0002\u0002\u0163\u0164\u0007e\u0002\u0002\u0164\u0165",
    "\u0007g\u0002\u0002\u0165\u0166\u0007\"\u0002\u0002\u0166\u0167\u0007",
    "i\u0002\u0002\u0167\u0168\u0007t\u0002\u0002\u0168\u0169\u0007g\u0002",
    "\u0002\u0169\u016a\u0007c\u0002\u0002\u016a\u016b\u0007v\u0002\u0002",
    "\u016b\u016c\u0007g\u0002\u0002\u016c\u016d\u0007t\u0002\u0002\u016d",
    "\u016e\u0007\"\u0002\u0002\u016e\u016f\u0007v\u0002\u0002\u016f\u0170",
    "\u0007j\u0002\u0002\u0170\u0171\u0007c\u0002\u0002\u0171\u0172\u0007",
    "p\u0002\u0002\u0172*\u0003\u0002\u0002\u0002\u0173\u0174\u0007c\u0002",
    "\u0002\u0174\u0175\u0007e\u0002\u0002\u0175\u0176\u0007e\u0002\u0002",
    "\u0176\u0177\u0007q\u0002\u0002\u0177\u0178\u0007w\u0002\u0002\u0178",
    "\u0179\u0007p\u0002\u0002\u0179\u017a\u0007v\u0002\u0002\u017a\u017b",
    "\u0007a\u0002\u0002\u017b\u017c\u0007d\u0002\u0002\u017c\u017d\u0007",
    "c\u0002\u0002\u017d\u017e\u0007n\u0002\u0002\u017e\u017f\u0007c\u0002",
    "\u0002\u017f\u0180\u0007p\u0002\u0002\u0180\u0181\u0007e\u0002\u0002",
    "\u0181\u0182\u0007g\u0002\u0002\u0182\u0183\u0007\"\u0002\u0002\u0183",
    "\u0184\u0007u\u0002\u0002\u0184\u0185\u0007o\u0002\u0002\u0185\u0186",
    "\u0007c\u0002\u0002\u0186\u0187\u0007n\u0002\u0002\u0187\u0188\u0007",
    "n\u0002\u0002\u0188\u0189\u0007g\u0002\u0002\u0189\u018a\u0007t\u0002",
    "\u0002\u018a\u018b\u0007\"\u0002\u0002\u018b\u018c\u0007v\u0002\u0002",
    "\u018c\u018d\u0007j\u0002\u0002\u018d\u018e\u0007c\u0002\u0002\u018e",
    "\u018f\u0007p\u0002\u0002\u018f,\u0003\u0002\u0002\u0002\u0190\u0191",
    "\u0007c\u0002\u0002\u0191\u0192\u0007e\u0002\u0002\u0192\u0193\u0007",
    "e\u0002\u0002\u0193\u0194\u0007q\u0002\u0002\u0194\u0195\u0007w\u0002",
    "\u0002\u0195\u0196\u0007p\u0002\u0002\u0196\u0197\u0007v\u0002\u0002",
    "\u0197\u0198\u0007a\u0002\u0002\u0198\u0199\u0007u\u0002\u0002\u0199",
    "\u019a\u0007g\u0002\u0002\u019a\u019b\u0007v\u0002\u0002\u019b\u019c",
    "\u0007v\u0002\u0002\u019c\u019d\u0007n\u0002\u0002\u019d\u019e\u0007",
    "g\u0002\u0002\u019e\u019f\u0007f\u0002\u0002\u019f.\u0003\u0002\u0002",
    "\u0002\u01a0\u01a1\u0007{\u0002\u0002\u01a1\u01a2\u0007g\u0002\u0002",
    "\u01a2\u01a3\u0007c\u0002\u0002\u01a3\u01a4\u0007t\u0002\u0002\u01a4",
    "0\u0003\u0002\u0002\u0002\u01a5\u01a6\u0007y\u0002\u0002\u01a6\u01a7",
    "\u0007g\u0002\u0002\u01a7\u01a8\u0007g\u0002\u0002\u01a8\u01a9\u0007",
    "m\u0002\u0002\u01a92\u0003\u0002\u0002\u0002\u01aa\u01ab\u0007e\u0002",
    "\u0002\u01ab\u01ac\u0007{\u0002\u0002\u01ac\u01ad\u0007e\u0002\u0002",
    "\u01ad\u01ae\u0007n\u0002\u0002\u01ae\u01af\u0007g\u0002\u0002\u01af",
    "4\u0003\u0002\u0002\u0002\u01b0\u01b1\u0005M\'\u0002\u01b1\u01b2\u0005",
    "_0\u0002\u01b2\u01b3\u0005e3\u0002\u01b36\u0003\u0002\u0002\u0002\u01b4",
    "\u01b5\u0005i5\u0002\u01b5\u01b6\u0005K&\u0002\u01b6\u01b7\u0005e3\u0002",
    "\u01b7\u01b8\u0005[.\u0002\u01b8\u01b9\u0005S*\u0002\u01b9\u01ba\u0005",
    "]/\u0002\u01ba\u01bb\u0005C\"\u0002\u01bb\u01bc\u0005i5\u0002\u01bc",
    "\u01bd\u0005K&\u0002\u01bd8\u0003\u0002\u0002\u0002\u01be\u01bf\u0005",
    "g4\u0002\u01bf\u01c0\u0005K&\u0002\u01c0\u01c1\u0005Y-\u0002\u01c1\u01c2",
    "\u0005M\'\u0002\u01c2:\u0003\u0002\u0002\u0002\u01c3\u01c4\u0005a1\u0002",
    "\u01c4\u01c5\u0005k6\u0002\u01c5\u01c6\u0005E#\u0002\u01c6\u01c7\u0005",
    "Y-\u0002\u01c7\u01c8\u0005S*\u0002\u01c8\u01c9\u0005G$\u0002\u01c9<",
    "\u0003\u0002\u0002\u0002\u01ca\u01cb\u0005O(\u0002\u01cb\u01cc\u0005",
    "e3\u0002\u01cc\u01cd\u0005_0\u0002\u01cd\u01ce\u0005k6\u0002\u01ce\u01cf",
    "\u0005a1\u0002\u01cf\u01d0\u0007a\u0002\u0002\u01d0\u01d1\u0005k6\u0002",
    "\u01d1\u01d2\u0005g4\u0002\u01d2\u01d3\u0005K&\u0002\u01d3\u01d4\u0005",
    "e3\u0002\u01d4\u01d5\u0007a\u0002\u0002\u01d5\u01d6\u0005\u0081A\u0002",
    "\u01d6>\u0003\u0002\u0002\u0002\u01d7\u01d8\u0005O(\u0002\u01d8\u01d9",
    "\u0005e3\u0002\u01d9\u01da\u0005_0\u0002\u01da\u01db\u0005k6\u0002\u01db",
    "\u01dc\u0005a1\u0002\u01dc\u01dd\u0007a\u0002\u0002\u01dd\u01de\u0005",
    "]/\u0002\u01de\u01df\u0005_0\u0002\u01df\u01e0\u0005I%\u0002\u01e0\u01e1",
    "\u0005K&\u0002\u01e1\u01e2\u0007a\u0002\u0002\u01e2\u01e3\u0005\u0081",
    "A\u0002\u01e3@\u0003\u0002\u0002\u0002\u01e4\u01e5\u0005]/\u0002\u01e5",
    "\u01e6\u0005_0\u0002\u01e6\u01e7\u0005I%\u0002\u01e7\u01e8\u0005K&\u0002",
    "\u01e8\u01e9\u0005g4\u0002\u01e9B\u0003\u0002\u0002\u0002\u01ea\u01eb",
    "\t\u0002\u0002\u0002\u01ebD\u0003\u0002\u0002\u0002\u01ec\u01ed\t\u0003",
    "\u0002\u0002\u01edF\u0003\u0002\u0002\u0002\u01ee\u01ef\t\u0004\u0002",
    "\u0002\u01efH\u0003\u0002\u0002\u0002\u01f0\u01f1\t\u0005\u0002\u0002",
    "\u01f1J\u0003\u0002\u0002\u0002\u01f2\u01f3\t\u0006\u0002\u0002\u01f3",
    "L\u0003\u0002\u0002\u0002\u01f4\u01f5\t\u0007\u0002\u0002\u01f5N\u0003",
    "\u0002\u0002\u0002\u01f6\u01f7\t\b\u0002\u0002\u01f7P\u0003\u0002\u0002",
    "\u0002\u01f8\u01f9\t\t\u0002\u0002\u01f9R\u0003\u0002\u0002\u0002\u01fa",
    "\u01fb\t\n\u0002\u0002\u01fbT\u0003\u0002\u0002\u0002\u01fc\u01fd\t",
    "\u000b\u0002\u0002\u01fdV\u0003\u0002\u0002\u0002\u01fe\u01ff\t\f\u0002",
    "\u0002\u01ffX\u0003\u0002\u0002\u0002\u0200\u0201\t\r\u0002\u0002\u0201",
    "Z\u0003\u0002\u0002\u0002\u0202\u0203\t\u000e\u0002\u0002\u0203\\\u0003",
    "\u0002\u0002\u0002\u0204\u0205\t\u000f\u0002\u0002\u0205^\u0003\u0002",
    "\u0002\u0002\u0206\u0207\t\u0010\u0002\u0002\u0207`\u0003\u0002\u0002",
    "\u0002\u0208\u0209\t\u0011\u0002\u0002\u0209b\u0003\u0002\u0002\u0002",
    "\u020a\u020b\t\u0012\u0002\u0002\u020bd\u0003\u0002\u0002\u0002\u020c",
    "\u020d\t\u0013\u0002\u0002\u020df\u0003\u0002\u0002\u0002\u020e\u020f",
    "\t\u0014\u0002\u0002\u020fh\u0003\u0002\u0002\u0002\u0210\u0211\t\u0015",
    "\u0002\u0002\u0211j\u0003\u0002\u0002\u0002\u0212\u0213\t\u0016\u0002",
    "\u0002\u0213l\u0003\u0002\u0002\u0002\u0214\u0215\t\u0017\u0002\u0002",
    "\u0215n\u0003\u0002\u0002\u0002\u0216\u0217\t\u0018\u0002\u0002\u0217",
    "p\u0003\u0002\u0002\u0002\u0218\u0219\t\u0019\u0002\u0002\u0219r\u0003",
    "\u0002\u0002\u0002\u021a\u021b\t\u001a\u0002\u0002\u021bt\u0003\u0002",
    "\u0002\u0002\u021c\u021d\t\u001b\u0002\u0002\u021dv\u0003\u0002\u0002",
    "\u0002\u021e\u021f\t\u001c\u0002\u0002\u021fx\u0003\u0002\u0002\u0002",
    "\u0220\u0221\t\u001d\u0002\u0002\u0221z\u0003\u0002\u0002\u0002\u0222",
    "\u0223\t\u001e\u0002\u0002\u0223|\u0003\u0002\u0002\u0002\u0224\u0226",
    "\u0005w<\u0002\u0225\u0224\u0003\u0002\u0002\u0002\u0226\u0227\u0003",
    "\u0002\u0002\u0002\u0227\u0225\u0003\u0002\u0002\u0002\u0227\u0228\u0003",
    "\u0002\u0002\u0002\u0228~\u0003\u0002\u0002\u0002\u0229\u022f\u0007",
    "h\u0002\u0002\u022a\u022e\u0005{>\u0002\u022b\u022e\u0005y=\u0002\u022c",
    "\u022e\u0005w<\u0002\u022d\u022a\u0003\u0002\u0002\u0002\u022d\u022b",
    "\u0003\u0002\u0002\u0002\u022d\u022c\u0003\u0002\u0002\u0002\u022e\u0231",
    "\u0003\u0002\u0002\u0002\u022f\u022d\u0003\u0002\u0002\u0002\u022f\u0230",
    "\u0003\u0002\u0002\u0002\u0230\u0080\u0003\u0002\u0002\u0002\u0231\u022f",
    "\u0003\u0002\u0002\u0002\u0232\u0234\u0005w<\u0002\u0233\u0232\u0003",
    "\u0002\u0002\u0002\u0234\u0235\u0003\u0002\u0002\u0002\u0235\u0233\u0003",
    "\u0002\u0002\u0002\u0235\u0236\u0003\u0002\u0002\u0002\u0236\u024a\u0003",
    "\u0002\u0002\u0002\u0237\u023c\u0007>\u0002\u0002\u0238\u023d\u0005",
    "{>\u0002\u0239\u023d\u0005y=\u0002\u023a\u023d\u0007a\u0002\u0002\u023b",
    "\u023d\u0005w<\u0002\u023c\u0238\u0003\u0002\u0002\u0002\u023c\u0239",
    "\u0003\u0002\u0002\u0002\u023c\u023a\u0003\u0002\u0002\u0002\u023c\u023b",
    "\u0003\u0002\u0002\u0002\u023d\u023e\u0003\u0002\u0002\u0002\u023e\u023c",
    "\u0003\u0002\u0002\u0002\u023e\u023f\u0003\u0002\u0002\u0002\u023f\u0240",
    "\u0003\u0002\u0002\u0002\u0240\u024a\u0007@\u0002\u0002\u0241\u0246",
    "\u0005{>\u0002\u0242\u0246\u0005y=\u0002\u0243\u0246\t\u001f\u0002\u0002",
    "\u0244\u0246\u0005w<\u0002\u0245\u0241\u0003\u0002\u0002\u0002\u0245",
    "\u0242\u0003\u0002\u0002\u0002\u0245\u0243\u0003\u0002\u0002\u0002\u0245",
    "\u0244\u0003\u0002\u0002\u0002\u0246\u0247\u0003\u0002\u0002\u0002\u0247",
    "\u0245\u0003\u0002\u0002\u0002\u0247\u0248\u0003\u0002\u0002\u0002\u0248",
    "\u024a\u0003\u0002\u0002\u0002\u0249\u0233\u0003\u0002\u0002\u0002\u0249",
    "\u0237\u0003\u0002\u0002\u0002\u0249\u0245\u0003\u0002\u0002\u0002\u024a",
    "\u0082\u0003\u0002\u0002\u0002\u024b\u024d\t \u0002\u0002\u024c\u024b",
    "\u0003\u0002\u0002\u0002\u024d\u024e\u0003\u0002\u0002\u0002\u024e\u024c",
    "\u0003\u0002\u0002\u0002\u024e\u024f\u0003\u0002\u0002\u0002\u024f\u0250",
    "\u0003\u0002\u0002\u0002\u0250\u0251\bB\u0002\u0002\u0251\u0084\u0003",
    "\u0002\u0002\u0002\r\u0002\u0227\u022d\u022f\u0235\u023c\u023e\u0245",
    "\u0247\u0249\u024e\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function policyLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

policyLexer.prototype = Object.create(antlr4.Lexer.prototype);
policyLexer.prototype.constructor = policyLexer;

policyLexer.EOF = antlr4.Token.EOF;
policyLexer.T__0 = 1;
policyLexer.T__1 = 2;
policyLexer.T__2 = 3;
policyLexer.T__3 = 4;
policyLexer.T__4 = 5;
policyLexer.T__5 = 6;
policyLexer.T__6 = 7;
policyLexer.T__7 = 8;
policyLexer.T__8 = 9;
policyLexer.T__9 = 10;
policyLexer.T__10 = 11;
policyLexer.T__11 = 12;
policyLexer.T__12 = 13;
policyLexer.T__13 = 14;
policyLexer.T__14 = 15;
policyLexer.T__15 = 16;
policyLexer.T__16 = 17;
policyLexer.T__17 = 18;
policyLexer.T__18 = 19;
policyLexer.T__19 = 20;
policyLexer.T__20 = 21;
policyLexer.T__21 = 22;
policyLexer.T__22 = 23;
policyLexer.T__23 = 24;
policyLexer.T__24 = 25;
policyLexer.FOR = 26;
policyLexer.TERMINATE = 27;
policyLexer.SELF = 28;
policyLexer.PUBLIC = 29;
policyLexer.GROUPUSER = 30;
policyLexer.GROUPNODE = 31;
policyLexer.NODES = 32;
policyLexer.INTEGER_NUMBER = 33;
policyLexer.FEATHERACCOUNT = 34;
policyLexer.ID = 35;
policyLexer.WS = 36;

policyLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

policyLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

policyLexer.prototype.literalNames = [ null, "':'", "','", "'in'", "'proceed to'", 
                                       "'on'", "'and on'", "'end of'", "'date'", 
                                       "'after contract creation'", "'price priceExpression'", 
                                       "'transaction of'", "'to'", "'contract_guaranty of'", 
                                       "'refund after'", "'day'", "'platform_guaranty of'", 
                                       "'accepting license'", "'visit_increment of'", 
                                       "'visit of'", "'account_balance greater than'", 
                                       "'account_balance smaller than'", 
                                       "'account_settled'", "'year'", "'week'", 
                                       "'cycle'" ];

policyLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, null, null, null, null, 
                                        null, null, "FOR", "TERMINATE", 
                                        "SELF", "PUBLIC", "GROUPUSER", "GROUPNODE", 
                                        "NODES", "INTEGER_NUMBER", "FEATHERACCOUNT", 
                                        "ID", "WS" ];

policyLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                    "T__5", "T__6", "T__7", "T__8", "T__9", 
                                    "T__10", "T__11", "T__12", "T__13", 
                                    "T__14", "T__15", "T__16", "T__17", 
                                    "T__18", "T__19", "T__20", "T__21", 
                                    "T__22", "T__23", "T__24", "FOR", "TERMINATE", 
                                    "SELF", "PUBLIC", "GROUPUSER", "GROUPNODE", 
                                    "NODES", "A", "B", "C", "D", "E", "F", 
                                    "G", "H", "I", "J", "K", "L", "M", "N", 
                                    "O", "P", "Q", "R", "S", "T", "U", "V", 
                                    "W", "X", "Y", "Z", "DIGIT", "LOWERCASE", 
                                    "UPPERCASE", "INTEGER_NUMBER", "FEATHERACCOUNT", 
                                    "ID", "WS" ];

policyLexer.prototype.grammarFileName = "policy.g4";



exports.policyLexer = policyLexer;

