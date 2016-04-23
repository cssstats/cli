#!/usr/bin/env node

'use strict'

const meow = require('meow')
const cssstats = require('cssstats')
const read = require('read-file-stdin')
const write = require('write-file-stdout')

const cli = meow(`
  Usage
    $ cssstats <input.css> <output.scss>

  Example
    $ cssstats --help
    $ cssstats input.css output.scss
    $ cssstats input.css > output.scss
    $ cssstats < input.css > output.scss
`)

const inputFile = cli.input[0]
const outputFile = cli.input[1]

read(inputFile, (err, buffer) => {
  if (err) {
    throw err
  }

  write(outputFile, JSON.stringify(cssstats(String(buffer))))
  process.exit(0)
})
