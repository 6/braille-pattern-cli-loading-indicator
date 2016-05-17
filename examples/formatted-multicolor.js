'use strict'

const chalk = require('chalk')
const LoadingIndicator = require('../index')

const colors = [
  'cyan',
  'blue',
  'magenta',
  'red',
  'yellow',
  'yellow'
]

let loadingIndicator = new LoadingIndicator({
  size: 'small',
  rotation: 'ccw',
  format: function (pattern, i) {
    let color = colors[i]
    return chalk.blue('➜') + ' connecting ' + chalk[color](pattern)
  }
})
loadingIndicator.start()

setTimeout(function () {
  loadingIndicator.stop()
  console.log(chalk.green('✓') + ' done')
}, 5000)
