/**
 * Created by barrypoore on 06/10/2016.
 */
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});


gulp.task('build', function() {
    return gulp.src('style.css')
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('css/dist'));
});