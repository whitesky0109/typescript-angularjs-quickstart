// Import dependencies
const path = require('path');
const merge = require('webpack-merge');
const WebpackCommon = require('./webpack.common');

const devServer = {
  contentBase: path.join(__dirname, '../dist'),
  host: 'localhost',
  port: 3333,
  publicPath: "/",
};

const WebpackConfig = {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer,
  watch: true,
};

WebpackConfig.mode = 'development';

module.exports = merge(WebpackCommon, WebpackConfig);
