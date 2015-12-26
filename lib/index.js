"use strict";

var Metalsmith = require( "metalsmith" );
var Handlebars = require( 'handlebars' );
var markdown = require( "metalsmith-markdown" );
var layouts = require( "metalsmith-layouts" );
var debug = require( "metalsmith-debug" );
var inplace = require( "metalsmith-in-place" );
var tags = require( "metalsmith-tags" );
var debugOutput = require( "./plugins/debug-output" );
var drafts = require( "metalsmith-drafts" );
var permaLinks = require( "metalsmith-permalinks" );
var rename = require( "metalsmith-rename" );
var assets = require( "metalsmith-static" );
var includeSubDirs = require( "metalsmith-include-subdirs" );
var registerHelpers = require("metalsmith-register-helpers");

var moment = require( "moment" );
var colors = require( "colors" );
var fs = require( "fs" );
var glob = require( "glob" );
var extend = require("extend-shallow");

var MetalsmithScaffold = function ( config ) {

	this.config = config;

};

MetalsmithScaffold.prototype.run = function ( cb ) {

	if ( typeof(this.config) === "undefined" ) {
		throw new Error( "Configuration is not defined" );
	}



	//Handlebars.registerHelper( "custom", require( "./helpers/custom" ) );
	//Handlebars.registerPartial( "header", fs.readFileSync( __dirname + '/layouts/partials/header.hbt' ).toString() );
	Handlebars.registerHelper( 'dateFormat', function ( context, format ) {
		var f = format || 'DD/MM/YYYY';
		return moment( new Date( context ) ).format( f );
	} );

	Metalsmith( __dirname )
		.clean( false )
		.use( registerHelpers( this.config.registerHelpers ))
		.use( drafts( this.config.drafts ) )
		.use( assets( this.config.assets ) )
		// Pattern to allow contents from GitHub with "just" a directory and a readme (e.g. https://github.com/stefanwalther/articles)
		.use( rename( this.config.readme ) )
		.use( debugOutput() )
		.use( tags( this.config.tags ) )
		.use( inplace( this.config.inplace ) )
		.use( markdown( this.config.markdown ) )
		.use( layouts( this.config.layouts ) )
		.use( permaLinks( this.config.permalinks ) )
		.use( includeSubDirs() )
		.source( this.config.source )
		.destination( this.config.destination )
		.build( function ( err, files ) {
			if ( err ) {
				console.log( colors.red( "On or more errors occurred: " ) + err );
			} else {
				console.log( "---" );
				Object.keys( files ).forEach( function ( file ) {
					console.log( colors.green( "File created: " ) + file );
				} );
				console.log( "---" );
				console.log( colors.green( Object.keys( files ).length ) + " files created in total." );
			}
			cb( err );
		} );
};

module.exports = MetalsmithScaffold;


