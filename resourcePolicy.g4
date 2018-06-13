grammar resourcePolicy;

policy : (segment)* EOF
  ;
segment : FOR audience_clause ':' declaration_section? state_definition_section
  ;

declaration_section: declaration_statements+
  ;

declaration_statements
  : custom_event_declaration
  | expression_declaration
  | contract_account_declaration
  ;

custom_event_declaration
  : 'custom' 'event' one_or_more_event_decl
  ;

one_or_more_event_decl
  : custom_event_owner '.' custom_event_name (',' custom_event_owner '.' custom_event_name)*
  ;

custom_event_name: ID ;

custom_event_owner : proposer | acceptor
  ;

expression_declaration : 'place holder' ;

contract_account_declaration
  : contract_account_types contract_account_name
  ;

contract_account_types
  : 'escrow' 'account'
  ;

contract_account_name : ID ;

audience_clause
  : users
  | audience_clause ','  audience_clause
  ;

state_definition_section
  :  state_definition+
  ;

state_definition
  : state_id ':' state_description* state_transition
  ;

state_description
  : 'presentable'
  | 'recontractable'
  | 'active'
  ;

state_transition
  : 'proceed' 'to' state_id 'on' event
  | TERMINATE
  ;

state_id : ID ;

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
  | event_placeholder
  ;

event_placeholder : EVENT ;


and_event
  : 'and' event
  ;

period_event
  : 'end' 'of' TIMEUNIT
  ;

specific_date_event
  : 'at' DATE HOUR
  ;

relative_date_event
  : 'after' INTEGER_NUMBER TIMEUNIT 'of' 'contract' 'creation'
  ;

pricing_agreement_event
  : 'price priceExpression'
  ;

transaction_event
  : 'receiving' 'transaction' 'of' INTEGER_NUMBER 'to' ID//默认是每种币的最小单位
  ;

guaranty_event
  : contract_guaranty
  | platform_guaranty
  ;

contract_guaranty
  : 'contract_guaranty' 'of' INTEGER_NUMBER 'refund after' INTEGER_NUMBER TIMEUNIT
  ;

platform_guaranty
  : 'platform_guaranty' 'of' INTEGER_NUMBER
  ;

signing_event
  : 'accepting' 'license' license_resource_id (','license_resource_id)*
  ;

access_count_event
  : visit_increment_event
  | visit_event
  ;

visit_increment_event
  : 'visit_increment' 'of' INTEGER_NUMBER
  ;

visit_event
  : 'visit' 'of' INTEGER_NUMBER
  ;

balance_event
  : balance_greater
  | balance_smaller
  ;

balance_greater
  : 'account_balance' 'greater' 'than' INTEGER_NUMBER
  ;

balance_smaller
  : 'account_balance' 'smaller' 'than' INTEGER_NUMBER
  ;

settlement_event
  : 'account_settled'
  ;

proposer: 'proposer';
acceptor: 'acceptor';

license_resource_id : ID;
users : SELF | NODES | PUBLIC | GROUPUSER | GROUPNODE | INTEGER_NUMBER | ID;

TIMEUNIT : C Y C L E S? | Y E A R S? | W E E K S? | D A Y S? | M O N T H S? ;

FOR: F O R;
SELF : S E L F;
GROUPUSER : G R O U P '_' U S E R '_' ID;
GROUPNODE : G R O U P '_' N O D E '_' ID;
NODES : N O D E S;
PUBLIC : P U B L I C;
TERMINATE : T E R M I N A T E;

fragment A : ('A'|'a');
fragment B : ('B'|'b');
fragment C : ('C'|'c');
fragment D : ('D'|'d');
fragment E : ('E'|'e');
fragment F : ('F'|'f');
fragment G : ('G'|'g');
fragment H : ('H'|'h');
fragment I : ('I'|'i');
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
fragment ALPHABET : [a-zA-Z];

EVENT : 'event_' (DIGIT|ALPHABET)+;


INTEGER_NUMBER:  DIGIT+;

HOUR : TWO_DIGITS ':' TWO_DIGITS (':' TWO_DIGITS)?;
DATE : FOUR_DIGITS '-' TWO_DIGITS '-' TWO_DIGITS;

TWO_DIGITS : DIGIT DIGIT ;
FOUR_DIGITS : DIGIT DIGIT DIGIT DIGIT;
NIGHT_DIGITS : DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT;

ID
  : (ALPHABET | INTEGER_NUMBER | '_' | '-')+
  | FEATHERACCOUNT;

FEATHERACCOUNT : 'f' (DIGIT | ALPHABET)+ ;

WS  : [ \t\r\n]+ -> skip;
