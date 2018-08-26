'use strict'

const { remote } = require('electron')

if (remote) {
  module.exports = remote.screen
} else {
  throw new Error('screen requires remote, which is not enabled')
}
