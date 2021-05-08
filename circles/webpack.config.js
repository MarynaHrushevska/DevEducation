const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 3000,
        hot: true,
        open: true,
        writeToDisk: pathToFile => /(index\.html$)|(bundle\.js$)|(styles\.css$)/.test(pathToFile),
    },
    module: {
        rules: [
            { test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            { test: '/\.html$', use: HtmlWebpackPlugin.loader }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ]
};
