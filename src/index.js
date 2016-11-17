import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'
import {Provider} from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import moment from 'moment'

import allReducers from './reducers'

import Home from './containers/home'
import MainPage from './containers/mainPage'
import Contact from './components/contact'

//SERVER ACTIONS
import {getWeather,setMoment} from './actions'

require('./styles.scss');

const store = createStore(allReducers, applyMiddleware(thunk));
var dispatchMoment = ()=> store.dispatch(setMoment(moment()));
setInterval(dispatchMoment,100);
store.dispatch(getWeather()).then(()=>{
  console.log("Received weather from api",store.getState());
});

render(
  <Provider store={store}>
    <Router history = {browserHistory}>
      <Route path='/' component= {Home}>
        <IndexRoute component = {MainPage} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
