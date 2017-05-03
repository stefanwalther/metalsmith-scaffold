# metalsmith-scaffold

[![Greenkeeper badge](https://badges.greenkeeper.io/stefanwalther/metalsmith-scaffold.svg)](https://greenkeeper.io/)

> A quite comprehensive setup based on Metalsmith to create a static website.

**Work in progress: stay tuned**

## About

The goal of this project is to create a nice scaffold using Metalsmith which can then be used in multiple projects with very little configuration.

### Status so far

What's planned (not everything covered right now):

* [x] Markdown conversion
* [x] Less conversion
* [x] Cleaning the build directory
* [x] Error handling to ensure that everything went well
* [ ] Error notification
* **Different:**

  - [x] layouts
  - [x] content types
  - [] collections

* **Dynamic loading** of:
  - [x] handlebar templates
  - [x] partials
  - [] Metalsmith plugins

* Site **features**:
  - [x] Tags
* Full test coverage to ensure that everything continues to work

## Configuration

Configuring the scaffold is very similar to using [metalsmith-cli](https://github.com/segmentio/metalsmith#cli), but the big difference is still, that no CLI is used, everything is nicely available in a JavaScript API.
Therefore much easier to deploy programmatically and output can be automatically tested.

### Configuration Options

The following options needs to be defined to get the project up and running:

#### Source

```js
source: "path/to/source"
```

Reference: [metalsmith#sourcepath](https://github.com/segmentio/metalsmith#sourcepath)

#### Destination

```js
destination: "path/to/destination"
```

Reference: [metalsmith#destinationpath](https://github.com/segmentio/metalsmith#destinationpath)

#### Markdown

```js
markdown: {
    smartypants: true,
    smartLists: true,
    gfm: true,
    tables: true
}
```

Reference: [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown) resp. [marked](https://github.com/chjj/marked)

#### Layouts

```js
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

```js
inPlace: {
    engine: "handlebars",
    pattern: "**/*.md"
}
```

Reference: [metalsmith-inplace](https://github.com/superwolff/metalsmith-in-place)

#### Register helpers

> Register Handlebar helpers automatically.

```js
registerHelpers: {
    "directory": path.join( __dirname, "./fixtures/setup/helpers" )
}
```

Reference: [metalsmith-register-helpers](https://github.com/losttype/metalsmith-register-helpers)

#### Drafts

> Enable drafts

```js
drafts: {
    default: true
},
```

Reference: [metalsmith-drafts](https://github.com/segmentio/metalsmith-drafts)
(actually in the project I have used a modification of metalsmith-drafts which considers all documentes as draft by default: [stefanwalther/metalsmith-drafts](https://github.com/stefanwalther/metalsmith-drafts))

#### Assets

> Copy assets to the output directory.

```js
assets: {
    source: path.join(__dirname, "./fixtures/content/assets"),
    destination: "./assets"
}
```

Reference: [metalsmith-assets](https://github.com/treygriffith/metalsmith-assets)

## Author

**Stefan Walther**

+ [qliksite.io](http://qliksite.io)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)
* [github.com/stefanwalther](http://github.com/stefanwalther)

## License

Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on December 26, 2015._