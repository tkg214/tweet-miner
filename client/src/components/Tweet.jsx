import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super()
  }

  render() {

    return (
      <div>
        {this.props.tweets.map( (tweet) => {
          {if (tweet.text) {
            return <li key={tweet.twid}>{tweet.text}</li>
          }}
        })}
      </div>

    );
  }
}

export default Tweet;
