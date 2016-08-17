/*
  gulpfile.js
  ===========
  Each task has been broken out into its own file in 'tasks' folder.
  To add a new task, simply add a new task file that directory. 

  Commonly used tasks are defined here. 
*/
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var requireDir  = require('require-dir');

requireDir('./tasks', { recurse: true })

//Default task for development. Build, watch for file changes and auto reload browsers
gulp.task('default', function() {
	runSequence(
		'clean',
		['assets', 'css', 'html', 'scripts'],
		'watch',
		'connect'
	);
});

//Build task to build and minify files for production
gulp.task('build', function() {
	runSequence(
		'clean',
		['assets', 'css', 'html', 'scripts', 'minify']
	);
});

//Deploy task to build and deploy to production server.
gulp.task('deploy', function() {
	runSequence(
		'build',
		'deploy'
	);
});
