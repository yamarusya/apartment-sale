const path = require('path');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebapckPlugin({
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebapckPlugin({
      filename: 'card.html',
      chunks: ['card']
    })
  ]
};