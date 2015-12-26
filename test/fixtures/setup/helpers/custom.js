var Handlebars = require("Handlebars");

module.exports = function ( content ) {
	return Handlebars.SafeString("<strong class='custom'>" + content + "</strong>");
};