const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const utils = require('./utils')

module.exports = {
  mode: 'production',
  entry: utils.resolve('demo/index.ts'),
  output: {
    path: utils.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    jsonpFunction: 'myWebpackJsonp',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(js|tsx|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { cacheDirectory: true },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: utils.staticPath('images/[name][hash].[ext]'),
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|woff2|svg|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: utils.staticPath('fonts/[name][hash].[ext]'),
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            // options: {
            //   compilerOptions: {
            //     preserveWhitespace: false
            //   }
            // }
          },
          {
            loader: utils.resolve('build/md-loader/index.js')
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      'vue': '@vue/runtime-dom',
      '@': process.cwd(),
    },
    extensions: ['.tsx', '.ts', '.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: utils.resolve('demo/index.html'),
      filename: utils.resolve('dist/index.html'),
      favicon: utils.resolve('demo/favicon.ico'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      templateParameters: {
        NODE_ENV: process.env.NODE_ENV
      }
    })
  ]
}
