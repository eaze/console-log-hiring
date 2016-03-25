'use strict'

var test = require('tape')
var consoleLogHiring = require('./')

test(function (t) {
  t.doesNotThrow(consoleLogHiring)
  t.end()
})
