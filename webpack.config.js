const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        'playground/app': './playground/app.js',
        'lib/react-jsonschema-form-material-theme.min': './src/index.js'
        
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'playground/index.html', to: 'playground/index.html' }
        ]),
        new webpack.HotModuleReplacementPlugin({
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build/playground'),
        watchContentBase: true,
        compress: true,
        port: 9000,
        hot: true
      }
}
