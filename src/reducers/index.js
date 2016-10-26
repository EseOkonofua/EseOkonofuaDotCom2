import {combineReducers} from 'redux'


const allReducers = combineReducers({
    moment:(state=null,action)=>{
      switch(action.type){
        case 'SET_MOMENT':
          return action.moment
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
