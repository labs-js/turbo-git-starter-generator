#!/usr/bin/env node
module.exports = (function() {
    'use strict';
    var shell = require('shelljs'),
        folderPath = '.turbo-generator';

    return {
        create: createTemp
    };

   ///////////


    function createTemp(){
        shell.rm('-rf',folderPath);
        shell.mkdir(folderPath);
        return folderPath;
    }
})();
