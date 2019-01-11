const express = require("express");
const hbs = require("hbs");

const middlewares = require("./middlewares");

const app = express();

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper("currentYear", () => new Date().getFullYear());
hbs.registerHelper("upperCase", text => text.toUpperCase());
app.set("view engine", "hbs");


app.use(middlewares.logger);
//app.use(middlewares.maintenance);
app.use(express.static(__dirname+"/public"));


app.get("/", (request, response) => {
	response.render("home.hbs", {
		title: "Home Page",
		welcome: "Hello World"
	});

});
app.get("/about", (request, response) => {
	response.render("about.hbs", {
		title: "About Page"
	});
})
app.get("/bad", (request, response) => {
	response.send({errorMessage: "Unable to handle this request"});
})



app.listen(3000, () => {
	console.log("Server is up on port 3000");
});