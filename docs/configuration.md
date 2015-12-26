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
	engine: "handlebars",
	default: "default.hbt"
}
```

Reference: [metalsmith-layouts](https://github.com/superwolff/metalsmith-layouts)
