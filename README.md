[![Build Status](https://travis-ci.org/telemark/tfk-is-hemmelig-adresse.svg?branch=master)](https://travis-ci.org/telemark/tfk-is-hemmelig-adresse)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-is-hemmelig-adresse/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-is-hemmelig-adresse?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-is-hemmelig-adresse.svg)](https://greenkeeper.io/)

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

```JavaScript
'use strict'

const isHemmelig = require('tfk-is-hemmelig-adresse')
const address1 = {
  PrivateAddress: {
    StreetAddress: 'Snippestadvegen 28',
  }
}
const address2 = {
  PrivateAddress: {
    StreetAddress: '<HEMMELIG ADRESSE>',
  }
}
const address3 = {
  'SPES-KD': '0'
}
const address4 = {
  'SPES-KD': '4'
}
const address5 = {
  'SPES-KD': '6'
}
const address6 = {
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

![Robohash image of tfk-is-hemmelig-adresse](https://robots.kebabstudios.party/tfk-is-hemmelig-adresse.png "Robohash image of tfk-is-hemmelig-adresse")