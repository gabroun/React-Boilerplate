const gulp = require('gulp');
const config = require('../config');
const livereload = require('gulp-livereload');

gulp.task('watch', _ => {
    require('../../server');

    livereload.listen({
        port: 35729
    });
    gulp.watch(config.src + '/**/*.js', ['scripts']);
    gulp.watch(config.src + '/**/*.jsx', ['scripts']);
    gulp.watch(config.src + '/**/*.less', ['less']);
    gulp.watch(config.src + '/**/*.html', ['html']);
});