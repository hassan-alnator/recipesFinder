var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// list of libraries to split into a vendor package file
const VENDOR_LIBS = ['react', 'redux', 'react-redux', 'react-dom', 'react-router-redux'];

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),

        // dynamicly create bundle file with hashnames
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        // passing NODE_ENV to the UI
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // Dynamic js Files hashing
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        // adding script tags dynamicly to html template
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};
