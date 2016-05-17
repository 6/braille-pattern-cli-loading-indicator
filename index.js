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
  let self = this
  this.readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  let i = 0
  this.cursor.hide()
  if (this.color) {
    this.cursor.hex(this.color)
  }

  this._loadingInterval = setInterval(function () {
    resetLineAndCursor()
    self.readlineInterface.output.write(self.text + self.patterns[i])

    if (i < self.patterns.length - 1) {
      i++
    } else {
      i = 0
    }
  }, this.interval)
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

function resetLineAndCursor () {
  readline.clearLine(process.stdout, 0)
  readline.cursorTo(process.stdout, 0)
}

module.exports = LoadingIndicator
