import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActivityTracker from '../components/activityTracker'

class Home extends Component {

  render(){
    return(
        <div className='container'>
            <ActivityTracker weather={this.props.weather} moment={this.props.moment} />
            {this.props.children}
        </div>
    )
  }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Home)
