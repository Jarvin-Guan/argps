var should = require( 'should' );
var argp = require( '../' );

describe( 'array test', function () {
  describe( 'not set value should be string', function () {
      it( 'one element', function () {
          var result = argp( [
            '-a','ab',
            '-b'
          ] );
          result.a.should.equal( 'ab' );
      } );
      
      it( 'two element', function () {
          var result = argp( [
            '-a','ab',
            '-b','gg',
            'ff','dd',
            '-a','cd'
          ] );
          result.a.should.have.length( 2 );
      } );
      
      it( 'three or more element', function () {
          var result = argp( [
            '-a','ab',
            '--b',
            '-a','cd',
            '-a','tt',
            '-a','c2d',
          ] );
          result.a.should.have.length( 4 );
      } );
    } );
} );