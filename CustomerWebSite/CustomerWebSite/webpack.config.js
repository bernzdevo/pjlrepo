var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './scripts/addCustomers.js',
        './scripts/chat.js',
        './scripts/getCustomers.js',
        './scripts/samples.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundled.bundle.js',
    }
}