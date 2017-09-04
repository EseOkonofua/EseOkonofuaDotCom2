import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    var linkedin = this.props.linkedin ? <a title='My LinkedIn Profile' target='_blank' href={this.props.linkedin}><i className='fa fa-linkedin-square fa-lg'></i></a> : null;
    var github = this.props.github ? <a title= 'My Github Profile' target='_blank' href={this.props.github}><i className='fa fa-github-alt fa-lg'></i></a> : null;
    
    return (
      <footer style={{color:'black'}}>
        {linkedin}
        {github}
        <br/>
        <a className = 'email' href={`mailto:${this.props.email}`}><i>{this.props.email}</i></a>
        <div className='copyright'>&copy; 2017 Ese Okonofua</div>
      </footer>
    )
  }
}