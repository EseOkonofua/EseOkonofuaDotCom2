import {combineReducers} from 'redux'
import moment from 'moment'

const allReducers = combineReducers({
  moment:(state=moment(),action)=>{
    switch(action.type){
      case 'SET_MOMENT':
        return action.moment
    }
    return state
  },
  website_data:(state=null, action)=>{
    switch(action.type){
      case 'SET_WEBSITE_DATA':
        return action.data
    }
    return state
  },
  weather:(state=null,action)=>{
    switch(action.type){
      case 'SET_WEATHER':
        return action.weather
    }
    return state
  }
});

export default allReducers
