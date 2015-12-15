"use strict";

var Metalsmith = require( "metalsmith" );
var markdown = require( "metalsmith-markdown" );
var layouts = require( "metalsmith-layouts" );
var debug = require( "metalsmith-debug" );
var Handlebars = require( 'handlebars' );
var fs = require( "fs" );
var inplace = require( "metalsmith-in-place" );
var tags = require( "metalsmith-tags" );
var moment = require( "moment" );
var debugOutput = require( "./plugins/debug-output" );
var drafts = require( "metalsmith-drafts" );
var colors = require("colors");

Handlebars.registerHelper( "custom", require( "./helpers/custom" ) );
Handlebars.registerPartial( "header", fs.readFileSync( __dirname + '/layouts/partials/header.hbt' ).toString() );
Handlebars.registerHelper( 'dateFormat', function ( context, format ) {
	var f = format || 'DD/MM/YYYY';
	return moment( new Date( context ) ).format( f );
} );

Metalsmith( __dirname )
	.clean( false )
	.use( drafts( {default: true} ) )
	.use( debugOutput() )
	.use( tags( {
		handle: "tags",
		layout: "./partials/tag.hbt",
		path: "topics/:tag.html",
		sortBy: "date",
		reverse: true,
		skipMetadata: false,
		slug: {mode: 'rfc3986'}
	} ) )
	.use( inplace( {
		engine: "handlebars",
		pattern: "**/*.md"
	} ) )
	.use( markdown( {
		smartypants: true,
		smartLists: true,
		gfm: true,
		tables: true
	} ) )
	.use( layouts( {
		engine: "handlebars",
		default: "default.hbt"
	} ) )
	.source( "./.content" )
	.destination( "./.build" )
	.build( function ( err, files ) {
		if ( err ) {
			console.log( colors.red("On or more errors occurred: ") + err );
		} else {
			console.log( "---" );
			Object.keys( files ).forEach( function ( file ) {
				console.log( colors.green( "File created: " ) + file );
			} );
			console.log("---");
			console.log(colors.green( Object.keys( files).length) + " files created in total.");
		}
	} );