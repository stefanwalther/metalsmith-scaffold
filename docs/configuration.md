Configuring the scaffold is very similar to using [metalsmith-cli](https://github.com/segmentio/metalsmith#cli), but the big difference is still, that no CLI is used, everything is nicely available in a JavaScript API. 
Therefore much easier to deploy programmatically and output can be automatically tested.

### Configuration Options
The following options needs to be defined to get the project up and running:

#### Source

```json
source: "path/to/source"
```

Reference: [metalsmith#sourcepath](https://github.com/segmentio/metalsmith#sourcepath)

#### Destination

```json
destination: "path/to/destination"
```

Reference: [metalsmith#destinationpath](https://github.com/segmentio/metalsmith#destinationpath)

#### Markdown

```json
markdown: {
	smartypants: true,
	smartLists: true,
	gfm: true,
	tables: true
}
```

Reference: [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown) resp. [marked](https://github.com/chjj/marked)

#### Layouts

```json
layouts: {
	directory: path.join( __dirname, "./fixtures/setup/layouts" ),
	partials: path.join( __dirname, "./fixtures/setup/partials" ),
	engine: "handlebars",
	default: "default.hbt",
	pattern: "*.hbt"
}
```

Reference: [metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts)

#### Inplace

```json
inPlace: {
	engine: "handlebars",
	pattern: "**/*.md"
}
```

Reference: [metalsmith-inplace](https://github.com/superwolff/metalsmith-in-place)

#### Register helpers

> Register Handlebar helpers automatically.

```json
registerHelpers: {
	"directory": path.join( __dirname, "./fixtures/setup/helpers" )
}
```

Reference: [metalsmith-register-helpers](https://github.com/losttype/metalsmith-register-helpers)

#### Drafts

> Enable drafts

```json
drafts: {
	default: true
},
```

Reference: [metalsmith-drafts](https://github.com/segmentio/metalsmith-drafts)
(actually in the project I have used a modification of metalsmith-drafts which considers all documentes as draft by default: [stefanwalther/metalsmith-drafts](https://github.com/stefanwalther/metalsmith-drafts))

#### Assets

> Copy assets to the output directory.

```json
assets: {
	source: path.join(__dirname, "./fixtures/content/assets"),
	destination: "./assets"
}
```

Reference: [metalsmith-assets](https://github.com/treygriffith/metalsmith-assets)