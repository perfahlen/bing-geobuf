var gulp = require("gulp");
var concat = require('gulp-concat');

var sourceFiles = ['./node_modules/pbf/dist/pbf.js', './node_modules/geobuf/dist/geobuf.js'];

gulp.task('cp', function () {
    return gulp.src(sourceFiles)
        .pipe(concat('bufs.js'))
        .pipe(gulp.dest('./public/libs'));
});