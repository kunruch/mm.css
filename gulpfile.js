// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var jade = require('gulp-jade');
var ghPages = require('gulp-gh-pages');

var SRC_SCSS = './src/**/*.scss';
var SRC_JADE = './web/**/!(_)*.jade';
var SRC_STATIC = './web/static/**/*';


const SASS_INCLUDE_PATHS = [
    './node_modules/'
];

var DEST_SCSS = './dist/';
var DEST_JADE = './public/';
var DEST_STATIC = './public/';

var WATCH_JADE = './web/**/*.jade';

/**
 * Copy static files to destination
 */
gulp.task('copy-static', function () {
    return gulp.src(SRC_STATIC).pipe(gulp.dest(DEST_STATIC));
});

/**
 * Compile jade files into HTML
 */
gulp.task('jade', function () {

    var YOUR_LOCALS = {};

    return gulp.src(SRC_JADE)
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(DEST_JADE))
});

/**
 * Compile sass files into CSS
 */
gulp.task('sass', function () {
    gulp.src(SRC_SCSS)
        .pipe(sass({ includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(DEST_SCSS)) //CSS for dist
        .pipe(gulp.dest(DEST_STATIC)) //CSS for web
});

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['copy-static', 'sass', 'jade'], function () {

    gulp.watch(SRC_STATIC, ['copy']);
    gulp.watch(SRC_SCSS, ['sass']);
    gulp.watch(WATCH_JADE, ['jade']);
});

/**
 * Build task
 */
gulp.task('build', ['copy-static', 'sass', 'jade']);

/**
 * Deploy to GitHub Pages. This task is run via Travis CI
 */
gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe(ghPages());
});
