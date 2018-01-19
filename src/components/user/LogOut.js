import React from 'react';
import { withRouter } from 'react-router-dom';


class LogOut extends React.Component {
  componentWillMount () {
    localStorage.clear()
    return this.props.history.push('/login');
  }

  render () {
    return null;
  }
};

export default withRouter(LogOut);