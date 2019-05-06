import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import About from '../About/About';
import Business from '../Busniess/Busniess';
import Community from '../Community';
import Service from '../Services/Service';
import ChRoute from '../ChRoute';
import './Main.css';



class Main extends Component{


    render(){
        return (
            <div className='main'>
                <div class="icon-bar">
                    <a href="https://www.facebook.com/CityOfElizabethNJ/" class="facebook"><SocialIcon url="https://www.facebook.com/CityOfElizabethNJ/" style={{ height: 5, width: 5 }} /></a> 
                    <a href="https://twitter.com/CityofElizabeth" class="twitter"><SocialIcon url="https://twitter.com/CityofElizabeth" style={{ height: 5, width: 5 }} /></a> 
                    <a href="https://www.instagram.com/cityofelizabeth/" class="instagram"><SocialIcon url="https://www.instagram.com/cityofelizabeth/" style={{ height: 5, width: 5 }} /></a> 
                    <a href="https://www.youtube.com/user/CityofElizabeth" class="youtube"><SocialIcon url="https://www.youtube.com/user/CityofElizabeth" style={{ height: 5, width: 5 }} /></a> 
                </div>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/Business' component={Business}/>
                    <Route path='/City-Hall' component={ChRoute}/>
                    <Route path='/Community' component={Community}/>
                    <Route path='/Service' component={Service}/>
                    <Route component={About} />
                </Switch>               
            </div>
        )
    }
};

export default Main;