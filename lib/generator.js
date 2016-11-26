#!bin/env node

(function() {
    'use strict';
    var generateValid = require('./step-first-check'),
        tempFolder = require('./step-temp-folder'),
        copy = require('./step-copy'),
        replace = require('./step-replace'),
        shell = require('shelljs'),
        tempFolderPath;

    require('colors');

    module.exports = generateProject;

    ///////////

    function generateProject (userValue) {
        if (generateValid) {
            console.log('The folder need to be empty before start'.red);
            return;
        }
        tempFolderPath = tempFolder.create();
        copy('./generator/*',tempFolderPath + '/');
        shell.cd(tempFolderPath);
        replace('PACKAGE_NAME', userValue.name);
        replace('PACKAGE_DESC', userValue.desc);
    }

})();
