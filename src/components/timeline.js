import React, { Component } from 'react'
import moment from 'moment';

export default class Timeline extends Component{
  constructor(){
    super();
    this.SECONDS_IN_A_DAY = 86400;

    this.clockInterval;
    this.timePercent = 0;

    this.getMomentSecond = this.getMomentSecond.bind(this);
    this.checkTime = this.checkTime.bind(this);
    let now = moment();
    this.state = { currentTime: now.format('h:mm:ss A') , currentSecond: this.getMomentSecond()  };
  }

  getMomentSecond(){
    let now = moment();
    let hour = now.hour() * 60 * 60;
    let minute = now.minute()*60;
    let second = now.second();

    let total = hour + minute + second;
    return total;
  }



  checkTime(){
    let now = moment();
    let currentSecond = this.getMomentSecond();
      if(this.state.currentSecond != currentSecond){
        this.setState({
          currentTime: now.format('h:mm:ss A'),
          currentSecond
        });
      }
  }

  componentWillMount(){
    this.clockInterval = setInterval(this.checkTime,100);
  }

  render(){
    this.timePercent = (this.state.currentSecond/this.SECONDS_IN_A_DAY)*100;
  //  console.log(timePercent);
    return (
      <div className='timeline'>
        <div style={{top:`${this.timePercent}%`}}  className='time-hand'>
          <div className ='clock'>{this.state.currentTime}</div>
        </div>
      </div>
    )
  }
}
