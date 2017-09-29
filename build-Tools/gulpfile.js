
var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

//----------------------------------------
// gulp.task('speak', function () {
//     console.log('speaking...');
// });
// gulp.task('type', ['speak'], function () {
//     console.log('typing...');
// });
// gulp.task('default',['type']);
//----------------------------------------



gulp.task('concat-scripts', function () {
    return watch('js/*.js', function () {
        gulp.src('./js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('./dist/'));
    });
});


gulp.task('default', ['concat-scripts']);