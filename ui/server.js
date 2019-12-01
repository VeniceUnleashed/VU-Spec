var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true
}).listen(port, 'localhost', function (err, result)
{
    if (err)
        console.error(err);
    else
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});