var loading = require('./index')
var interval = loading('large')

setTimeout(function () {
  clearInterval(interval)
  console.log('Done.')
}, 5000)
