var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
http.get('http://www.360doc.com/content/13/0617/10/380315_293418732.shtml', function(response) {
	var stack = '';
	response.on('data', function(chunk) {
		stack += chunk;
	});

	response.on('end', function(err) {
		if (err) {
			console.log(err);
		}
		var $ = cheerio.load(stack);
		var $trArr = $('#articlecontent colgroup').next().find('tr');
		var json = {};
		$trArr.each(function(i, val) {
			var tdArr = [];
			$(val).find('td').each(function(i, ele) {
				if ($(this).text()) {
					tdArr.push($(this).text());
				}
			})
			var valueArr = tdArr.slice(1);
			json[tdArr[0]] = valueArr;
		})
		fs.appendFile('dic.json', JSON.stringify(json), function(err) {
			if (err) {
				console.log(err);
			}
		});
	});
}).on('error', function(err) {
	callback();
})