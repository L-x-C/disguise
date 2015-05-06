var textract = require('textract');
var fs = require('')

var dic;
fs.readFile('dic.json', 'utf-8', function(data) {
	dic = JSON.parse(data);
});

textract('a.doc', function(error, text) {
	for (var i in dic) {
		var reg = new RegExp(i, 'g');
		var replaceVal = dic[Math.floor(Math.random()*(dic[i].length - 1))];
		text = text.replace(reg, replaceVal);
	}
	console.log(text);
});