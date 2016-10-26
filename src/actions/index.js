
function setWeather(weather){
  return {
    type:'SET_WEATHER',
    weather
  }
}

function getWeather(){
  return function(dispatch){
    return fetch('/api/weather').then(res=>res.json())
    .then(resJson =>{
          var data = JSON.parse(resJson);
          dispatch(setWeather(data));
    })
    .catch(err=>console.log("Error getting weather data:",err));
  }
}

function setMoment(moment){
  return {
    type:'SET_MOMENT',
    moment
  }
}

export {
  getWeather,
  setMoment
}
