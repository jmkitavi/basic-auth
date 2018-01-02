import React from 'react';
import { Route, Switch } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/404/NotFound'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </App>
)

export default Routes;