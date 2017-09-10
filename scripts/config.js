const path = require('path');

const ip = require('ip');

const sourceFolderName = 'src';
const buildFolderName = 'release';
const mockServerFolderName = 'mock';
const projectBaseFolder = path.join(__dirname, '..');

exports.developmentIP = ip.address();
exports.developmentPort = Math.floor(Math.random() * 65536);

exports.sourceFolderName = sourceFolderName;
exports.buildFolderName = buildFolderName;

exports.projectBaseFolder = projectBaseFolder;

exports.sourceFolder = path.join(projectBaseFolder, sourceFolderName);
exports.buildFolder = path.join(projectBaseFolder, buildFolderName);
exports.mockServerFolder = path.join(projectBaseFolder, mockServerFolderName);

exports.devEntryHtml = '/html/components-example.html';
