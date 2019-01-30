const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge.smart(common, {
	mode: 'production',
	entry: {
		'lib/react-jsonschema-form-material-theme.min': './src/index.js',
		'lib/react-jsonschema-form-material-theme': './src/index.js'
	},
	plugins: [new CleanWebpackPlugin(['build'], { beforeEmit: true })],
	resolve: {
		alias: {
			react: path.resolve(__dirname, './node_modules/react'),
			'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
			'@material-ui/core': path.resolve(__dirname, './node_modules/@material-ui/core'),
			'@material-ui/icons': path.resolve(__dirname, './node_modules/@material-ui/icons'),
			'@material-ui/lab': path.resolve(__dirname, './node_modules/@material-ui/lab'),
			'selfkey-ui': path.resolve(__dirname, './node_modules/selfkey-ui'),
			'react-jsonschema-form': path.resolve(__dirname, './node_modules/react-jsonschema-form'),
			'react-jsonschema-form/lib/util': path.resolve(__dirname, './node_modules/react-jsonschema-form/lib/util'),
			ajv: path.resolve(__dirname, './node_modules/ajv'),
			'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
		},
	},
	externals: [
		{
			react: {
				commonjs: 'react',
				commonjs2: 'react',
				amd: 'React',
				root: 'React',
			},
			'react-dom': {
				commonjs: 'react-dom',
				commonjs2: 'react-dom',
				amd: 'ReactDOM',
				root: 'ReactDOM',
			},
			'@material-ui/core': {
				commonjs: '@material-ui/core',
				commonjs2: '@material-ui/core',
				amd: '@material-ui/core',
				root: '@material-ui/core',
			},
			'@material-ui/icons': {
				commonjs: '@material-ui/icons',
				commonjs2: '@material-ui/icons',
				amd: '@material-ui/icons',
				root: '@material-ui/icons',
			},
			'@material-ui/lab': {
				commonjs: '@material-ui/lab',
				commonjs2: '@material-ui/lab',
				amd: '@material-ui/lab',
				root: '@material-ui/lab',
			},
			'selfkey-ui': {
				commonjs: 'selfkey-ui',
				commonjs2: 'selfkey-ui',
				amd: 'selfkey-ui',
				root: 'selfkey-ui',
			},
			'react-jsonschema-form': {
				commonjs: 'react-jsonschema-form',
				commonjs2: 'react-jsonschema-form',
				amd: 'react-jsonschema-form',
				root: 'react-jsonschema-form',
			},
			'react-jsonschema-form/lib/utils': {
				commonjs: 'react-jsonschema-form/lib/utils',
				commonjs2: 'react-jsonschema-form/lib/utils',
				amd: 'react-jsonschema-form/lib/util',
				root: 'react-jsonschema-form/lib/util',
			},
			ajv: {
				commonjs: 'ajv',
				commonjs2: 'ajv',
				amd: 'ajv',
				root: 'ajv',
			},
			'prop-types': {
				commonjs: 'prop-types',
				commonjs2: 'prop-types',
				amd: 'PropTypes',
				root: 'PropTypes',
			},
		}
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
