import React, { Component } from 'react';
import Tweet from './Tweet.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx';
import InputStore from '../stores/InputStore.jsx';

class Tweets extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
    this.getCount = this.getCount.bind(this);
    this.sendQuery = this.sendQuery.bind(this);

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
    InputStore.on('change', this.sendQuery);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
    TweetStore.removeListener('change', this.getCount);
    InputStore.removeListener('change', this.sendQuery);
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

  sendQuery() {
    console.log('Sending query')
    this.socket.send(JSON.stringify(InputStore.getQuery()));
  }

  render() {

    return (
      <div>
        <h2>{this.state.count}</h2>
        <Tweet tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default Tweets;
