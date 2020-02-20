const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            loaders: [ 'babel-loader' ],
            exclude: /node_modules/
        },
        {
            test: /(\.scss|\.css)$/,
            loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[folder]-[name].[ext]',
                    outputPath: 'img/'
                },
            }]
        },
        {
            test: /\.json$/,
            loaders: [ 'json-loader' ],
            exclude: /node_modules/
        }]
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development')
    {
        config.devtool = 'eval-source-map';
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.devServer = {
            contentBase: './build',
            hot: true
        };
    }

    return config;
};