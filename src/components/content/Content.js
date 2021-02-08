import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import About from '../about/About';
import Simulation from '../simulation/Simulation';

const Content = () => {
    return (
        <div>
            <h3>main content</h3>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/simulation" component={Simulation} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default Content
