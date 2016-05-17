# braille-pattern-cli-loading-indicator [![CircleCI](https://circleci.com/gh/6/braille-pattern-cli-loading-indicator.svg?style=svg)](https://circleci.com/gh/6/braille-pattern-cli-loading-indicator) [![NPM Version](http://img.shields.io/npm/v/braille-pattern-cli-loading-indicator.svg?style=flat)](https://www.npmjs.org/package/braille-pattern-cli-loading-indicator)

Animated command line loading indicator using Unicode braille patterns (based on Heroku CLI).

<table>
  <thead>
    <tr>
      <th>size</th>
      <th>rotation</th>
      <th>preview</th>
      <th>sample code</th>
    </tr>
  </thead>
  <tr>
    <td>large</td>
    <td>cw</td>
    <td>
      <img src="https://raw.githubusercontent.com/6/braille-pattern-cli-loading-indicator/master/examples/sample.gif" height="24">
    </td>
    <td>
      <a href="https://github.com/6/braille-pattern-cli-loading-indicator/blob/master/examples/formatted.js">examples/formatted.js</a>
    </td>
  </tr>
  <tr>
    <td>small</td>
    <td>ccw</td>
    <td>
      <img src="https://raw.githubusercontent.com/6/braille-pattern-cli-loading-indicator/master/examples/sample2.gif" height="24">
    </td>
    <td>
      <a href="https://github.com/6/braille-pattern-cli-loading-indicator/blob/master/examples/formatted-multicolor.js">examples/formatted-multicolor.js</a>
    </td>
  </tr>
</table>

# usage

- Use `start()` and `stop()` to enable or disable the loading indicator.
- Optionally specify `rotation` as `cw` (clockwise) or `ccw` (counterclockwise)
- Optionally provide a custom `format` function to add text or colors for the loading indicator.

```javascript
'use strict'
const LoadingIndicator = require('braille-pattern-cli-loading-indicator')

let loadingIndicator = new LoadingIndicator({
  size: 'large',
  rotation: 'cw',
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

heavily inspired by [heroku cli](https://github.com/heroku/heroku) loading indicator
