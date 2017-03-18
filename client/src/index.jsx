// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';

import Layout from './components/Layout.jsx';

ReactDOM.render(
  <Provider store={store}><Layout /></Provider>,
  document.getElementById('react-root')
);
