import React, { Component } from 'react';
import TweetContainer from '../layout/TweetContainer.jsx';
import * as TweetActions from '../../actions/TweetActions.jsx';
import TweetStore from '../../stores/TweetStore.jsx';
import InputStore from '../../stores/InputStore.jsx';
import UtilityStore from '../../stores/UtilityStore.jsx';

class StreamPage extends Component {

  constructor() {
    super();
    this.getTweet = this.getTweet.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
    this.stopStream = this.stopStream.bind(this);

    this.state = {
      tweets: TweetStore.getTweet()
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
    TweetStore.on('change', this.getTweet);
    InputStore.on('change', this.sendQuery);
    UtilityStore.on('change', this.stopStream);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweet);
    InputStore.removeListener('change', this.sendQuery);
    UtilityStore.removeListener('change', this.stopStream);
  }

  getTweet() {
    this.setState({
      tweets: TweetStore.getTweet()
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
      <div>
        <TweetContainer tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default StreamPage;
