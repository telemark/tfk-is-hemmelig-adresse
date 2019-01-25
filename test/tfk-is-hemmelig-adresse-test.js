var tap = require('tap')
var isSecretAddress = require('../index')

tap.throws(
  function () {
    isSecretAddress()
  },
  { message: 'Missing required input: address object' },
  'Throws if address not supplied'
)

tap.test('It returns true from 360 if hemmelig', function (test) {
  var address = require('./data/360-secret-true.json')
  var expected = true
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address is secret')
  test.done()
})

tap.test('It returns false from 360 if not hemmelig', function (test) {
  var address = require('./data/360-secret-false.json')
  var expected = false
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address from 360 is not secret')
  test.done()
})

tap.test('It returns true from dsf if SPES-KD 4', function (test) {
  var address = require('./data/dsf-secret-4.json')
  var expected = true
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address is secret')
  test.done()
})

tap.test('It returns true from dsf if SPES-KD 6', function (test) {
  var address = require('./data/dsf-secret-6.json')
  var expected = true
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address is secret')
  test.done()
})

tap.test('It returns true from dsf if SPES-KD 7', function (test) {
  var address = require('./data/dsf-secret-7.json')
  var expected = true
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address is secret')
  test.done()
})

tap.test('It returns false from dsf if not hemmelig', function (test) {
  var address = require('./data/dsf-not-secret.json')
  var expected = false
  var secret = isSecretAddress(address)
  tap.equal(secret, expected, 'Address from dsf is not secret')
  test.done()
})
