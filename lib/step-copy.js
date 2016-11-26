#!/usr/bin/env node
module.exports = (function() {
    'use strict';
    var shell = require('shelljs');

    return doCopy;

    ///////////


    function doCopy(source, dest){
        //console.log(shell.pwd());
        shell.cp('-rf',source, dest);
    }
})();

