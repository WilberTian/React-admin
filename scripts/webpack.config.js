'use strict';

const path = require('path');

const ip = require('ip');
const glob = require('glob');
const webpack = require('webpack');
const numeral = require('numeral');
const logUpdate = require('log-update');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const configs = require('./config');
const theme = require('./theme.config.js');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const NODE_MODULES = 'node_modules';
const ENTRIES_FOLDER = 'entries';
const HTML_FOLDER = 'html';
const IMAGE_FOLDER = 'images';
const COMMON_CHUNK_NAME = 'common';

let NODE_ENV = process.env.NODE_ENV || process.env.ENV || PRODUCTION;

if (NODE_ENV.toLowerCase() === 'product') {
    NODE_ENV = PRODUCTION;
}

const eslintLoader = {
    enforce: 'pre',
    test: /\.js$/,
    include: [
        configs.sourceFolder,
    ],
    loaders: [
        'eslint-loader',
    ],
};

const jsLoader = {
    test: /\.js$/,
    include: [
        configs.sourceFolder,
    ],
    loaders: [
        'babel-loader',
    ],
};

const postCSSLoader = {
   loader: "postcss-loader",
   options: {
        plugins: function() {
            return [
                require('autoprefixer')
            ];
       }
    }
};

const cssLoader = {
    test: /\.css$/,
    include: [
        configs.sourceFolder,
    ],
    loaders: [
        'style-loader',
        'css-loader',
        postCSSLoader,
    ],
};

const cssModuleLoader = {
    test: /\.css$/,
    include: [
        path.resolve(configs.projectBaseFolder, NODE_MODULES),
    ],
    loaders: [
        'style-loader',
        'css-loader',
        postCSSLoader,
    ],
};

const lessLoader = {
    test: /\.less$/,
    include: [
        configs.sourceFolder,
    ],
    loaders: [
        'style-loader',
        'css-loader',
        postCSSLoader,
        'less-loader',
    ],
};

const lessModuleLoader = {
    test: /\.less$/,
    include: [
        path.resolve(configs.projectBaseFolder, NODE_MODULES),
    ],
    loaders: [
        'style-loader',
        'css-loader',
        postCSSLoader,
        `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
    ],
};

const fileLoader = {
    test: /\.(png|jpg|gif|ico)$/,
    loaders: [
        'url-loader?limit=8192&name=images/[name].[ext]',
    ],
};

const fontLoader = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    include: [
        path.resolve(configs.projectBaseFolder, 'src/fonts'),
    ],
    use: 'file-loader',
};

// default webpack config
let webpackConfig = {
    entry: {
        [COMMON_CHUNK_NAME]: [
            'babel-polyfill',
        ],
    },
    output: {
        path: configs.buildFolder,
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            eslintLoader,
            jsLoader,
            cssLoader,
            lessLoader,
            fileLoader,
            cssModuleLoader,
            lessModuleLoader,
            fontLoader,
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: COMMON_CHUNK_NAME,
            filename: 'js/[name].js',
        }),
        new Visualizer(),
        new webpack.ProgressPlugin((percentage, msg) => {
            logUpdate('     progress:', numeral(percentage).format('00.00%'), msg);
        }),
    ],
};

// get entry
const entryFileNameList = glob.sync(path.join(configs.sourceFolder, ENTRIES_FOLDER) + '/*.js');
const entryNameList = entryFileNameList.map((entryFileName) => {
    return path.basename(entryFileName, '.js');
});

// get corresponding html template
const htmlFileNameList = glob.sync(path.join(configs.sourceFolder, HTML_FOLDER) + '/*.html');
const htmlNameList = htmlFileNameList.map((htmlFileName) => {
    return path.basename(htmlFileName, '.html');
});

// set entry
entryNameList.forEach((entryName) => {
    webpackConfig.entry[entryName] = [
        path.join(configs.projectBaseFolder, `./${configs.sourceFolderName}/${ENTRIES_FOLDER}/${entryName}.js`),
    ];

    let htmlTemplateName = 'index';
    if (htmlNameList.indexOf(entryName) !== -1) {
        htmlTemplateName = entryName;
    }

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        template: `${configs.sourceFolderName}/${HTML_FOLDER}/${htmlTemplateName}.html`,
        filename: `${HTML_FOLDER}/${entryName}.html`,
        hash: true,
        inject: 'body',
        chunks: [
            COMMON_CHUNK_NAME,
            entryName,
        ],
        favicon: `${configs.sourceFolderName}/${IMAGE_FOLDER}/favicon.ico`,
    }));

});

// set config according to environment
switch (NODE_ENV) {
    case DEVELOPMENT:
        entryNameList.forEach((entryName) => {
            webpackConfig.entry[entryName].unshift(`webpack-dev-server/client?http://${configs.developmentIP}:${configs.developmentPort}`);

            webpackConfig.entry[entryName].unshift('webpack/hot/only-dev-server');

            webpackConfig.entry[entryName].unshift('react-hot-loader/patch');
        });

        webpackConfig.devtool = 'eval';
        webpackConfig.output.publicPath = '/';

        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
        webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        break;
    default:
        webpackConfig.devtool = 'cheap-source-map';
        webpackConfig.output.publicPath = '../';
        webpackConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
        break;
}

module.exports = webpackConfig;
