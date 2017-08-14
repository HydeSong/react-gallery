'use strict';
require('core-js/fn/object/assign');
const webpack=require('webpack');
const WebpackDevServer=require('webpack-dev-server');
const config=require('./webpack.config');
const open=require('open');

console.log(config.port);

new WebpackDevServer(webpack(config),config.devServer)
.listen(config.port,'localhost',function(err){
	if(err){
		console.log(err);	
	}
	console.log('Listening at localhost:' + config.port);
	console.log('Opening your system browser...');
	open('http:localhost:'+config.port+'/webpack-dev-server/');
})

