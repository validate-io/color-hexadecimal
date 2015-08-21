Hexadecimal Color
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a hexadecimal color.


## Installation

``` bash
$ npm install validate.io-color-hexadecimal
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isHexColor = require( 'validate.io-color-hexadecimal' );
```

#### isHexColor( value[, mode] )

Validates if a value is a hexadecimal color.

``` javascript
var bool = isHexColor( 'ffffff' );
// returns true
```

To validate for shorthand, full, or either shorthand or full hexadecimal colors, set the `mode` option.

*	__full__: (*default*) validate for a 6-digit hexadecimal color.
*	__shorthand__: validate for a shorthand (3-digit) hexadecimal color.
*	__either__: validate for either shorthand or full length hexadecimal colors.

``` javascript
var bool;

// Full length colors...
bool = isHexColor( 'ffffff', 'full' );
// returns true

bool = isHexColor( 'fff', 'full' );
// returns false


// Shorthand colors...
bool = isHexColor( 'ffffff', 'shorthand' );
// returns false

bool = isHexColor( 'fff', 'shorthand' );
// returns true


// Either shorthand or full length colors...
bool = isHexColor( 'ffffff', 'either' );
// returns true

bool = isHexColor( 'fff', 'either' );
// returns true
```


## Examples

``` javascript
var isHexColor = require( 'validate.io-color-hexadecimal' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-color-hexadecimal.svg
[npm-url]: https://npmjs.org/package/validate.io-color-hexadecimal

[travis-image]: http://img.shields.io/travis/validate-io/color-hexadecimal/master.svg
[travis-url]: https://travis-ci.org/validate-io/color-hexadecimal

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/color-hexadecimal/master.svg
[codecov-url]: https://codecov.io/github/validate-io/color-hexadecimal?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/color-hexadecimal.svg
[dependencies-url]: https://david-dm.org/validate-io/color-hexadecimal

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/color-hexadecimal.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/color-hexadecimal

[github-issues-image]: http://img.shields.io/github/issues/validate-io/color-hexadecimal.svg
[github-issues-url]: https://github.com/validate-io/color-hexadecimal/issues
