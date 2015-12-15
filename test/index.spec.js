"use strict";

var chai = require("chai");
var expect = chai.expect;
var MetalsmithScaffold = require("./../index");

describe( "whatever test", function () {

	it( "runs", function ( done ) {
		var mtsf =  new MetalsmithScaffold( require("./config.js"));
		mtsf.run( function ( err ) {
			expect (err).to.not.exist;
			done();
		})
	} );

} );
