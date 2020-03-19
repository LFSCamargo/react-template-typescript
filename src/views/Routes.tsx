import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Views
import HomeView from './home/Home.view';

const Routes: FC = () => (
  <Router basename="/">
    <Switch>
      <Route exact path="/" component={HomeView} />
    </Switch>
  </Router>
);

export default Routes;
