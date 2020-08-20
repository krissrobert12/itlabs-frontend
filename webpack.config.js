const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        cookie: './src/js/cookie-policy.js',
        gdpr: './src/js/gdpr.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'cookie-policy.html',
            template: './src/cookie-policy.html',
            chunks: ['cookie']
        }),
        new HtmlWebpackPlugin({
            filename: 'gdpr.html',
            template: './src/gdpr.html',
            chunks: ['gdpr']
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
