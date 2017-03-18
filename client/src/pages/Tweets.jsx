import React, { Component } from 'react';
import Tweet from '../components/Tweet.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx'

class Tweets extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
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
      TweetActions.addTweet(tweet);
    }
  }

  componentWillMount() {
    TweetStore.on('change', this.getTweets);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
  }

  getTweets() {
    this.setState({
      tweets: TweetStore.getAll();
    });
  }

  loadTweets() {
    TweetActions.loadTweets();
  }

  render() {
    const { tweets } = this.state;
    const TweetComponents = tweets.map( (tweet) => {
      return <Tweet key={tweet.twid} {...tweet}/>
    });

    return (
      <div>
        <button onClick={this.loadTweets.bind(this)}>Load Tweets</button>
        <ul>{TweetComponents}</ul>
      </div>
    );
  }
}

export default Tweets;
