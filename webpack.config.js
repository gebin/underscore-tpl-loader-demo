
// raw-loader
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{
		       test: /\.tpl$/,
		       use: 'raw-loader'
		    }
		]
	}, 
	plugins: [
		new HtmlWebpackPlugin(), 
	]
};

// ejs-loader
// var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
// 	entry: './index.js',
// 	output: {
// 		filename: 'bundle.js'
// 	},
// 	module: {
// 		loaders:[ 
// 			{ 
// 				test: /\.tpl$/, 
// 				loader: 'ejs-loader?variable=data'
// 			},
// 		]
// 	}, 
// 	plugins: [
// 		// 
// 		new HtmlWebpackPlugin(),
// 		// 
// 	    new webpack.ProvidePlugin({
// 	        _: "underscore"
// 	    })
// 	]
// };