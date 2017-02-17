var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var express = require('express');
var app = express();


if(process.env.NODE_ENV !== 'production'){
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackConfig = require('../webpack.config.js');
	const compiler = webpack(webpackConfig);
}

app.use(express.static(path.resolve('public')));

if(process.env.NODE_ENV !== 'production'){
	app.use(webpackDevMiddleware(compiler, {
		noInfo: true, publicPath: webpackConfig.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler));
}


var updateWeather = require('./weather.js').updateWeather;
const UPDATE_INTERVAL = 30 * 60 * 1000;
updateWeather();
var update = setInterval(updateWeather, UPDATE_INTERVAL);


app.get('/api/weather', function(req,res){
	fs.readFile(path.resolve('./server/weather.json'),function(err,data){
		if(err) {
			console.log(`Error reading weather file: ${err}`);
			res.send(err);
		}
		else{
			res.json(JSON.parse(data));
		}
	});
});

app.get('*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});



var PORT = process.env.PORT || 80;

app.listen(PORT, function(){
	console.log("listening on port", PORT);
});
