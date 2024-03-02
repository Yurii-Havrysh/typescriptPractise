"use strict";

var path = require('path');

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "./dist/"
  },
  devServer: {
    "static": {
      directory: path.join(__dirname, '/')
    },
    port: 4545
  }
};