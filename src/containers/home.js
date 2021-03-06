import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActivityTracker from '../components/activity_tracker'

class Home extends Component {
  render(){
    return(
      <div className='container'>
        <ActivityTracker {...this.props} />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Home)
