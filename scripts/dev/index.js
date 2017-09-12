const url = require('url');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');

const webpackConfig = require('../webpack.config');
import * as configs from '../config';

const devServerOptions = {
    contentBase: [
    	'dist',
        'mock'
    ],
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    
    // use proxy for POST request
    proxy: {
        '/api': {
            target: 'http://' + configs.developmentIP + ':' + configs.developmentPort,
            pathRewrite(path, option) {
                option.method = 'GET';
                return path.substr(4);
            }
        }
    }
};

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

let browserOpened = false;

compiler.plugin('done', () => {
    server.listen(configs.developmentPort, configs.developmentIP, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('Listening at : http://' + configs.developmentIP + ':' + configs.developmentPort);
            if (!browserOpened) {
                browserOpened = true;
                openBrowser('http://' + configs.developmentIP + ':' + configs.developmentPort + configs.devEntryHtml);
            }
        }
    });
});