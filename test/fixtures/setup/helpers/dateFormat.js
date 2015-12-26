var moment = require("moment");

module.exports = function ( context, format ) {
	var f = format || 'DD/MM/YYYY';
	return moment( new Date( context ) ).format( f );
};
