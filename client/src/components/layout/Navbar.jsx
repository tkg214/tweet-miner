import React, { Component } from 'react';
import * as TweetActions from '../../actions/TweetActions.jsx';
import * as InputActions from '../../actions/InputActions.jsx';
import TweetStore from '../../stores/TweetStore.jsx';

class Navbar extends Component {

  constructor() {
    super();
    this.getCount = this.getCount.bind(this);

    this.state = {
      count: TweetStore.getCount()
    }
  }

  componentWillMount() {
    TweetStore.on('change', this.getCount);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getCount);
  }

  sendQuery(e) {
    if (e.key === 'Enter') {
      InputActions.sendQuery(e.target.value)
    }
  }

  getCount() {
    this.setState({
      count: TweetStore.getCount()
    });
  }

  render() {
    return (
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>Twitter Bot</a>
        <input
          className='input-query'
          type='text'
          placeholder='Enter a Query'
          onKeyUp={this.sendQuery.bind(this)}
        />
        <span className='navbar-tweetcount'>{this.state.count}</span>
      </nav>
    )
  }
}

export default Navbar;
