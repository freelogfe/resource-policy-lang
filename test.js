var GEN = require('./index.js');
var string =
'This contract shall commence with effect from 12/12/2012 03:30 and shall continue until 12/12/2012 03:30 unless terminated earlier in accordance with its terms and conditions'
+ 'for users userA and usergroups goup_A, groupB and diamond_users, gold_users in usergroups groupA: in begining:proceed to activated on accepting license license_A and at the end of day and on balance no less than 123';
console.log('start gen');
var re = GEN(string);
console.log(re);
console.log(re.codeblockList[0]);
console.log('end gen');
