var http = require('http');
var fs = require('fs');
var path = require('path');
const OPEN_WEATHER_KEY = '651e2ad32f3d96c75c8c90751258aa83';
const CITY_ID = '6122091';
const CITY = 'Richmond Hill';
const COUNTRY = 'CAN';


//OPEN WEATHER API OPTIONS
var options = {
    host: 'api.openweathermap.org',
    path: `/data/2.5/weather?id=${CITY_ID}&APPID=${OPEN_WEATHER_KEY}&units=metric`
}

function updateWeather(){
    var weatherStream = fs.createWriteStream(path.resolve('./server/weather.json'));

    var req = http.request(options, function(res){
        console.log(`STATUS: ${res.statusCode}`);
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            console.log("Writing weather.json file");
            weatherStream.write(JSON.stringify(chunk))
            weatherStream.end();
        });

        res.on('end',function(){
            console.log(`Request has ended`);
        });
    });

    req.on('error', function(err){
        console.log(`Problem with the Weather API call ${err.message}`);
        weatherStream.end();
    });

    req.end();
}

module.exports = {
    updateWeather
}