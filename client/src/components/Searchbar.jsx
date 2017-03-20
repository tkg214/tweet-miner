import React, { Component } from 'react';
import * as InputActions from '../actions/InputActions.jsx';

class Searchbar extends Component {

  constructor() {
    super();
    this.state = {
      visibility: 'show'
    }
  }

  sendQuery(e) {
    if (e.key === 'Enter') {
      InputActions.sendQuery(e.target.value)
      this.setState({
        visibility: 'hide'
      })
    }
  }

  render() {
    return (
      <div className={this.state.visibility}>
        <div className='search-box'>
          <div className='col xs-12'>
            <div className='well search-bar'>
              <span className='home-brand'>Tweet Miner</span>
              <span className='home-icon'><img src='https://abs.twimg.com/icons/apple-touch-icon-192x192.png'/></span>
              <input
                className='form-control input-lg search-input'
                type='text'
                placeholder='Enter a Query'
                onKeyUp={this.sendQuery.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Searchbar;
