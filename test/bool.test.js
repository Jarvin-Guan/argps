var should = require( 'should' );
var argp = require( '../' );
describe( 'bool test', function () {
  describe( 'not set value should be true', function () {
      it( 'parse to true in -', function () {
          var result = argp( [
            '-a','ab',
            '-b',''
          ] );
          result.b.should.equal( 'true' );
      } );
      
      it( 'parse to true in _', function () {
          var result = argp( [
            '-a','ab',
            '-b','gg',
            'ff','dd'
          ] );
          result._[0].should.equal( 'ff' );
      } );
      
      it( 'parse to true in --', function () {
          var result = argp( [
            '--a','ab',
            '--b',
            '-ff','dd'
          ] );
          result.b.should.equal( 'true' );
      } );
    } );
} );