'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"https://superheroapi.com/api.php/"',
  TOOKEN: '"2081956611914942"'
})
