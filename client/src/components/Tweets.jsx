import React, { Component } from 'react';
import Tweet from './Tweet.jsx';
import TweetContainer from './layout/TweetContainer.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx';
import InputStore from '../stores/InputStore.jsx';

class Tweets extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
    this.sendQuery = this.sendQuery.bind(this);

    this.state = {
      tweets: TweetStore.getAll()
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
    InputStore.on('change', this.sendQuery);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
    InputStore.removeListener('change', this.sendQuery);
  }

  getTweets() {
    this.setState({
      tweets: TweetStore.getAll()
    });
  }

  sendQuery() {
    console.log('Sending query')
    this.socket.send(JSON.stringify(InputStore.getQuery()));
  }

  render() {

    return (
      <div>
        <TweetContainer tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default Tweets;