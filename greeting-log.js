const fs = require('fs');


exports.logGreetings = function (greeting) {
	const stream = fs.createWriteStream("greeting-log.txt");
	stream.once('open', function(fd) {
	  stream.write(`Choice: ${greeting}
	  	.`);
	  stream.end();
	});	
}

exports.readLog = function () {
	fs.readFile('greeting-log.txt', (err, data) => {
	  if (err) throw err;
	  console.log(`Your greeting history:
	   ${data}`);
	});
}