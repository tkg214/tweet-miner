import React, { Component } from 'react';
import Searchbar from '../Searchbar.jsx';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Twitter Bot</h1>
        <Searchbar/>
      </div>
    )
  }
}

export default Home;
