const merge = require('webpack-merge')
const base = require('./webpack.base')
const path = require('path')

module.exports = merge(base, {
    entry: './client/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
})