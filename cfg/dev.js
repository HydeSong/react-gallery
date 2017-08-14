const path=require('path');
const webpack=require('webpack');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const srcPath=path.join(__dirname,'/../src');
const port=8088;
const publicPath='/assets/';
const additionalPaths=[];

let config={
	port:port,
	debug:true,
	devtool:'eval',
	cache:true,
	entry: [
	    'webpack-dev-server/client?http://127.0.0.1:' + port,
	    'webpack/hot/only-dev-server',
	    './src/index'
	],
	output: {
	    path: path.join(__dirname, '/../dist/assets'),
	    filename: 'app.js',
	    publicPath:publicPath
	},
	devServer:{
		contentBase: './src/',
	    historyApiFallback: true,
	    hot: true,
	    port: port,
	    publicPath: publicPath,
	    noInfo: false
	},
	resolve:{
		extensions:['','.js','.jsx'],
		alias:{

		}
	},
	module:{
		preLoaders:[{
			test:/\.(js|jsx)$/,
			include:`${srcPath}`,
			loader:'eslint-loader'
		}],
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.json$/,
				loader:'json-loader'
			},
			{
		        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
		        loader: 'url-loader?limit=8192'
		    },
			// {
			// 	test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
			// 	loader: "file-loader?name=[name].[ext]"
			// },
			{
		        test: /\.(mp4|ogg|svg)$/,
		        loader: 'file-loader'
		    },
		    {
				test: /\.(js|jsx)$/,
				loader: 'react-hot!babel-loader',
				include: [].concat(
				    additionalPaths,
				    [ path.join(__dirname, '/../src') ]
				)
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new BowerWebpackPlugin({
			searchResolveModulesDirectories: false,
			excludes:/.*\.less/
		}),
		new webpack.ProvidePlugin({
			$:"jquery",
			jQuery:"jquery"
		})

	]
}
module.exports=config;















