const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')

module.exports = merge(base, {
    target: 'node',
    entry: './server/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
})