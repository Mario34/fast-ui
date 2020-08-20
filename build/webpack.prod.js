const webpack = require('webpack')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common');
const utils = require('./utils')

module.exports = merge(common, {
  output: {
    path: utils.resolve('dist'),
    filename: utils.staticPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.staticPath('js/[id].[chunkhash].js'),
    jsonpFunction: 'myWebpackJsonp',
    publicPath: './',
  },
  plugins: [
    new webpack.DefinePlugin({
      'env.PRODUCTION': "true",
    }),
    ...(process.env.ANALYZER ? [new BundleAnalyzerPlugin()] : []),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: utils.staticPath('style/[name][hash].css'),
      chunkFilename: utils.staticPath('style/[id].css'),
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
  ],
  externals: {
    'highlight.js': 'hljs'
  },
})
