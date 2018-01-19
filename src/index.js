import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();