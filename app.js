var fs = require('fs');
var async = require('async');
var i = 0;
fs.readFile('a.doc', 'utf-8', function(err, data) {
	console.log(data);
});