#!/usr/bin/env node

var dWebDHT = require('@dwdht/rpc')
var minimist = require('minimist')

var argv = minimist(process.argv, {
  alias: {port: 'p'},
  default: {port: 49737}
})

var node = dWebDHT({
  ephemeral: true
})

node.listen(Number(argv.port), function () {
  console.log('dWeb DHT Bootstrap Node Listening On %d', node.address().port)
})
