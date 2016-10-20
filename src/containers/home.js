import React, { Component } from 'react'

import ActivityTracker from '../components/activityTracker'
import MainPage from './mainPage'

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
