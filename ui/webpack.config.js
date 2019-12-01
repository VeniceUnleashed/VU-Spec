var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: __dirname
        },
        {
            test: /(\.scss|\.css)$/,
            loaders: ['style', 'css', 'sass']
        },
        {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader'
        },
        {
            test: /\.json$/,
            loaders: [ 'json' ],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
};

if (process.env.NODE_ENV === 'production')
{
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({ output: { comments: false }, sourceMap: false }));
    module.exports.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    module.exports.plugins.push(new webpack.optimize.DedupePlugin());
    module.exports.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));
}
else
{
    module.exports.devtool = 'cheap-module-eval-source-map';
    module.exports.entry.unshift('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server');
    module.exports.plugins.push(new webpack.NoErrorsPlugin());
    module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports.entry.push('./src/index');
