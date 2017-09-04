import React, { Component } from 'react'

export default class Bio extends Component {
  render(){
    var body = this.props.body.map((data, index) => {
      return (
        <p key={index} dangerouslySetInnerHTML={{__html: data}}></p>
      )
    })
    
    return (
      <section id='bio' className = 'text'>
        <h1>{this.props.header}</h1>
        {body}
      </section>
    )
  }
}