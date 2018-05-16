'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKETIO_DEVOUR_URI: '"https://pocemploi.team-pdf.eu/devour"',
  SOCKETIO_COGNITIVE_URI: '"https://pocemploi.team-pdf.eu/cognitive"'
})
