import React from 'react';
import { Route, Switch } from  'react-router-dom';
import { UserInput, Home } from '../Components';
const Routeconfig = () => (
    <Switch>
        <Route exact path="/" component={UserInput} />
        <Route exact path="/home" component={Home} />
    </Switch>
)

export default Routeconfig;