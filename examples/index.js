'use strict';

var isColor = require( './../lib' );

console.log( isColor( 'ffffff' ) );
// returns true

console.log( isColor( '000000' ) );
// returns true

console.log( isColor( 'e0e0e0' ) );
// returns true

console.log( isColor( 'E0F44A' ) );
// returns true

console.log( isColor( 'E0f44B' ) );
// returns true

console.log( isColor( 'FFF' ) );
// returns false

console.log( isColor( 'FFFFFF', 'shorthand' ) );
// returns false

console.log( isColor( 'FFF', 'shorthand' ) );
// returns true

console.log( isColor( 'FFFFFF', 'either' ) );
// returns true

console.log( isColor( 'fff', 'either' ) );
// returns true

console.log( isColor( '#ffffff' ) );
// returns false
