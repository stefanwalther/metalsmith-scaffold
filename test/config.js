var path = require( "path" );
module.exports = {
	source: path.join( __dirname, "./fixtures/content" ),
	destination: path.join( __dirname, "./fixtures/.build" ),
	markdown: {
		smartypants: true,
		smartLists: true,
		gfm: true,
		tables: true
	},
	layouts: {
		directory: path.join( __dirname, "./fixtures/setup/layouts" ),
		partials: path.join( __dirname, "./fixtures/setup/partials" ),
		engine: "handlebars",
		default: "default.hbt",
		"pattern": "*.hbt"
	},
	inplace: {
		engine: "handlebars",
		pattern: "**/*.md"
	},
	registerHelpers: {
		"directory": path.join( __dirname, "./fixtures/setup/helpers" )
	},
	tags: {
		handle: "tags",
		layout: path.join( __dirname, "./fixtures/setup/partials/tag.html" ),
		path: "topics/:tag.html",
		sortBy: "date",
		reverse: true,
		skipMetadata: false,
		slug: {mode: 'rfc3986'}
	},
	drafts: {
		default: true
	},
	readme: [
		[/readme\.md/gi, "index.html"]
	],
	assets: {
		src: path.join( __dirname, "./fixtures/content/assets" ),
		dest: "./assets"
	},
	permalinks: {}
};
