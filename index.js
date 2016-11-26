#!bin/env node

(function() {
    'use strict';
    var inquirer = require('inquirer');
    var questions = [{
        type: 'input',
        name: 'name',
        message: 'Enter the package name',
        validate: function(value) {
            var pass = value.match("^(?:@([^/]+?)[/])?([^/]+?)$");
            if (pass) {
                return true;
            }
            return 'Please enter a valid npm package name';
        }
    },{
        type: 'input',
        name: 'desc',
        message: 'Insert the package description'
    }];
    console.log('Turbo-git initial package files generator')
    inquirer.prompt(questions).then(function(answers) {
        // Use user feedback for... whatever!!
        console.log(answers)
    });

})();
