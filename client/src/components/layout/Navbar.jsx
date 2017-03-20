import React, { Component } from 'react';
import * as TweetActions from '../../actions/TweetActions.jsx';

import TweetStore from '../../stores/TweetStore.jsx';
import InputStore from '../../stores/InputStore.jsx';

class Navbar extends Component {

  constructor() {
    super();
    this.getCount = this.getCount.bind(this);
    this.getTotalFollowers = this.getTotalFollowers.bind(this);
    this.getQuery = this.getQuery.bind(this);

    this.state = {
      count: TweetStore.getCount(),
      totalFollowers: TweetStore.getTotalFollowers(),
      visibility: 'hide',
      query: ''
    }
  }

  componentWillMount() {
    TweetStore.on('change', this.getCount);
    TweetStore.on('change', this.getTotalFollowers);
    InputStore.on('change', this.getQuery);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getCount);
    TweetStore.removeListener('change', this.getTotalFollowers);
    InputStore.removeListener('change', this.getQuery);
  }

  getCount() {
    this.setState({
      count: TweetStore.getCount(),
      visibility: 'show'
    });
  }

  getQuery() {
    this.setState({
      query: InputStore.getQuery(),
      visibility: 'show'
    })
  }

  getTotalFollowers() {
    this.setState({
      totalFollowers: TweetStore.getTotalFollowers(),
      visibility: 'show'
    })
  }

  render() {
    return (
      <div className={this.state.visibility}>
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <span className='navbar-brand brand'>Tweet Miner</span>
          <span className='navbar-icon'><img src='https://abs.twimg.com/icons/apple-touch-icon-192x192.png'/></span>
          <span className='navbar-brand stats'>Reach: {this.state.totalFollowers}</span>
          <span className='navbar-brand stats'>Tweets: {this.state.count}</span>
          <span className='navbar-brand stats'>{this.state.query}</span>
        </div>
      </div>
    </div>
    )
  }
}

export default Navbar;
