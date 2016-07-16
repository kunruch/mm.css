// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
    gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('min', ['sass'], function() {
    gulp.src('./dist/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['sass'], function() {
    gulp.watch('src/**/*', ['sass']);
})
