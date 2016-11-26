#!/user/bin/env node
(function() {
    'use strict';
    var figlet = require('figlet'),
	version = 'v' + require('../package.json').version;
    require('colors');

    figlet('Turbo Generator', 'Standard', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.rainbow, version)
        console.log('Turbo-git utility package generator')
        console.log('\n')
    });
})();
