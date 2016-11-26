#!/usr/bin/env node
module.exports = (function() {
    'use strict';
    var shell = require('shelljs');

    return doReplace;

    ///////////


    function doReplace(tag, newText, files){
        var files = files || '*';

        shell.sed('-i', tag, newText, files);
    }
})();
