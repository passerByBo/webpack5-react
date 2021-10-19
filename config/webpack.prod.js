/**
 * 生产环境
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common')
exports.default = merge(common, {
    mode: 'production'
})