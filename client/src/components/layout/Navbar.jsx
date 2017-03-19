import React, { Component } from 'react';
import * as TweetActions from '../../actions/TweetActions.jsx';
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

  getCount() {
    this.setState({
      count: TweetStore.getCount()
    });
  }

  render() {
    return (
      <div>
        <nav className='navbar'>
          <a href='/' className='navbar-brand'>Twitter Bot</a>
          <span className='navbar-tweetcount'>{this.state.count}</span>
        </nav>
      </div>
    )
  }
}

export default Navbar;
