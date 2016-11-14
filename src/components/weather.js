import React, { Component } from 'react'

export default class Weather extends Component{
    constructor(props){
        super(props);

    }

    render(){

        if(this.props.weather){
            return (
              <span data-temp={this.props.weather.main.temp+'\xB0'+'C'}
                className='weather'>
                <i alt='weather'
                style={{color:'aqua',marginLeft:'8px',position:'relative',top:'4px'}} className='weather sway fa fa-moon-o fa-lg'></i>
              </span>

            )

        }
        else return <span></span>

    }
}
