const express = require("express");
const hbs = require("hbs");

const middlewares = require("./middlewares");

const port = process.env.PORT || 3000;

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

app.get("/projects", (request, response) => {
	response.render("projects.hbs", {
		title: "Projects Portfolio"
	});
})


app.listen(port, () => {
	console.log("Server is up on port "+port);
});