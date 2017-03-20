import React, { Component } from 'react';
import Tweet from './Tweet.jsx';
import TweetContainer from './layout/TweetContainer.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx';
import InputStore from '../stores/InputStore.jsx';
import UtilityStore from '../stores/UtilityStore.jsx';
import StopButton from './StopButton.jsx';
import DataVisualContainer from './layout/DataVisualContainer.jsx'

class Streamer extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
    this.stopStream = this.stopStream.bind(this);

    this.state = {
      tweets: TweetStore.getAll(),
      visibility: 'hide'
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
    }
  }

  componentWillMount() {
    TweetStore.on('change', this.getTweets);
    InputStore.on('change', this.sendQuery);
    UtilityStore.on('change', this.stopStream);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
    InputStore.removeListener('change', this.sendQuery);
    UtilityStore.removeListener('change', this.stopStream);
  }

  getTweets() {
    this.setState({
      visibility: 'show',
      tweets: TweetStore.getAll()
    });
  }

  sendQuery() {
    console.log('Sending query')
    this.socket.send(JSON.stringify(InputStore.getQuery()));
  }

  stopStream() {
    this.socket.close(1000, 'Stopping Stream');
  }


  render() {
    return (
      <div className={this.state.visibility}>
        <TweetContainer tweets={this.state.tweets}/>
        <StopButton/>
      </div>
    );
  }
}

export default Streamer;
