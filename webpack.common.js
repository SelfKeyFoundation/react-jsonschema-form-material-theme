const path = require('path');


module.exports = {
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
