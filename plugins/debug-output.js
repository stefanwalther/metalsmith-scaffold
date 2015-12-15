

function plugin ( opts ) {
	return function ( files, metalsmith, done ) {

		Object.keys(files).forEach(function(file) {
			console.log(file);
		});
		done();
	}
}

module.exports = plugin;