const path = require('path');

module.exports = {
	target: 'web',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [path.resolve(__dirname, 'src/'), path.resolve(__dirname, 'playground/')],
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
			},
		],
	},
	resolve: {
		alias: {
			[path.resolve(__dirname, './node_modules/mime/types/other')]: path.resolve(
				__dirname,
				'./node_modules/mime/types/other.json'
			),
			[path.resolve(__dirname, './node_modules/mime/types/standard')]: path.resolve(
				__dirname,
				'./node_modules/mime/types/standard.json'
			),
		},
		extensions: ['.js', '.jsx', 'json'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/build/',
		library: 'reactJsonSchemaMaterialTheme',
		libraryTarget: 'umd',
	},
};
