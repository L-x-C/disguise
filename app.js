var textract = require('textract');
textract('a.doc', function(error, text) {
	console.log(text);
});