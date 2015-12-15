var del = require( "del" );

function plugin ( opts ) {
	return function ( files, metalsmith, done ) {
		//del( metalsmith.destination()).then( function ( paths ) {
		//	done();
		//})
		done();
	}
}

module.exports = plugin;