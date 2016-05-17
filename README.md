# braille-pattern-cli-loading-indicator

Command line loading indicator using braille patterns (based on Heroku CLI)

<img src="https://raw.githubusercontent.com/6/braille-pattern-cli-loading-indicator/master/examples/sample.gif" height="24">

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
