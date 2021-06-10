const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname,'src/index.jsx'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html'),
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
    },
    devServer: {
        port: 1904,
    }
}
