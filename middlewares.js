const fs = require("fs");

module.exports.logger = (request, response, next) => {
	const now = new Date().toString()
	const log = `${now} - ${request.method} ${request.url}`;
	console.log(log);
	fs.appendFile("server.log", log+"\n", error => {
		if (error) 
			console.log("Unable to append to server.log")
	});
	next();
};

module.exports.maintenance = (request, response, next) => response.render("maintenance");