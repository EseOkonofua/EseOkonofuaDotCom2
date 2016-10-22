import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import allReducers from './reducers'

import Home from './containers/home'
import MainPage from './containers/mainpage'
import Contact from './components/contact'


require('./styles.scss');

const store = createStore(allReducers);

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
