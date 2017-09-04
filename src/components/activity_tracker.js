import React, { Component } from 'react'
import Timeline from './timeline'
import Weather from './weather'

export default class ActivityTracker extends Component {
  constructor(props){
    super(props);

    this.getActivities = this.getActivities.bind(this);
    this.switchActivity = this.switchActivity.bind(this);
    this.getPre = this.getPre.bind(this);
    this.playPronunciation = this.playPronunciation.bind(this);
    this.index = 0;

    this.activityLoop;
    this.pronunciation = new Audio('pronunciation.wav');

    this.state = {
      activity: {
          pre: this.getPre(),
          activity: this.getActivities()[this.index]
      }
    }
  }

  getActivities(){
    let hour = this.props.moment.hour();
    let act1 = ['Eating breakfast', 'Working out', 'Checking my email'];
    let act2 = ['Working hard', 'Taking the day off', 'On vacation'];
    let act3 = ['Coding away', 'Hanging with friends', 'Relaxing'];
    let act4 = ['Catching some Zzzs', 'Turnin up!', 'Late night hacking' ];

    if(hour >= 6 && hour < 9 ){
      return act1;
    }
    else if(hour >= 9 && hour < 17){
      return act2;
    }
    else if(hour >= 17 && hour <= 23){
      return act3;
    }
    else if(hour >= 0 && hour < 6){
      return act4;
    }
  }

  switchActivity(){
    this.index = (this.index+1) % 3;
    let pre = this.getPre();
    let activity = this.getActivities()[this.index];
    this.setState({activity: {activity, pre}});
    this.refs.whatAmIDoing.className = 'what-am-i-doing'
  }

  getPre(){
    let pre='';
    switch(this.index){
      case 0:
        pre = "I'm probably...";
        break;
      case 1:
        pre = "I might be...";
        break;
      case 2:
        pre = "Slight chance I'm...";
        break;
    }
    return pre;
  }

  componentWillMount(){
    this.activityLoop = setInterval(this.switchActivity, 20000);
  }

  playPronunciation(){
    this.pronunciation.play();
  }

  render(){
    let now = this.props.moment;
    return(
      <div className='activity-tracker'>
        <p className='day'>{now.format('dddd, Do')} <Weather {...this.props}/></p>
        <p className='date'>{now.format('MMMM YYYY')}</p>
        <div className='title' alt='FirstName'>{this.props.website_data.personal.firstname}<span dangerouslySetInnerHTML={{__html: `${this.props.website_data.personal.pronunciation} <i class='fa fa-volume-up'></i>`}} onClick ={this.playPronunciation} className = {(this.props.weather && this.props.weather.main.temp  < 13) ? 'pronounce cool' : 'pronounce hot'}></span></div>
        <div className='title' alt='LastName'>{this.props.website_data.personal.lastname}.</div>
        <div>{this.props.website_data.personal.tagline}</div>
        <div ref = 'whatAmIDoing' className='what-am-i-doing'>
            <small>{this.state.activity.pre}</small>
            <div>{this.state.activity.activity}</div>
        </div>
        <Timeline moment={this.props.moment}/>
      </div>
    )
  }
}
