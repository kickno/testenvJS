//register babel
require('babel-register')();
//disable webpack features that Mocha doesn't understand
require.extensions['css'] = function(){};
