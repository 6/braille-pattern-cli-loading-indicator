"use strict";

const readline = require('readline');

// Braille patterns from:
// http://symbolcodes.tlt.psu.edu/bylanguage/braillechart.html
const PATTERNS = {
  small: [
    "⠟",
    "⠯",
    "⠷",
    "⠾",
    "⠽",
    "⠻"
  ],
  large: [
    "⡿",
    "⣟",
    "⣯",
    "⣷",
    "⣾",
    "⣽",
    "⣻",
    "⢿"
  ]
};

module.exports = function(size, interval) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const patterns = PATTERNS[size];
  interval = interval || 50;
  let i = 0;

  return setInterval(function() {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    readlineInterface.output.write(patterns[i]);
    if (i < patterns.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }, interval);
};
