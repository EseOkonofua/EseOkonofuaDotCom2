import React, { Component } from 'react'

export default class Weather extends Component{
    constructor(props){
        super(props);

    }

    getStyle(){
      let className = "";
      let hour = this.props.moment.hour();
      let temp = this.props.weather.main.temp;


      if(hour >= 7 && hour <= 19) className+='weather rotate fa fa-sun-o fa-lg';
      else className += 'weather sway fa fa-moon-o fa-lg';

      if(temp < 13) className+= ' cool';
      else className+= ' hot';


      return className;
    }

    render(){

        if(this.props.weather){
            return (
              <span data-temp={this.props.weather.main.temp+'\xB0'+'C'}
                className='weather'>
                <i alt='weather'
                 className={this.getStyle()}></i>
              </span>

            )

        }
        else return <span></span>

    }
}
