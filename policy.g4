grammar policy;

p : duration segment +
;
duration
: 'This contract shall commence with effect from' DATE ?HOUR  'and shall continue until' DATE ?HOUR 'unless terminated earlier in accordance with its terms and conditions'
;
segment : FOR audience_clause+ ':' (state_clause)*
;
audience_clause
  : (and)* audience_individuals_clause
  | (and)* audience_groups_clause
  | (and)* audience_selfdefinedaudience_clause
  | (and)* classified_user_clause
  ;
audience_individuals_clause
: USERS users (',' users)*
;
audience_groups_clause
: USERGROUPS user_groups (',' user_groups)*
;
audience_selfdefinedaudience_clause
: SELF
;
classified_user_clause
: classified_user+ 'in' audience_groups_clause
;
classified_user
: 'diamond_users'
| ','
| 'gold_users'
;
state_clause
: current_state_clause (target_clause)+
;
current_state_clause
: IN ID ':'
;
target_clause
: PROCEED TO ID event (and_event)*
;
event
: time_event
| guaranty_event
| signing_event
| access_count_event
| balance_event
;
and_event
: 'and' event
;
time_event
: 'at the end of hour'
| 'at the end of day'
| 'at the end of week'
| 'at the end of month'
| 'at the end of quarter'
| 'at the end of year'
;
guaranty_event
: 'guaranty no less than' INT
| 'guaranty less than' INT
;
signing_event
: 'signing event'
| 'on accepting' LICENSE license_resource_id
;
access_count_event
: 'access count event'
;
balance_event
: 'on balance no less than' INT
| 'on balance less than' INT
;

license_resource_id : ID;
users : ID (',' ID)*;
user_groups : ID (',' ID)*;
and : 'and';

FOR       : 'for';
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
DATE : INT '/' INT '/' INT;
HOUR : INT ':' INT;
