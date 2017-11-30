
'use strict';

const path = require('path');

const configs = require('./config');

const pkgPath = path.resolve(configs.projectBaseFolder, 'package.json');
const pkg = require(pkgPath);

 
let theme = {};

if (pkg.theme && typeof(pkg.theme) === 'string') {
    let cfgPath = pkg.theme;
    // relative path
    if (cfgPath.charAt(0) === '.') {
        cfgPath = path.resolve(configs.projectBaseFolder, cfgPath);
    }
    const getThemeConfig = require(cfgPath);
    theme = getThemeConfig();
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
    theme = pkg.theme;
}

module.exports = theme;