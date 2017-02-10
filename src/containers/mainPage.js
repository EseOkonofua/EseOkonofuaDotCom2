import React, { Component } from 'react'


export default class MainPage extends Component {

    //cool colour rgba(100, 130, 154, 0.498039)
    //

    render(){
        return(
            <div ref='MainPage' style={{position:'relative'}} className = 'main-page'>
            <section ref='Top' className='main-page-header'>
                    <div className='blurb'>Everyone is so nice on the internet...</div>
                  <img src='https://s3-us-west-2.amazonaws.com/eseokonofua/images/IMG_0509.jpg'/>
                </section>

                <section className='text' id='bio'>

                    <h1>Ese who?</h1>
                    <p>I'm a Biomedical computing student at Queen's University. Obsessed with the internet and in love with technology.</p>
                    <p>
                        Ever since I truly realized the vastness of the internet and what one is capable of achieving with it, I've been hooked <small>(and a little overwhelmed)</small>.
                        I'm always keen on learning about the latest in bleeding edge web tech whilst simultaneously working on personal projects that I find interesting.
                    </p>
                    <p>I'm on a new path to physical, mental and intellectual growth.</p>
                    <p>
                        Thus,<br/>
                        I have developed a newly born addiction to Medium articles that motivate and inspire me to be the best version of myself.
                        My other addictions include anime, fitness, food, hip-hop/trap music and gaming.
                    </p>
                </section>
                <section className='text' style={{backgroundColor:'#ff7a71' }}>
                  <h1>Projects</h1>
                  <div className='project'>
                      <h2>Dueler</h2>
                      <i>My fantasy/RPG take on RockPaperScissors, featuring enemies with unique AIs and awesome names. Created as a non-canvas HTML5 Web App and Game using React.js and Redux.</i>
                      <div><a className='proj-git-link' target='_blank' href="https://github.com/EseOkonofua/React-Dueler"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
                  </div>
                  <div  className='project'>
                      <h2>Warble</h2>
                      <i>In collaboration with one of my best friends, we sought out to hack together an Omegle/Chatroullette clone with social media elements; implemented with peer2peer networking and WebRTC.</i>
                      <div style={{marginTop:'5px'}}><a className='proj-git-link' href="rdueler.surge.sh"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
                  </div>
                  <div  className='project'>
                      <h2>uTunes</h2>
                      <i>A light weight desktop music application. With a custom tag feature and dynamic playlist generation; implemented in C++. </i>
                      <div><a className='proj-git-link' href="http://rdueler.surge.sh"><i className="fa fa-github fa-lg" aria-hidden="true"></i></a></div>
                  </div>
                </section>
                <footer style={{color:'black'}}>
                  <a title='My LinkedIn Profile' target='_blank' href='https://ca.linkedin.com/in/ese-okonofua-889ab9110'><i className='fa fa-linkedin-square fa-lg'></i></a>
                  <a title= 'My Github!' target='_blank' href='https://github.com/EseOkonofua'><i className='fa fa-github-alt fa-lg'></i></a><br/>
                  <a style={{marginTop:'3px'}} href='mailto:eseokonofua95@gmail.com'><i>eseokonofua95@gmail.com</i></a>
                  <div style={{color:'#ccc',bottom:'2px'}}>&copy; 2017 Ese Okonofua</div>
                </footer>


            </div>
        )
    }
}
