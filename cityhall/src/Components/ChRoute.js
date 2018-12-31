import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CityHall from './CityHall';
import Vital from './Vital';

const ChRoute = () => (
    <Switch>
      <Route exact path='/City-Hall' component={CityHall}/>
      <Route path='/City-Hall/VitalStats' component={Vital}/>
    </Switch>
  )

export default ChRoute;