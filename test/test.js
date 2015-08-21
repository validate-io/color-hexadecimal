/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	isColor = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-color-hexadecimal', function tests() {

	it( 'should export a function', function test() {
		expect( isColor ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided in invalid mode', function test() {
		var values = [
			'beep',
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				isColor( 'fff', value );
			};
		}
	});

	it( 'should positively validate', function test() {
		var values = [
			'ffffff',
			'000000',
			'474747',
			'E0E0E0',
			'e0E0Fb'
		];
		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isColor( values[i] ), values[i] );
		}
	});

	it( 'should positively validate when in full mode', function test() {
		var values = [
			'ffffff',
			'000000',
			'474747',
			'E0E0E0',
			'e0E0Fb'
		];
		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isColor( values[i], 'full' ), values[i] );
		}
	});

	it( 'should positively validate when in shorthand mode', function test() {
		var values = [
			'fff',
			'000',
			'474',
			'0E0',
			'0Fb'
		];
		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isColor( values[i], 'shorthand' ), values[i] );
		}
	});

	it( 'should positively validate when in either mode', function test() {
		var values = [
			'ffffff',
			'fff',
			'000000',
			'000',
			'474747',
			'474',
			'E0E0E0',
			'e0e',
			'e0E0Fb',
			'e0F'
		];
		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( isColor( values[i], 'either' ), values[i] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			'beep',
			5,
			NaN,
			true,
			null,
			undefined,
			[],
			{},
			function(){},
			'fffffff',
			'fffg',
			'0000000',
			'00G',
			'4747-7',
			'47G',
			'E0E0E',
			'e0ef',
			'#e0E0Fb',
			'#e0F',
			'###',
			'######'
		];
		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isColor( values[i] ), values[i] );
			assert.isFalse( isColor( values[i], 'full' ), values[i] );
			assert.isFalse( isColor( values[i], 'shorthand' ), values[i] );
			assert.isFalse( isColor( values[i], 'either' ), values[i] );
		}
	});

});
