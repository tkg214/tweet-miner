import React, { Component } from 'react';
import Tweet from '../Tweet.jsx';

class TweetContainer extends Component {

  render() {
    return (
      <div className='system'>
        {this.props.tweets.map( (tweet) => {
          return <Tweet key={tweet.twid} tweet={tweet}/>
        })}
      </div>
    )
  }
}

export default TweetContainer;
