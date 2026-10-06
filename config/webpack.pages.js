const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/rps-game.html', './rps-game.html', ['index','rpsgame']),
  createPages('./src/pages/homework-game.html', './homework-game.html', ['index','homeworkgame']),
  createPages('./src/pages/rps-react.html', './rps-react.html', ['index','rpsreact']),
  createPages('./src/pages/hw_react.html', './hw_react.html', ['index','hwreact']),
]

module.exports = htmlPages
