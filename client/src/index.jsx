// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import Layout from './components/pages/StreamPage.jsx';
import Home from './components/pages/Home.jsx';

const app = document.getElementById('react-root');

ReactDom.render(
  <Router>
    <Route path='/' component={Home}></Route>
    <Route path='/stream' component={StreamPage}></Route>
  </Router>,
app);
