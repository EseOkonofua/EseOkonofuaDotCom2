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
    this.displayHours = this.displayHours.bind(this);
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

  componentDidMount(){


  }

  displayHours(){
    let now = moment();
    var time = [];
    var active = '';
    for(var i = 0; i < 24; i++){
      if(now.hour() >= i && now.hour() < (i+1)) active = 'active'
      else active = '';
      let hour = (
        <div key={i} style={{left:((i/23)*100) - 1.5 +'%' }} className = {'hours '+active} >{i}</div>
      )
      time.push(hour);
    }
    return time;
  }

  render(){

    this.timePercent = (this.state.currentSecond/this.SECONDS_IN_A_DAY)*100;
    let dir = '';
    let now = moment();
    let hour = now.hour();

    if(hour > 12) dir = {right:'0'}
    else dir = {left:'0'}

  //  console.log(timePercent);
    return (
        <div>
            <div className='timeline'>
                <div style={{left:`${this.timePercent}%`}}  className='time-hand'>
                    <div style={dir} className ='clock'>{this.state.currentTime}</div>
                </div>
                {this.displayHours()}
            </div>
            <div className='clock2'>{this.state.currentTime}</div>

        </div>


    )
  }
}
