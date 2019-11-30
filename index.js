const {emptyDirSync} = require('fs-extra');

module.exports = (bundler) => {
    emptyDirSync(bundler.options.outDir)
};
