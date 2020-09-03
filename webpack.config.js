const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        base: './src/js/index.js',
        main: './src/js/main.js',
        template: './src/js/template.js',
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
            chunks: ['base']
        }),
        new HtmlWebpackPlugin({
            filename: 'cookie-policy.html',
            template: './src/cookie-policy.html',
            chunks: ['base']
        }),
        new HtmlWebpackPlugin({
            filename: 'gdpr.html',
            template: './src/gdpr.html',
            chunks: ['base']
        }),
        new HtmlWebpackPlugin({
            filename: 'template.html',
            template: './src/template.html',
            chunks: ['template']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: './src/blog.html',
            chunks: ['base']
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
