# arg-parser 

[![Join the chat at https://gitter.im/Jarvin-Guan/arg-parser](https://badges.gitter.im/Jarvin-Guan/arg-parser.svg)](https://gitter.im/Jarvin-Guan/arg-parser?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build](https://travis-ci.org/Jarvin-Guan/arg-parser.svg?branch=master)](https://travis-ci.org/Jarvin-Guan/arg-parser/)  [![Coverage Status](https://coveralls.io/repos/github/Jarvin-Guan/arg-parser/badge.svg?branch=master)](https://coveralls.io/github/Jarvin-Guan/arg-parser?branch=master)
####Aim : Parsing parameters automatically     node.js
####Prower by _Regex_

CI Node version Passed
* 0.12
* 4
* 5
* iojs

## Installation
```
$ npm install arg-praser --save
```

##Demo

```
$ node ./demo/test.js -a 1 -b 2
    { _: [ '' ], a: '1', b: '2' }
  node ./demo/test.js -a 1 -a 2 -b -c --d --e 4
    { _: [ '' ],a: [ '1', '2' ],b: 'true',c: 'true',d: 'true',e: '4' }
  node ./demo/test.js v d k -a 1 gg dd -b
    { _: [ 'v', 'd', 'k', 'gg', 'dd' ], a: '1', b: 'true' }
```

##How to use in your project?
```
const argp = require( 'argp');
var argObject = argp(process.argv.slice(2));
/* just like demo #1
  argObject:{
     _: [ '' ],
     a: '1',
     b: '2' }
*/
//argObject.a === '1'
```
 


## License

  MIT
 
