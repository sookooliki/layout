const webpack = require('webpack');

var HtmlWebWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var indexPlugin = new HtmlWebWebpackPlugin({
    template: './src/index.html'
});

var stylePlugin = new ExtractTextPlugin("[name].css");

var hotReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: {
        app: './src/app/app.module.ts'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.css$/,
            loader: stylePlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.scss$/,
            loader: stylePlugin.extract('style-loader', 'css-loader!sass-loader')
        }, {
            test: /\.(svg|ttf|woff|woff2|eot)$/,
            loader: 'file-loader?name=assets/[name].[ext]'
        }]
    },
    plugins: [
        indexPlugin,
        stylePlugin,
        hotReplacementPlugin
    ],
    devServer: {
        contentBase: "./dist"
    }
}