var config  = require('./config.json');
var gulp    = require('gulp');
var jade = require('gulp-jade');

/**
 * Generate HTML
 */
gulp.task('html', function () {
    return gulp.src(config.html.SRC)
        .pipe(jade())
        .pipe(gulp.dest(config.html.DEST))
});