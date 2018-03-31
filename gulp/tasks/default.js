const gulp = require('gulp');

gulp.task('default', [
    'clean',
    'scripts',
    'less',
    'html',
    'watch'
]);