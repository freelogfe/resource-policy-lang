grammar policy;

p : segment +;

segment : audience_clause access_clause;

audience_clause
  : FOR audience_individuals_clause (and audience_groups_clause)*
  | FOR audience_groups_clause (and audience_individuals_clause)*
  | FOR audience_self_clause
  ;
audience_individuals_clause
  : USERS users (',' users)*
  ;
audience_groups_clause
  : USERGROUPS user_groups (',' user_groups)*
  ;
audience_self_clause
  : SELF
  ;
access_clause
  : conditional_access_clause
  | unconditional_access_clause
  ;

conditional_access_clause
  : GRANT ACCESS ON license_clause contract_clause
  ;

unconditional_access_clause
  : REQUIRE NOTHING
  ;

license_clause
  : ACCEPTING license_representation
  ;

license_representation
  : LICENSE license_resource_id
  ;

contract_clause
  : payment_over_time (and payment_over_time)*
  ;

payment_over_time
  : PAYING INT PER INT? time_unit
  ;

time_unit
  : WEEK
  | MONTH
  | DAY
  | VIEW
  ;

license_name  : ID  ;
license_resource_id : ID  ;
users : ID (',' ID)* ;
user_groups : ID (',' ID)* ;
and : 'and';

FOR       : 'for';
USERGROUPS : 'usergroups';
USERS : 'users';
GRANT     : 'grant';
ACCESS    : 'access';
ON        : 'on';
IN          :'in';
SELF : 'self' | 'SELF';
CONTRACT  : 'contract';
LICENSE   : 'license';
ACCEPTING : 'accepting';
PAYING    : 'paying';
PER       : 'per';
VIEW      : 'view';
WEEK      : 'week';
DAY       : 'day';
MONTH     : 'month';

REQUIRE   : 'require';
NOTHING   : 'nothing';

ID  : ([a-zA-Z]|'_')+;
WS  : [ \t\r\n]+ -> skip;
INT : [0-9]+;
