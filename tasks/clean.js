var config  = require('./config.json');
var gulp    = require('gulp');
var del     = require('del');

/**
 * Clean files
 */
gulp.task('clean', function () {
    del([config.clean.DEST]).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});