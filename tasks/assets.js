var config  = require('./config.json');
var gulp    = require('gulp');

/**
 * Copy asset files to destination
 */
gulp.task('assets', function () {
    return gulp.src(config.assets.SRC).pipe(gulp.dest(config.assets.DEST));
});