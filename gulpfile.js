var gulp = require('gulp');
var exec = require('child_process').exec;

var mac_antlr_dir = '/usr/local/lib/antlr-4.7.1-complete.jar';
var win_antlr_dir = 'C:/Javalib/antlr-4.7.1-complete.jar'
var lib = './lib'
var dest = './gen';

gulp.task('compile', function(callback) {
  let env = process.env;
  if (process.platform === 'darwin') {
    exec(`java -jar ${mac_antlr_dir} -Dlanguage=JavaScript -o ${dest} -lib ${lib} -visitor ./lib/resourcePolicy.g4`, env, function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
    });
  }
  if (process.platform === 'win32') {
    exec(`java -jar ${win_antlr_dir} -Dlanguage=JavaScript -o ${dest} -lib ${lib} -visitor ./lib/resourcePolicy.g4`, env, function(err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      callback(err);
    });
  }
});