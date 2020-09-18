import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';

function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/records" component={Records} />
                <Route path="/charts" component={Charts} />
            </Switch>
        </Router>
    );
}

export default Routes;
