"use strict";

var chai = require("chai");
var expect = chai.expect;
var MetalsmithScaffold = require("./../index");

describe( "", function () {

	it( "runs", function ( done ) {
		var mtsf =  new MetalsmithScaffold( require("./config.js"));
		mtsf.run( function () {
			done();
		})
	} );

} );
