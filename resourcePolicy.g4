grammar resourcePolicy;

policy : (segment)* EOF
  ;
segment : FOR audience_clause+ ':' (state_clause)*
  ;
audience_clause
  :  users
  | audience_clause ','  audience_clause
  ;

state_clause
  : current_state_clause (target_clause)+
  ;

current_state_clause
  : 'in' ID ':'
  ;

target_clause
  : 'proceed to' ID 'on' event (and_event)*
  | TERMINATE
  ;

event
  : period_event
  | specific_date_event
  | relative_date_event
  | pricing_agreement_event
  | transaction_event
  | guaranty_event
  | signing_event
  | access_count_event
  | balance_event
  | settlement_event
  ;

and_event
: 'and on' event
;
period_event
: 'end of' time_unit //TODO 多少个时间单位？INTEGER_NUMBER？复数情况？
;
specific_date_event
: 'arriving date' ID  //todo ID改成date类型？
;
relative_date_event
: INTEGER_NUMBER time_unit 'after contract creation'
;
pricing_agreement_event
: 'price priceExpression' //这个事件是？
;
transaction_event
: 'transaction of' INTEGER_NUMBER 'to' FEATHERACCOUNT  //转账金额单位？不同币种？
;
guaranty_event
: contract_guaranty
| platform_guaranty
;

//待注释说明？
contract_guaranty
: 'contract_guaranty of' INTEGER_NUMBER 'refund after' INTEGER_NUMBER 'day'
;
platform_guaranty
: 'platform_guaranty of' INTEGER_NUMBER
;

//签约事件
signing_event
: 'accepting license' license_resource_id (',' license_resource_id)*
;

access_count_event
: visit_increment_event
| visit_event
;

visit_increment_event
: 'visit_increment of' INTEGER_NUMBER
;
visit_event
: 'visit of' INTEGER_NUMBER
;

balance_event
: balance_greater
| balance_smaller
;

balance_greater
: 'account_balance greater than' INTEGER_NUMBER
;

balance_smaller
: 'account_balance smaller than' INTEGER_NUMBER
;

settlement_event
: 'account_settled'
;

license_resource_id : ID;
users : SELF | NODES | PUBLIC | GROUPUSER | GROUPNODE | ID; //禁止ID系统关键词重复

time_unit : 'year' | 'week' | 'day'| 'cycle';

FOR: F O R;
TERMINATE : T E R M I N A T E;
SELF : S E L F;
PUBLIC : P U B L I C;
GROUPUSER : G R O U P '_' U S E R '_' ID;
GROUPNODE : G R O U P '_' N O D E '_' ID;
NODES : N O D E S;

fragment A : ('A'|'a');
fragment B : ('B'|'b');
fragment C : ('C'|'c');
fragment D : ('D'|'d');
fragment E : ('E'|'e');
fragment F : ('F'|'f');
fragment G : ('G'|'g');
fragment H : ('H'|'h');
fragment I  :  ('I'|'i');
fragment J : ('J'|'j');
fragment K : ('K'|'k');
fragment L : ('L'|'l');
fragment M : ('M'|'m');
fragment N : ('N'|'n');
fragment O : ('O'|'o');
fragment P : ('P'|'p');
fragment Q : ('Q'|'q');
fragment R : ('R'|'r');
fragment S : ('S'|'s');
fragment T : ('T'|'t');
fragment U : ('U'|'u');
fragment V : ('V'|'v');
fragment W : ('W'|'w');
fragment X : ('X'|'x');
fragment Y : ('Y'|'y');
fragment Z : ('Z'|'z');

fragment DIGIT : [0-9] ;
fragment LOWERCASE : [a-z];
fragment UPPERCASE : [A-Z];

INTEGER_NUMBER:  DIGIT+;

FEATHERACCOUNT : 'f' (UPPERCASE | LOWERCASE | DIGIT)+;

ID : DIGIT+
    | '<' (UPPERCASE | LOWERCASE | '_'| DIGIT)+ '>'
    | (UPPERCASE | LOWERCASE | '_' | '-' | DIGIT)+
  ;
WS  : [ \t\r\n]+ -> skip;
