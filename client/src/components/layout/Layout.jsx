import React, { Component } from 'react';
import Streamer from '../Streamer.jsx';
import Navbar from './Navbar.jsx';
import Searchbar from '../Searchbar.jsx';

class Layout extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Searchbar/>
        <Streamer/>
      </div>
    );
  }

};

export default Layout;
