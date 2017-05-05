var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './app/client/index.js'],
  output: {
    filename: 'public/js/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css?$/,
        loader: 'css-loader'
      },
    ]
  }
 };
