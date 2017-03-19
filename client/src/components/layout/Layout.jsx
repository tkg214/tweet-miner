import React, { Component } from 'react';
import Tweets from '../Tweets.jsx';
import Navbar from './Navbar.jsx';

class Layout extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Tweets/>
      </div>
    );
  }

};

export default Layout;
