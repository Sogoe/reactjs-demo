/**
 * Created by Lyy on 2015/7/31.
 */
var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

gulp.task("webpack", function() {
    webpack(webpackConfig, function(err, status) {

    });
});