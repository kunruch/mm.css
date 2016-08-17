var config  = require('./config.json');
var gulp    = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

/**
 * Generate CSS
 */
gulp.task('css', function () {
    return gulp.src(config.css.SRC)
        .pipe(sass({ includePaths: config.css.INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(config.css.DEST))
});

/**
 * Preaprre CSS for distribution
 */
gulp.task('css-dist', ['css'], function () {
    return gulp.src(config.css.DEST + "**.css")
        .pipe(gulp.dest(config.css.DIST))
});