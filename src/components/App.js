import React, { Component } from 'react';
import Header from './common/Header';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
