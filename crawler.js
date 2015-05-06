var http = require('http');
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
		
	});
}).on('error', function(err) {
	callback();
})