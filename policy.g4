grammar policy;

p : duration_clause (segment settlement_clause)+ EOF
;
duration_clause
: 'This contract shall commence with effect from' DATE (start_hour)?  'and shall continue until' DATE (end_hour)? 'unless terminated earlier in accordance with its terms and conditions'
;
segment : FOR audience_clause+ ':' (state_clause)*
;
settlement_clause
: 'The account settlement shall be performed on every' INT 'day in token state' (ID)+
;
audience_clause
  : audience_individuals_clause ('and' audience_groups_clause)?
  | audience_groups_clause ('and' audience_individuals_clause)?
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
: settlement_time_event
| price_event
| transaction_event
| guaranty_event
| signing_event
| access_count_event
| balance_event
| settlement_event
;
and_event
: 'and' event
;
settlement_time_event
: 'every' INT 'day'
;
price_event
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
: LICENSE (license_resource_id)+
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
time_unit : 'year' | 'month' | 'day';
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
