import React, { Component } from 'react'
import moment from 'moment';

import Timeline from './timeline'
import Weather from './weather'
export default class ActivityTracker extends Component {
    constructor(){
        super();
        let today = moment();
        let currentDay = today.format('dddd, Do');
        let currentDate = today.format('MMMM YYYY');
        let currentHour = today.hour();

        this.checkDateTime = this.checkDateTime.bind(this);
        this.getActivities = this.getActivities.bind(this);
        this.switchActivity = this.switchActivity.bind(this);
        this.getPre = this.getPre.bind(this);
        this.playEse = this.playEse.bind(this);
        this.index = 0;
        this.timeCounter;
        this.activityLoop;
        this.pronounciation = new Audio('EsePronounce.wav');

        this.state = {
            currentMoment:today,
            currentDay,
            currentDate,
            currentHour,
            activity: {
                pre: this.getPre(),
                activity: this.getActivities()[this.index]
            }
        }
    }

    getActivities(){
         let hour = moment().hour();

        console.log(hour);
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

    checkDateTime(){
        let now = moment();
        let currentDay = now.format('dddd, Do');
        let currentDate = now.format('MMMM YYYY');

        if(!now.isSame(this.state.currentMoment) ){
            this.setState({
                currentDay, currentDate,currentMoment:now
            })
        };

        if(now.hour() !== this.state.currentHour ){
            this.setState({
                currentHour: now.hour()
            });
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
        this.timeCounter = setInterval(this.checkDateTime, 1000);
        this.activityLoop = setInterval( this.switchActivity,20000);
    }

    componentDidMount(){

    }

    playEse(){
      this.pronounciation.play();
    }

    render(){
        return(
            <div className='activity-tracker'>
                <p className='day'>{this.state.currentDay} <Weather/></p>
                <p className='date'>{this.state.currentDate}</p>
                <div className='title' alt='FirstName'>Ese<span onClick ={this.playEse}  style={{color:'aqua'}} className = 'pronounce'> /&#283;s'&#257;'/</span></div>
                <div className='title' alt='LastName'>Okonofua.</div>
                <div>Full stack life developer. Google search guru.</div>
                <div ref = 'whatAmIDoing' className='what-am-i-doing'>
                    <small>{this.state.activity.pre}</small>
                    <div>{this.state.activity.activity}</div>
                </div>
                <Timeline/>
            </div>

        )
    }
}
