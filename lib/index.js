'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	re = require( 'regex-color-hexadecimal' );


// IS COLOR //

/**
* FUNCTION: isColor( value[, mode] )
*	Validates if a value is a hexadecimal color.
*
* @param {*} value - value to validate
* @param {String} [mode] - specifies the validation mode
* @returns {Boolean} boolean indicating if a value is a hexadecimal color
*/
function isColor( value, mode ) {
	if ( !isString( value ) ) {
		return false;
	}
	if ( arguments.length === 1 || mode === 'full' ) {
		return re.test( value );
	}
	if ( mode === 'shorthand' ) {
		return re.shorthand.test( value );
	}
	if ( mode === 'either' ) {
		return re.either.test( value );
	}
	throw new TypeError( 'invalid input argument. Unrecognized/unsupported validation mode. Value: `' + mode + '`.' );
} // end FUNCTION isColor()


// EXPORTS //

module.exports = isColor;
