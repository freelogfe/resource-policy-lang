
var fs = require('fs');
var path = require('path')
var dir = __dirname

var input = fs.readFileSync(path.join(dir,'./fixtures/novel_community_p1.policy'),'utf-8');
var {highlight: highlightTest, beautify} = require('../index')

fs.writeFile('h2.html', highlightTest(input), (err) => {
  if (err) throw err;
  console.log('The file(h2.htm) has been saved!');
});


fs.writeFile('beautify.html', `<pre>${beautify(input)}</pre>`, (err) => {
  if (err) throw err;
  console.log('The file(beautify.html) has been saved!');
});
