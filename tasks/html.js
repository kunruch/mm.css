var config  = require('./config.json');
var gulp    = require('gulp');
var jade = require('gulp-jade');

/**
 * Generate HTML
 */
gulp.task('html', function () {
    return gulp.src(config.html.SRC)
        .pipe(jade({ pretty: true}))
        .pipe(gulp.dest(config.html.DEST))
});


/**
 * Generate Minified HTML
 */
gulp.task('html-min', function () {
    return gulp.src(config.html.SRC)
        .pipe(jade({ pretty: false}))
        .pipe(gulp.dest(config.html.DEST))
});