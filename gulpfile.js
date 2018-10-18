const gulp = require('gulp');
const colors = require('ansi-colors');
const newer = require('gulp-newer');
const less = require('gulp-less');

gulp.task('css', () => {
    return gulp.src('src/css/*.less')
        .pipe(newer({
            dest: 'dist/css',
            ext: '.css',
            extra: 'src/css/includes/**/*.less',
        }))
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});