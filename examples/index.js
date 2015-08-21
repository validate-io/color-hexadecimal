'use strict';

var isHexColor = require( './../lib' );

console.log( isHexColor( 'ffffff' ) );
// returns true

console.log( isHexColor( '000000' ) );
// returns true

console.log( isHexColor( 'e0e0e0' ) );
// returns true

console.log( isHexColor( 'E0F44A' ) );
// returns true

console.log( isHexColor( 'E0f44B' ) );
// returns true

console.log( isHexColor( 'FFF' ) );
// returns false

console.log( isHexColor( 'FFFFFF', 'shorthand' ) );
// returns false

console.log( isHexColor( 'FFF', 'shorthand' ) );
// returns true

console.log( isHexColor( 'FFFFFF', 'either' ) );
// returns true

console.log( isHexColor( 'fff', 'either' ) );
// returns true

console.log( isHexColor( '#ffffff' ) );
// returns false
