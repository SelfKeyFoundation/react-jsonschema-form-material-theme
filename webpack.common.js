const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
        'lib/react-jsonschema-form-material-theme': './src/index.js',
	},
	target: 'web',
	module: {
		rules: [
			{
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src/'), path.resolve(__dirname, 'playground/')],
                use: {
                    loader: "babel-loader"
                }
            },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
        extensions: ['.js', '.jsx']
    },  
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		library: 'reactJsonSchemaMaterialTheme',
		libraryTarget: 'umd'
	}
};
