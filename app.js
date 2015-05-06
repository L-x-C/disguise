var textract = require('textract');
var dic = {
	'啊': '去'
}
textract('a.doc', function(error, text) {
	for (var i in dic) {
		var reg = new RegExp(i, 'g');
		text = text.replace(reg, dic[i]);
	}
	console.log(text);
});