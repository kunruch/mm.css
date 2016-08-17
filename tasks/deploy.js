var config  = require('./config.json');
var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');

/**
 * Deploy to server
 */
gulp.task('gh-pages-deploy', function () {
    return gulp.src(config.deploy.SRC)
        .pipe(ghPages());
});