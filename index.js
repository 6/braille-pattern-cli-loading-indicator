'use strict'

const readline = require('readline')
const ansi = require('ansi')

// Braille patterns from:
// http://symbolcodes.tlt.psu.edu/bylanguage/braillechart.html
const PATTERNS = {
  small: [
    '⠟',
    '⠯',
    '⠷',
    '⠾',
    '⠽',
    '⠻'
  ],
  large: [
    '⡿',
    '⣟',
    '⣯',
    '⣷',
    '⣾',
    '⣽',
    '⣻',
    '⢿'
  ]
}

function LoadingIndicator (attributes) {
  attributes = attributes || {}
  this.size = attributes.size || 'large'
  this.patterns = PATTERNS[this.size]
  this.interval = attributes.interval || 70
  this.text = attributes.text || ''
  this.color = attributes.color
  this.cursor = ansi(process.stdout)
}

LoadingIndicator.prototype.start = function () {
  this.readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  this.cursor.hide()
  if (this.color) {
    this.cursor.hex(this.color)
  }
  this.patternIndex = 0
  this._loadingInterval = setInterval(animate.bind(this), this.interval)
}

LoadingIndicator.prototype.stop = function () {
  resetLineAndCursor()
  this.cursor.reset()
  this.cursor.show()
  this.readlineInterface.close()
  if (this._loadingInterval) {
    clearInterval(this._loadingInterval)
    this._loadingInterval = null
  }
}

function animate () {
  resetLineAndCursor()
  this.readlineInterface.output.write(this.text + this.patterns[this.patternIndex])
  if (this.patternIndex < this.patterns.length - 1) {
    this.patternIndex++
  } else {
    this.patternIndex = 0
  }
}

function resetLineAndCursor () {
  readline.clearLine(process.stdout, 0)
  readline.cursorTo(process.stdout, 0)
}

module.exports = LoadingIndicator
