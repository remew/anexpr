'use strict';
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-flow', '@babel/preset-env'],
        },
      },
    ],
  },
};
