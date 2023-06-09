const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config();
const path = require("path");

module.exports = {
    mode: process.env.mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname + "/build_contents") ,
    },
    resolve: {
        // path.resove 형태로 사용할 수도 있다.
        // 그러면 node의 기본 모듈 'path'를 불러와야 한다.
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loader: 'babel-loader'
        },
        {
            test: /\.css?$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }]
        }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
        mode: process.env.mode,
        port: process.env.port
        })
    ],

    devServer: {
        host: 'localhost',
        port: process.env.port,
        open: true,
        historyApiFallback: true,
        hot: true
    },
};