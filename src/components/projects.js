import React, { Component } from 'react'

export default class Projects extends Component {
  render(){
    var projects = this.props.projects.map((project, index) => {
      var github = project.github ?
      <a target='_blank' title={`${project.title} on GitHub`} href={project.github}><i className='fa fa-github fa-lg'></i></a> : null;

      var links = project.links.map((link, index) => <a key={index} target='_blank' href={link.href}><i className='fa fa-link'></i> {link.title}</a> )
       
      return (
        <div key={index} className='project'>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div>
            {github}
            {links}
          </div>
        </div>
      )
    });

    return (
      <section id='projects' className = 'text'>
        <h1>Projects</h1>
        {projects}
      </section>
    )
  }
}