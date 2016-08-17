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

//Default task for development. Build, watch for file changes and auto rebuild
gulp.task('default', function() {
	return runSequence(
		'clean',
		['assets', 'css', 'html', 'scripts'],
		'watch'
	);
});

//Dist task to build and prepare files for distribution
//We have only CSS files to build for this project
gulp.task('dist', ['css-dist']);

//Deploy task to build and deploy to production server.
gulp.task('deploy', function() {
	return runSequence(
		'clean',
		['assets', 'css', 'html', 'scripts', 'minify'],
		'gh-pages-deploy'
	);
});
