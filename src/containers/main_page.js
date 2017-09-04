import React, { Component } from 'react'
import { connect } from 'react-redux'

import Bio from '../components/bio'
import Projects from '../components/projects'
import Footer from '../components/footer'

class MainPage extends Component {
    render(){
      return(
        <div ref='MainPage' className = 'main-page'>
          <section ref='Top' className='main-page-header'>
            <div className='blurb'>{this.props.website_data.cover.blurb}</div>
            <img src={this.props.website_data.cover.image_url}/>
          </section>
          <Bio {...this.props.website_data.bio} />
          <Projects projects = {this.props.website_data.projects} />
          <Footer {...this.props.website_data.personal}/>
        </div>
      )
    }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(MainPage)