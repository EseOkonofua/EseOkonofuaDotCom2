import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActivityTracker from '../components/activitytracker'

class Home extends Component {

  render(){
      console.log(this.props);
    return(
        <div className='container'>
            <ActivityTracker />
            {this.props.children}
        </div>
    )
  }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Home)
