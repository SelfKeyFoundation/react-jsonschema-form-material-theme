const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	entry: {
		'playground/app': './playground/app.js',
	},
	mode: 'production',
	plugins: [
		new CopyWebpackPlugin([{ from: 'playground/index.html', to: 'playground/index.html' }])
	],
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				include: /\.min\.js$/,
			}),
		],
		nodeEnv: 'production',
	},
});
