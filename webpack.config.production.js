'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './client/index',
  ],
  output: {
    path: path.join(__dirname, '.build/dist'),
    filename: 'bundle.js',
    publicPath: '/.build',
  },
  plugins: [
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify('/api'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: [
        path.join(__dirname, 'client'),
        path.join(__dirname, 'common/logic'),
      ],
    }, {
      test: /\.json$/,
      use: ['json-loader'],
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  node: {
    fs: 'empty',
  },
};
