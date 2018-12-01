var path = require('path');

module.exports = {
  resolve:{
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ]
  },
  mode: 'development',
  entry: ['babel-polyfill','./lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/, exclude: /node_modules/,use: 'babel-loader'
      }

    ]
  }
};