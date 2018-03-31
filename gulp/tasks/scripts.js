const gulp = require('gulp');
const livereload = require('gulp-livereload');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config.js');
const config = require('../config');

gulp.task('scripts', _ => {
    return gulp.src(config.src + '/app.jsx')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest(config.dest))
    pipe(livereload());
});