import React, { Component } from 'react';
import * as InputActions from '../actions/InputActions.jsx';

class Searchbar extends Component {

  sendQuery(e) {
    if (e.key === 'Enter') {
      InputActions.sendQuery(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <input
          className='input-query'
          type='text'
          placeholder='Enter a Query'
          onKeyUp={this.sendQuery.bind(this)}
        />
      </div>
    );
  }
}

export default Searchbar;
