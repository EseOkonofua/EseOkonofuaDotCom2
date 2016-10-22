import React, { Component } from 'react'

import ActivityTracker from '../components/activitytracker'

export default class Home extends Component {

  render(){
    return(
        <div className='container'>
            <ActivityTracker/>
            {this.props.children}
        </div>
    )
  }
}
