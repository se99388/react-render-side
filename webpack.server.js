const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/index.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'build') },
  externals: [webpackNodeExternals()] // in order to ignore all modules in node_modules folder
};

module.exports = merge(baseConfig, config);
