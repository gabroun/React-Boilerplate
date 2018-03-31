const gulp = require('gulp');
const config = require('../config');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const Autoprefixer = require('less-plugin-autoprefix');
const lessAutoprefixer = new Autoprefixer({
    browsers: ['last 2 versions']
});
const livereload = require('gulp-livereload');


gulp.task('less', _ => {
    return gulp.src(config.src + '/**/*.less')
    .pipe(plumber(err => {
        console.log('less task error');
        console.log(err);
        this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(less({
        plugins: [lessAutoprefixer]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest + '/css'))
    .pipe(livereload());
});
