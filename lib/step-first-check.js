#!/user/bin/env node

module.exports = (function() {
    'use strict';
    var shell = require('shelljs');

    if (shell.ls('-A').length > 0) {
        return false;
    }
    return true

})();
