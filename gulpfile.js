var gulp = require('gulp');
var exec = require('child_process').exec;

var antlr_dir = '/usr/local/lib/antlr-4.7.1-complete.jar';
var lib = './lib'
var dest = './gen';

gulp.task('compile', function(callback) {
  let env = process.env;
  if (process.platform === 'darwin') {
    exec(`java -jar ${antlr_dir} -Dlanguage=JavaScript -o ${dest} -lib ${lib} -visitor ./lib/resourcePolicy.g4`, env, function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
    });
  }
  if (process.platform === 'win32') {
    exec('java -jar /usr/local/lib/antlr-4.7.1-complete.jar -Dlanguage=JavaScript -visitor resourcePolicy.g4', env, function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
    });
  }
});
