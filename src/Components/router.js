import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './Landing/landing';
import MycartItems from './myCartData/mycartitems';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                        <Route path='/' exact component={LandingPage} />
                        <Route path='/cart' exact component={MycartItems} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;