import fetch from 'isomorphic-fetch'

function setWebsiteData(data){
  return {
    type: 'SET_WEBSITE_DATA',
    data
  }
}

function getWebsiteData(){
  return function(dispatch){
    return fetch('/website.json').then(res => res.json())
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
    return fetch('https://weather-fetcher.azurewebsites.net/api/HttpTriggerCSharp1?code=NNt7kLiTD2cwJad5/Ugh/DxDTn1dQsVS4ExxrCwgYtNa3w/KDY36kQ==').then(res => res.json())
    .then(resJson =>{
      dispatch(setWeather(resJson));
      return Promise.resolve(resJson);
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
