const gulp = require('gulp');
const postcss = require('gulp-postcss');
const presetenv = require('postcss-preset-env');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');

const postcssOptions = [presetenv];

gulp.task('css', () => {
    return gulp.src('src/css/*.pcss')
    .pipe(postcss(postcssOptions))
    .pipe( rename({extname: '.css'}) )
    .pipe(gulp.dest('dist/css'))
    .pipe(cleancss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
});