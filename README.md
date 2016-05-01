# argps

[![Join the chat at https://gitter.im/Jarvin-Guan/argps](https://badges.gitter.im/Jarvin-Guan/argps.svg)](https://gitter.im/Jarvin-Guan/argps?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build](https://travis-ci.org/Jarvin-Guan/argps.svg?branch=master)](https://travis-ci.org/Jarvin-Guan/argps/)  [![Coverage Status](https://coveralls.io/repos/github/Jarvin-Guan/argps/badge.svg?branch=master)](https://coveralls.io/github/Jarvin-Guan/argps?branch=master) 
[![DUB](https://img.shields.io/dub/dd/vibe-d.svg?maxAge=2592000)](https://www.npmjs.com/package/argps)

####Aim : Parsing parameters automatically     node.js
####Prower by _Regex_

CI Node version Passed
* 0.12
* 4
* 5
* iojs

## Installation
```
$ npm install argps --save
```

##Demo

```
$ git clone https://github.com/Jarvin-Guan/argps.git
$ cd argps
$ node ./demo/test.js -a 1 -b 2
    { _: [ '' ], a: '1', b: '2' }
  node ./demo/test.js -a 1 -a 2 -b -c --d --e 4
    { _: [ '' ],a: [ '1', '2' ],b: 'true',c: 'true',d: 'true',e: '4' }
  node ./demo/test.js v d k -a 1 gg dd -b
    { _: [ 'v', 'd', 'k', 'gg', 'dd' ], a: '1', b: 'true' }
```

##How to use in your project?
```
const argps = require( 'argps');
var argObject = argps(process.argv.slice(2));
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
 
