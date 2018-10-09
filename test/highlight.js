
var fs = require('fs');
var path = require('path')
var input = fs.readFileSync('./fixtures/novel_community_p1.policy','utf-8');
var highlightPolicy = require('../lib/presentablePolicyHighlight').highlightPolicy

fs.writeFile('h2.html', highlightPolicy(input), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
