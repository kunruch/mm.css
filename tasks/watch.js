var config  = require('./config.json');
var gulp    = require('gulp');

/**
 * Watch for changes
 */
gulp.task('watch', function () {
    gulp.watch(config.assets.WATCH, ['assets']);
    gulp.watch(config.css.WATCH, ['css']);
    gulp.watch(config.html.WATCH, ['html']);
});