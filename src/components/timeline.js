import React, { Component } from 'react'

export default class Timeline extends Component{
  constructor(props){
    super(props);
    this.SECONDS_IN_A_DAY = 86400;

    this.timePercent = 0;

    console.log(props);

    this.getMomentSecond = this.getMomentSecond.bind(this);
    this.displayHours = this.displayHours.bind(this);

  }

  getMomentSecond(){
    let now = this.props.moment;

    let hour = now.hour() * 60 * 60;
    let minute = now.minute()*60;
    let second = now.second();

    let total = hour + minute + second;
    return total;
  }

  displayHours(){
    let now = this.props.moment;
    var time = [];
    var active = '';
    for(var i = 0; i < 24; i++){
      if(now.hour() >= i && now.hour() < (i+1)) active = 'active'
      else active = '';
      let hour = (
        <div key={i} style={{left:((i/23)*100) - 1 +'%' }} className = {'hours '+active} >{i}</div>
      )
      time.push(hour);
    }
    return time;
  }

  render(){
    this.timePercent = (this.getMomentSecond()/this.SECONDS_IN_A_DAY)*100;
    let dir = '';

    let hour = this.props.moment.hour();

    if(hour > 12) dir = {right:'0'}
    else dir = {left:'0'}

    return (
        <div>
            <div className='timeline'>
                <div style={{left:`${this.timePercent}%`}}  className='time-hand'>
                    <div style={dir} className ='clock'>{this.props.moment.format('h:mm:ss A')}</div>
                </div>
                {this.displayHours()}
            </div>
            <div className='clock2'>{this.props.moment.format('h:mm:ss A')}</div>

        </div>
    )
  }
}
