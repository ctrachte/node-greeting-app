const greetings = require("./greeting.js");

const readline = require('readline');

const greetingLog = require('./greeting-log.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Choose a language: English, Spanish, Japanese, Icelandic: ', (answer) => {

	if (answer.toLowerCase() === 'spanish') {
		greetings.greetingSpanish();
	} else if (answer.toLowerCase() === 'icelandic') {
		greetings.greetingIcelandic();
	} else if (answer.toLowerCase() === 'japanese') {
		greetings.greetingJapanese();
	} else if (answer.toLowerCase() === 'english') {
		greetings.greetingEnglish();
	} else {
		greetings.greetingEnglish();
	}
	greetingLog.logGreetings(answer);
	 //close the input stream.
	rl.close();
	
});

greetingLog.readLog();