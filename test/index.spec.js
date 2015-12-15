"use strict";

var chai = require( "chai" );
var expect = chai.expect;
var MetalsmithScaffold = require( "./../index" );
var del = require( "del" );

describe( "whatever test", function () {

	var config = require( "./config.js" )

	after( function ( done ) {
		del( config.destination )
			.then( function ( /*files*/ ) {
				done();
			} )
	} );

	it( "runs", function ( done ) {
		var mtsf = new MetalsmithScaffold( config );
		mtsf.run( function ( err ) {
			expect( err ).to.not.exist;
			done();
		} )
	} );

} );
