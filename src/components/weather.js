import React, { Component } from 'react'

export default class Weather extends Component{
    constructor(){
        super();
        this.state = {
            temp:'',
            desc:'',
            country:'',
            city:''
        }
    }

    componentDidMount(){
        fetch('/api/weather').then(res=>{
            if(res.ok)
                return res.json()
            else
                console.error("Json response from weather call was not ok");
        })
        .then(resJson =>{
            var data = JSON.parse(resJson);
            this.setState({
                temp:data.main.temp,
                desc:data.weather[0].description,
                country:data.sys.country,
                city:data.name
            })
        })
    }
    render(){

        return (
          <span data-temp={this.state.temp+'\xB0'+'C'}
          data-desc={this.state.desc}
          data-country={this.state.country}
          data-city={this.state.city} className='weather'>
            <i alt='weather'
            style={{color:'aqua',marginLeft:'8px',position:'relative',top:'4px'}} className='weather sway fa fa-moon-o fa-lg'>

            </i>
          </span>

        )

    }
}
