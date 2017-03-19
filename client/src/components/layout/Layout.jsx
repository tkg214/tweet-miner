import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Tweets from '../Tweets.jsx';
import Navbar from './Navbar.jsx';

class Layout extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Tweets/>
        <Footer/>
      </div>
    );
  }

};

export default Layout;
