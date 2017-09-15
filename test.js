var GEN = require('./index.js');
var string1=
'This contract shall commence with effect from 12/12/2012 03:30 and shall continue until 12/12/2012 03:30 unless terminated earlier in accordance with its terms and conditions'+
'For userA, userB: in begining:proceed to s on accepting license license_A license_B and contract_guaranty of 5000 refund after 1 year '+
   'in s: proceed to activate on accepting price priceExpression '+
   'in activate: proceed to settlement on the end of year '+
   'in settlement: proceed to activate on account_settled';

var string2 =
'This contract shall commence with effect from 12/12/2012 03:30 and shall continue until 12/12/2012 03:30 unless terminated earlier in accordance with its terms and conditions'+
'For users in groupA, groupB:'+
     'in begining:proceed to activated on accepting license license_A and platform_guaranty of 200000'+
     'in activate: proceed to settlement on the end of month'+
     'in settlement: proceed to activate on account_settled';

var string3 =
'This contract shall commence with effect from 2017-12-12 03:30 and shall continue until 2017-12-21 03:30 unless terminated earlier in accordance with its terms and conditions'+
'For userA:'+
  'in begining:proceed to suspend on accepting license license_A '+
  'in activate: proceed to suspend on visit_increment of 1 '+
  'in suspend : proceed to activate on account_settled';
var  string4 =
'This contract shall commence with effect from 12/12/2012  03:30 and shall continue until 11/11/2012 03:30 unless terminated earlier in accordance with its terms and conditions'+
'For userA:'+
   'in begining:proceed to activate on accepting license license_A and price priceExpression '+
   'in activate: proceed to suspend on visit of 200 '+
   'in suspend : proceed to activate on account_settled';

var  string5 =
'This contract shall commence with effect from 12/12/2012 03:30 and shall continue until 12/13/2012 03:30 unless terminated earlier in accordance with its terms and conditions'+
'For users in groupA:'+
   'in begining:proceed to activate on accepting license license_A and price priceExpression'+
   'in activate: proceed to suspend on transaction of 50000 in total';

var string6 =
'This contract shall commence with effect from 12/12/2012 03:03 and shall continue until 12/13/2012 unless terminated earlier in accordance with its terms and conditions'+
'For free_log_A and users in user_groups_A:'+
   'in initial:proceed to activate on accepting license license_A and price priceExpression '+
   'in activate: proceed to settlement on the end of year '+
                'proceed to suspend on account_balance greater than 100000 '+
   'in settlement: proceed to activate on account_settled '+
   'in suspend : proceed to activate on account_balance smaller than 100000';

console.log('start gen');
var re = GEN.complier(string3);
// console.log(re);
console.log(re.result.join(' ').replace(/ \n /g, '\n'));
console.log(re.policy_segments[0]);
console.log('end gen');
