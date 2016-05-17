# braille-pattern-cli-loading-indicator [![CircleCI](https://circleci.com/gh/6/braille-pattern-cli-loading-indicator.svg?style=svg)](https://circleci.com/gh/6/braille-pattern-cli-loading-indicator) [![NPM Version](http://img.shields.io/npm/v/braille-pattern-cli-loading-indicator.svg?style=flat)](https://www.npmjs.org/package/braille-pattern-cli-loading-indicator)

Command line loading indicator using Unicode braille patterns (based on Heroku CLI).

`size: 'large'` with static colors ([see example code](https://github.com/6/braille-pattern-cli-loading-indicator/blob/master/examples/colors.js)):

<img src="https://raw.githubusercontent.com/6/braille-pattern-cli-loading-indicator/master/examples/sample.gif" height="24">

`size: 'small'` with multiple colors ([see example code](https://github.com/6/braille-pattern-cli-loading-indicator/blob/master/examples/rainbow.js)):

<img src="https://raw.githubusercontent.com/6/braille-pattern-cli-loading-indicator/master/examples/sample2.gif" height="24">

# usage

- Use `start()` and `stop()` to enable or disable the loading indicator.
- Optionally provide a custom `format` function to add text or colors for the loading indicator.

```javascript
'use strict'
const LoadingIndicator = require('braille-pattern-cli-loading-indicator')

let loadingIndicator = new LoadingIndicator({
  size: 'large',
  format: function (pattern) {
    return 'charging plasma cannon ' + pattern
  }
})

loadingIndicator.start()

setTimeout(function () {
  loadingIndicator.stop()
  console.log('done 💥')
}, 5000)
```

# credits

heavily inspired by [heroku cli](https://github.com/heroku/heroku)
