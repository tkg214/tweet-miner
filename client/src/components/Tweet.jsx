import React, { Component } from 'react';

class Tweet extends Component {

  render() {
    return (
      <div className={`${this.props.tweet.importance} tweet`}>
        <div className='tweet-user'>
          <h4 className='tweet-screen-name'>@{this.props.tweet.screen_name}</h4>
          <img className='tweet-avatar' src={this.props.tweet.profile_image_url}/>
        </div>
        <span className='tweet-content'>{this.props.tweet.text}</span>
      </div>
    );
  }
}

export default Tweet;
