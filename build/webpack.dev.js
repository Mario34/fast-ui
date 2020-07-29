const webpack = require('webpack')
const { merge } = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common')
const utils = require('./utils')

const devServer = {
  contentBase: utils.resolve('dist'),
  clientLogLevel: 'warning',
  port: 2020,
  hot: true,
  host: '0.0.0.0',
  compress: true,
  open: false,
  quiet: true,
  overlay: {
    /**
     * Shows a full-screen overlay in the browser
     * when there are compiler errors or warnings.
    */
    warnings: true,
    errors: true
  },
  proxy: {
    /**
     * this is proxy config
    */
  },
  historyApiFallback: true
}

module.exports = merge(common, {
  mode: 'development',
  devServer,
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'env.PRODUCTION': 'false'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`The demo app running at:\n\n - Local:   http://localhost:${devServer.port}\n - Network: http://${utils.localAddress()}:${devServer.port}`]
      },
      clearConsole: true
    })
  ]
})
