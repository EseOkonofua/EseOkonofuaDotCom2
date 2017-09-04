import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import moment from 'moment'

import allReducers from './reducers'

import Home from './containers/home'
import MainPage from './containers/main_page'
import Contact from './components/contact'

//SERVER ACTIONS
import {getWebsiteData, getWeather, setMoment} from './actions'

require('./styles.scss');

const store = createStore(allReducers, applyMiddleware(thunk));
var dispatchMoment = ()=> store.dispatch(setMoment(moment()));

setInterval(dispatchMoment, 100);

var dataDfd = [
  store.dispatch(getWebsiteData()),
  store.dispatch(getWeather()) 
];

Promise.all(dataDfd).then(data => {
  render(
    <Provider store={store}>
      <Router history = {browserHistory}>
        <Route path='/' component= {Home}>
          <IndexRoute component = {MainPage} />
        </Route>
      </Router>
    </Provider>
  , document.getElementById('app'));
}).catch(reason =>{
  alert(reason);
  console.error("Website data failed to load:", reason);
})

