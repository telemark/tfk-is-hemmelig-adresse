[![Build Status](https://travis-ci.org/telemark/tfk-is-hemmelig-adresse.svg?branch=master)](https://travis-ci.org/telemark/tfk-is-hemmelig-adresse)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-is-hemmelig-adresse/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-is-hemmelig-adresse?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-is-hemmelig-adresse
Sjekker om en adresse er hemmelig enten via SPES-KD feltet fra dsf eller PrivateAddress.StreetAddress fra Public360

Modulen er først og fremst tilrettelagt for Telemark fylkeskommune, men kan sannsynligvis enkelt tilpasses også andre organisasjoner.

## Installasjon

Fra npm

```sh
$ npm install tfk-is-hemmelig-adresse
```

fra GitHub

```sh
$ git clone git@github.com:telemark/tfk-is-hemmelig-adresse.git
```

cd deretter inn i mappen og kjør setup

```sh
$ npm run setup
```

## Bruk

Send inn et adresseobject og få true eller false tilbake

```javascript
'use strict'

var isHemmelig = require('tfk-is-hemmelig-adresse')
var address1 = {
  PrivateAddress: {
    StreetAddress: 'Snippestadvegen 28',
  }
}
var address2 = {
  PrivateAddress: {
    StreetAddress: '<HEMMELIG ADRESSE>',
  }
}
var address3 = {
  'SPES-KD': '0'
}
var address4 = {
  'SPES-KD': '4'
}
var address5 = {
  'SPES-KD': '6'
}
var address6 = {
  'SPES-KD': '7'
}

console.log(isHemmelig(address1)) //=> false
console.log(isHemmelig(address2)) //=> true
console.log(isHemmelig(address3)) //=> false
console.log(isHemmelig(address4)) //=> true
console.log(isHemmelig(address5)) //=> true
console.log(isHemmelig(address6)) //=> true

```

## Lisens
[MIT](LICENSE)