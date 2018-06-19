grammar eventDefinition;

import expressionDefinition;

event
  : natural_event
  | reserved_event
  | event_placeholder
  ;

natural_event
  : cycle_end_event
  | signing_event
  | transaction_event
  | settlement_event
  ;

reserved_event
  : time_event
  | relative_time_event
  | access_count_event
  ;

event_placeholder : EVENT ;


and_event
  : 'and' event
  ;

cycle_end_event
  : 'end' 'of' TIMEUNIT
  ;

time_event
  : 'at' DATE HOUR
  ;

relative_time_event
  : 'after' INT TIMEUNIT 'of' 'contract' 'creation'
  ;

transaction_event
  : 'receiving' 'transaction' 'of' INT 'to' ID
  ;

signing_event
  : 'accepting' 'license' license_resource_id (','license_resource_id)*
  ;

access_count_event
  : recontract_count_event
  | present_count_event
  | view_count_event
  ;

settlement_event
  : account 'settled'
  ;

recontract_count_event
  : expression 'of' 'recontractions' 'reached'
  ;

present_count_event
  : expression 'of' 'presentations' 'reached'
  ;

view_count_event
  : expression 'of' 'views' 'reached'
  ;
