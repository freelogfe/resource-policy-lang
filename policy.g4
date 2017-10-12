grammar policy;

p : (segment)+ EOF
;
segment : FOR audience_clause+ 'in the following states:' (state_clause)* athorize_token_clause
;
audience_clause
  : audience_individuals_clause ('and' audience_groups_clause)?
  | audience_groups_clause ('and' audience_individuals_clause)?
  ;
athorize_token_clause
: 'I agree to authorize token in' ((',')* ID)*
;
audience_individuals_clause
: users (',' users)*
;
audience_groups_clause
: 'users in' user_groups (',' user_groups)*
;
state_clause
: current_state_clause (target_clause)+
;
current_state_clause
: IN ID ':'
;
target_clause
: PROCEED TO ID 'on' (accepting)* event (and_event)*
;
accepting
: 'accepting'
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
: 'the end of' time_unit
;
specific_date_event
: 'date' DATE
;
relative_date_event
: INT time_unit 'after contract creation'
;
pricing_agreement_event
: 'price priceExpression'
;
transaction_event
: 'transaction of' INT 'to owner'
;
guaranty_event
: contract_guaranty
| platform_guaranty
;
contract_guaranty
: 'contract_guaranty of' INT 'refund after' INT 'day'
;
platform_guaranty
: 'platform_guaranty of' INT
;
signing_event
: LICENSE ((',')*license_resource_id)+
;
access_count_event
: visit_increment_event
| visit_event
;
visit_increment_event
: 'visit_increment of' INT
;
visit_event
: 'visit of' INT
;
balance_event
: balance_greater
| balance_smaller
;
balance_greater
: 'account_balance greater than' INT
;
balance_smaller
: 'account_balance smaller than' INT
;
settlement_event
: 'account_settled'
;

license_resource_id : ID;
account_id: ID;
users : ID (',' ID)*;
user_groups : ID (',' ID)*;
and : 'and';
view_unit : 'in total' | 'per view';
time_unit : 'year' | 'week' | 'day'| 'cycle';
start_hour : INT ':' INT;
end_hour : INT ':' INT;

FOR       : 'For';
USERGROUPS : 'usergroups';
USERS : 'users';
PROCEED : 'proceed';
TO: 'to';
IN : 'in';
ON : 'on';
ACCEPTING : 'accepting';
SELF : 'self' | 'SELF';
LICENSE   : 'license';
PAYING    : 'paying';
PER       : 'per';
VIEW      : 'view';

REQUIRE   : 'require';
NOTHING   : 'nothing';

ID  : ([a-zA-Z]|'_')+;
WS  : [ \t\r\n]+ -> skip;
INT : [0-9]+;
DATE : INT '-' INT '-' INT;
