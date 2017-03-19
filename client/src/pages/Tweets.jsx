import React, { Component } from 'react';
import Tweet from '../components/Tweet.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx'

class Tweets extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
    this.getCount = this.getCount.bind(this);

    this.state = {
      tweets: TweetStore.getAll(),
      count: TweetStore.getCount()
    };
  }

  componentDidMount() {
    const self = this;

    this.socket = new WebSocket('ws://localhost:3001/socketserver');
    this.socket.onopen = (event) => {
      console.log('Connected to Server');
    };
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      TweetActions.addTweet(data);
      TweetActions.addCount();
    }
  }

  componentWillMount() {
    TweetStore.on('change', this.getTweets);
    TweetStore.on('change', this.getCount);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
    TweetStore.removeListener('change', this.getCount);
  }

  getTweets() {
    this.setState({
      tweets: TweetStore.getAll()
    });
  }

  getCount() {
    this.setState({
      count: TweetStore.getCount()
    });
  }

  render() {

    return (
      <div>
        <h1>Tweets</h1>
        {/* <input on */}
        <h2>{this.state.count}</h2>
        <Tweet tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default Tweets;
