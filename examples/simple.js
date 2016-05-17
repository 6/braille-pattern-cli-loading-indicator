'use strict'

const LoadingIndicator = require('../index')

let loadingIndicator = new LoadingIndicator({size: 'large'})
loadingIndicator.start()

setTimeout(function () {
  loadingIndicator.stop()
}, 5000)
