var path = require('path');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./lib/components/Index.js'],
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