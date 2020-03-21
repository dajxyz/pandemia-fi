var args = require('yargs').argv;

/**
 * ---------------------------------------------------------------------------------------------
 * Global settings
 * ---------------------------------------------------------------------------------------------
*/

const DEFAULT_DEMO = 'saas';
const AVAILABLE_DEMOS = ['saas','modern','creative'];

var FOLDER_PATHS = {
    baseSrc: "src/", // source files
    baseDist: "dist/", // build files
    baseAssets: "src/assets/", // base assets
};

const selectedDemo = (args['demo'] ? (AVAILABLE_DEMOS.indexOf(args['demo']) >= 0 ? args['demo'] : null): null) ? args['demo'] : DEFAULT_DEMO;

function getSrcFolderPath() {
    return FOLDER_PATHS.baseSrc + selectedDemo + "/";
}

function getDistFolderPath() {
    return FOLDER_PATHS.baseDist + selectedDemo + "/";
}

function getDistAssetFolderPath() {
    return getDistFolderPath(selectedDemo) + "assets/";
}

module.exports = {
    getSelectedDemo: function () { return selectedDemo },
    getBaseSrcPath: function () { return FOLDER_PATHS.baseSrc },
    getBaseDistPath: function () { return FOLDER_PATHS.baseDist },
    getBaseAssetsPath: function () { return FOLDER_PATHS.baseAssets },
    getSrcPath: getSrcFolderPath,
    getDistPath: getDistFolderPath,
    getDistAssetsPath: getDistAssetFolderPath
}