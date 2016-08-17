var config  = require('./config.json');
var gulp    = require('gulp');
var sass = require('gulp-sass');
var prefix    = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');

/**
 * Generate CSS.
 */
gulp.task('css', function () {
    return gulp.src(config.css.SRC)
        .pipe(sass({ includePaths: config.css.INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(prefix('last 2 versions', { cascade: true }))
        .pipe(csscomb())
        .pipe(gulp.dest(config.css.DEST)) //non-minified CSS
        
});

/**
 * Generate and minify CSS
 */
gulp.task('css-min', function () {
    return gulp.src(config.css.SRC)
        .pipe(sass({ includePaths: config.css.INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(prefix('last 2 versions', { cascade: true }))
        .pipe(csscomb())
        .pipe(gulp.dest(config.css.DEST)) //non-minified CSS
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.css.DEST)) //minified CSS
});

/**
 * Prepare CSS for distribution
 */
gulp.task('css-dist', ['css-min'], function () {
    return gulp.src(config.css.DEST + "**.css")
        .pipe(gulp.dest(config.css.DIST))
});