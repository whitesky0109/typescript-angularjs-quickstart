// Import dependencies
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackCommon = require('./webpack.common');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true,
  }),
];

const WebpackConfig = {
  plugins,
};

// Merge and export WebpackConfig module
module.exports = merge(WebpackCommon, WebpackConfig);
