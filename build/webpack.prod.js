const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common');
const utils = require('./utils')

module.exports = merge(common, {
  output: {
    path: utils.resolve('dist'),
    filename: utils.staticPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.staticPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'env.PRODUCTION': "true",
    }),
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.staticPath('style/[name][hash].css'),
      chunkFilename: utils.staticPath('style/[id].css'),
    })
  ]
})