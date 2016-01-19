'use secret'

function isSecretAddress (address) {
  if (!address) {
    throw new Error('Missing required input: address object')
  }

  var secret = false
  var secretCodes = [4, 6, 7]

  if (address.PrivateAddress && address.PrivateAddress.StreetAddress && /hemmelig/i.test(address.PrivateAddress.StreetAddress)) {
    secret = true
  }

  if (address['SPES-KD'] && secretCodes.indexOf(parseInt(address['SPES-KD'], 10)) > -1) {
    secret = true
  }

  return secret
}

module.exports = isSecretAddress
