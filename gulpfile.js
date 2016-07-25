// Sass configuration
var gulp        = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var jade        = require('gulp-jade');

var SRC_SCSS    = './src/**/*.scss';
var SRC_JADE    = './web/**/!(_)*.jade';
var SRC_STATIC  = './web/static/**/*';

var DEST_SCSS   = './dist/';
var DEST_JADE   = './public/';
var DEST_STATIC = './public/';

var WATCH_JADE  = './web/**/*.jade';

/**
 * Copy static files to destination
 */
gulp.task('copy-static', function(){
    return gulp.src(SRC_STATIC).pipe(gulp.dest(DEST_STATIC));
});

/**
 * Compile jade files into HTML
 */
gulp.task('jade', function() {

    var YOUR_LOCALS = {};

    return gulp.src(SRC_JADE)
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(DEST_JADE))
});

/**
 * Important!!
 * Separate task for the reaction to `.jade` files
 */
//gulp.task('jade-watch', ['jade'], reload);

/**
 * Compile sass files into CSS
 */
gulp.task('sass', function() {
    gulp.src(SRC_SCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(DEST_SCSS)) //CSS for dist
        .pipe(gulp.dest(DEST_STATIC)) //CSS for web
});

/**
 * Serve and watch the scss/jade files for changes
 */
gulp.task('default', ['copy-static', 'sass', 'jade'], function () {

    gulp.watch(SRC_STATIC,    ['copy']);
    gulp.watch(SRC_SCSS,      ['sass']);
    gulp.watch(WATCH_JADE,    ['jade']);
});

/**
 * Build task
 */
 gulp.task('build', ['copy-static', 'sass', 'jade']);
