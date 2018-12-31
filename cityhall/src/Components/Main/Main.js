import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About';
import Business from '../Busniess';
import CityHall from '../CityHall';
import Community from '../Community';
import Service from '../Service';
import Vital from '../Vital';
import ChRoute from '../ChRoute';


class Main extends Component{


    render(){
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/Business' component={Business}/>
                    <Route path='/City-Hall' component={ChRoute}/>
                    <Route path='/Community' component={Community}/>
                    <Route path='/Service' component={Service}/>
                </Switch>               
            </div>
        )
    }
};

export default Main;