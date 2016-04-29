var should = require( 'should' );
var argp = require( '../' );

describe( 'parse all test', function () {
  it( 'parse to true in -', function () {
          var result = argp( [
            '-a','ab',
            '-b','',
            '-c','d',
            '--e','fg',
            '-hij','kf','k3f',
          ] );
          result.a.should.equal( 'ab' );
          result.b.should.equal( 'true' );
          result.c.should.equal( 'd' );
          result.e.should.equal( 'fg' );
          result.h.should.equal( 'ij' );
        } );
} );