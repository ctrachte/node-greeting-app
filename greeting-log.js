const fs = require('fs');

let date = new Date();
let current_hour = date.getHours();

exports.logGreetings = function (greeting) {
	fs.appendFileSync('greeting-log.txt', `Your choice on ${date} ${current_hour}: ${greeting}

		 `);
}

exports.readLog = function () {
	fs.readFile("greeting-log.txt", "UTF8", function(err, data) {
	    if (err) { throw err };
	    console.log(data);
	});
}