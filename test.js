'use strict'

const LoadingIndicator = require('./index')
let loadingIndicator = new LoadingIndicator({
  size: 'large',
  text: 'connecting ',
  color: '#33cc33'
})

loadingIndicator.start()
setTimeout(function () {
  loadingIndicator.stop()
  console.log('Done.')
}, 5000)
