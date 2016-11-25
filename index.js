#!bin/env node
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
    constructor: function () {
        'use strict';
        // Calling the super constructor is important so our generator is correctly set up
        generators.Base.apply(this, arguments);
        // Next, add your custom code
    }
});
