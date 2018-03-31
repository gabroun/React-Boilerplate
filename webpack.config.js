const webpack = require('webpack');

module.exports = {
    // entry: './src/app.jsx',
    output: {
        path: __dirname,
        filename: './bundle.js'
    },
    resolve: {
        alias : {
        },
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};