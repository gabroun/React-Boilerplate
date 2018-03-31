const gulp = require('gulp');
const config = require('../config');
const livereload = require('gulp-livereload');

gulp.task('html', _ => {
    return gulp.src(config.src + '/index.html')
    .pipe(gulp.dest(config.dest))
    .pipe(livereload());
});