import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityHall from './CityHall/CityHall';
import Vital from './Vital';
import Engineer from './Engineer';

const ChRoute = () => (
    <Switch>
      <Route exact path='/City-Hall' component={CityHall}/>
      <Route path='/City-Hall/VitalStats' component={Vital}/>
      <Route path='/City-Hall/Engineering' component={Engineer}/>
    </Switch>
  )

export default ChRoute;