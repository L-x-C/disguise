var textract = require('textract');
var fs = require('fs');
var officegen = require('officegen');

var dic;
fs.readFile('dic.json', 'utf-8', function(err, data) {
	dic = JSON.parse(data);
});

textract('a.doc', function(error, text) {
	for (var i in dic) {
		var reg = new RegExp(i, 'g');
		var replaceVal = dic[i][Math.floor(Math.random() * (dic[i].length - 1))];
		text = text.replace(reg, replaceVal);
	}
	var docx = officegen('docx');
	docx.on('finalize', function(written) {
		console.log('Finish to create Word file.\nTotal bytes created: ' + written + '\n');
	});
	docx.on('error', function(err) {
		console.log(err);
	});
	var pObj = docx.createP();
	pObj.addText(text);

	var out = fs.createWriteStream('b.docx');

	out.on('error', function(err) {
		console.log(err);
	});

	docx.generate(out);
});
