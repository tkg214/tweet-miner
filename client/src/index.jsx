// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout/Layout.jsx';

const app = document.getElementById('react-root');

ReactDOM.render(<Layout/>, app);
