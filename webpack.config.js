const { resolve } = require('path')
const { getIfUtils } = require('webpack-config-utils')
const webpackValidator = require('webpack-validator')

module.exports = env => {
    const {ifProd, ifNotProd} = getIfUtils(env)
    const config = webpackValidator({
      context: resolve('js'),
      entry: '',
      output: {
        filename: '',
        path: resolve('dist'),
        publicPath: '/dist/',
        pathinfo: ifNotProd()
      },
      devtool: ifProd('source-map', 'eval'),
      module: {
        preloaders: [
          {
            test: /\.jsx?$/,
            loader: ['eslint-loader'],
            exclude: /node_modules/
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            loader: ['babel-loader'],
            exclude: /node_modules/
          }
        ]
      }
    })
}

