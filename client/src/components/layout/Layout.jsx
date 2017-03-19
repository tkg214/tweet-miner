import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Tweets from '../Tweets.jsx';

class Layout extends Component {

  render() {
    return (
      <div>
        <Tweets/>
        <Footer/>
      </div>
    );
  }

};

export default Layout;
