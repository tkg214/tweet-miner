import React, { Component } from 'react';

class Tweet extends Component {

  render() {
    return (
      <div className='tweet'>
        <span className='tweet-screen-name'>{this.props.tweet.screen_name}</span>
        <span className='tweet-content'>{this.props.tweet.text}</span>
      </div>

    );
  }
}

export default Tweet;
