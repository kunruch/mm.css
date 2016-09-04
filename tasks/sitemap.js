var config  = require('./config.json');
var package = require('./../package.json')
var gulp = require('gulp');
var sitemap = require('gulp-sitemap');

gulp.task('sitemap', function () {
    gulp.src(config.sitemap.SRC, {
            read: false
        })
        .pipe(sitemap({
            siteUrl: package.homepage
        }))
        .pipe(gulp.dest(config.sitemap.DEST));
});