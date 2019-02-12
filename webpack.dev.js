const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	entry: {
		'playground/app': './playground/app.js',
		'lib/react-jsonschema-form-material-theme': './src/index.js',
	},
	mode: 'development',
	devtool: 'inline-source-map',
	plugins: [
		new CopyWebpackPlugin([{ from: 'playground/index.html', to: 'playground/index.html' }]),
		new webpack.HotModuleReplacementPlugin({}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'build/playground'),
		watchContentBase: true,
		compress: true,
		port: 9000,
		hot: true,
	},
});
