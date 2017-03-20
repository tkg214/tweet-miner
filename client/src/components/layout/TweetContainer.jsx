import React, { Component } from 'react';
import Tweet from '../Tweet.jsx';

class TweetContainer extends Component {

  render() {
    return (
      <div className='tweet-container'>
        {this.props.tweets.map( (tweet) => {
          if (tweet.screen_name) {
            return <Tweet key={tweet.twid} tweet={tweet}/>
          }
        })}
      </div>
    )
  }
}

export default TweetContainer;
