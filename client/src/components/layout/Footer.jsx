import React, { Component } from 'react';
import * as InputActions from '../../actions/InputActions.jsx';

class Navbar extends Component {

  sendQuery(e) {
    if (e.key === 'Enter') {
      InputActions.sendQuery(e.target.value)
    }
  }

  render() {
    return (
      <nav className='input-bar'>
        <input
          className='input-query'
          type='text'
          placeholder='Enter a Query and Hit Enter'
          onKeyUp={this.sendQuery.bind(this)}
        />
      </nav>
    );
  }
}

export default Navbar;
