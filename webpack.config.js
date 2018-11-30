const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        'lib/react-jsonschema-form-material-theme.min': './src/index.js',
        'playground/app': './playground/app.js'
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
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build/playground'),
        compress: true,
        port: 9000
      }
}