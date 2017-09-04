import fetch from 'isomorphic-fetch'

function setWebsiteData(data){
  return {
    type: 'SET_WEBSITE_DATA',
    data
  }
}

function getWebsiteData(){
  return function(dispatch){
    return fetch('/api/website').then(res => res.json())
    .then(resJson => {
      dispatch(setWebsiteData(resJson));
      return Promise.resolve(resJson);
    })
    .catch(err =>{ 
      console.error("Error getting website data:", err)
      return Promise.reject(err);
    });
  }
}

function setWeather(weather){
  return {
    type:'SET_WEATHER',
    weather
  }
}

function getWeather(){
  return function(dispatch){
    return fetch('/api/weather').then(res => res.json())
    .then(resJson =>{
      var data = JSON.parse(resJson);
      dispatch(setWeather(data));
      return Promise.resolve(data);
    })
    .catch(err=>{
      console.error("Error getting weather data:", err)
      return Promise.reject(err);
    });
  }
}

function setMoment(moment){
  return {
    type:'SET_MOMENT',
    moment
  }
}

export {
  getWebsiteData,
  getWeather,
  setMoment
}
