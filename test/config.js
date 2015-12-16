module.exports = {
	source: "./test/fixtures/src",
	destination: "./test/fixtures/.build",
	markdown: {
		smartypants: true,
		smartLists: true,
		gfm: true,
		tables: true
	},
	layouts: {
		engine: "handlebars",
		default: "default.hbt"
	},
	inplace: {
		engine: "handlebars",
		pattern: "**/*.md"
	},
	tags: {
		handle: "tags",
		layout: "./partials/tag.hbt",
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
		src: "./test/fixtures/src/assets",
		dest: "./assets"
	},
	permalinks: {

	}
};
