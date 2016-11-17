import React, { Component } from 'react'


export default class MainPage extends Component {

    render(){
        return(
            <div className = 'main-page'>
                <section className='main-page-header'>
                    <div className='blurb'>Everyone is so nice on the internet...</div>
                  <img src='https://s3-us-west-2.amazonaws.com/eseokonofua/images/IMG_0509.jpg'/>
                </section>
                <section id='bio'>
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
                <section className='my-face'>
                  <div></div>
                  <img src="https://s3-us-west-2.amazonaws.com/eseokonofua/images/headshot.jpg"></img>
                </section>
                <section style={{backgroundColor:'#f6bd9d'}}></section>
                <section style={{backgroundColor:'#fc8b82'}}></section>
                <section className = 'footer'>
                    <a href="#">Github</a>
                    <a href="#">Codepen</a>

                    <a href ="#">Insta</a>
                    <a href="#">LinkedIn</a>
                </section>
            </div>
        )
    }
}
