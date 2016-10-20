import React, { Component } from 'react'

import ActivityTracker from '../components/activitytracker'
import MainPage from './mainpage'

export default class Home extends Component {

  render(){
    return(
        <div className='container'>
            <ActivityTracker/>
            <MainPage/>
        </div>
    )
  }
}
