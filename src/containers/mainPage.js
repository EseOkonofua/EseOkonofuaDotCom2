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
                    <h2>Yo!</h2>
                    <p>
                        I'm a biomedical computing student at Queen's University. Obsessed with the internet and in love with technology.
                    </p>
                </section>
                <section style={{backgroundColor:'#6f5468'}}></section>
                <section style={{backgroundColor:'#f6bd9d'}}></section>
                <section style={{backgroundColor:'#fc8b82'}}></section>

            </div>
        )
    }
}
