// Import dependencies
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
  app: path.join(__dirname, '../src/index.ts'),
};

const output = {
  path: path.resolve(__dirname, '../dist'),
  filename: '[name].js',
  publicPath: './',
};


const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', ],
};

const modules = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      }
    }
  ],
};

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: `src/index.html`,
  }),
];


const WebpackConfig = {
  mode: 'production',
  entry,
  output,
  resolve,
  module: modules,
  plugins,
};

module.exports = WebpackConfig;
