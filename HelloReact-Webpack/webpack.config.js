/**
 * Created by Lyy on 2015/7/31.
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        hello: "./src/app.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    output: {
        path: "./build",
        filename: '[name].bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("./css/[name].css")
    ]
};