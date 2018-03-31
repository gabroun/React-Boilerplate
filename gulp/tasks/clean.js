const gulp = require('gulp');
const config = require('../config');
const del = require('del');

gulp.task('clean', _ => {
    return del.sync([
        config.dest + '/**/*'
    ]);
});