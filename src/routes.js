import React from 'react';
import { Route, Switch } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotFoundPage from './components/404/NotFound';
import SignUp from './components/user/SignUp';
import LogIn from './components/user/LogIn';
import LogOut from './components/user/LogOut';


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/logout" component={LogOut} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </App>
)

export default Routes;