/**
 * Created by Lyy on 2015/7/31.
 */
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

gulp.task("webpack", function() {
    webpack(webpackConfig, function(err, status) {

    });
});

gulp.task("uglify", ["webpack"], function() {
    gulp.src("./build/hello.bundle.js")
        .pipe(uglify())
        .pipe(rename("hello.bundle.min.js"))
        .pipe(gulp.dest("./build"))
});

gulp.task("default", ["webpack"]);