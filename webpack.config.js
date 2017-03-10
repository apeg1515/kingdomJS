const { resolve } = require('path')
const { getIfUtils } = require('webpack-config-utils')
const webpackValidator = require('webpack-validator')

module.exports = env => {
    const {ifProd, ifNotProd} = getIfUtils(env)
    const config = webpackValidator({})
}

