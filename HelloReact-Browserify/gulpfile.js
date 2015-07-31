/**
 * Created by Lyy on 2015/7/30.
 */
var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var source = require("vinyl-source-stream");

gulp.task("browserify", function() {
    browserify("app.js")
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task("uglify", ["browserify"], function() {
    gulp.src("build/bundle.js")
        .pipe(uglify())
        .pipe(rename("bundle.min.js"))
        .pipe(gulp.dest("./build/"));
});

gulp.task("build", ["uglify"]);