import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super()
  }

  render() {

    return (
      <div>
        {this.props.tweets.map( (tweet) => {
          return <li>{tweet.author}</li>
        })};
      </div>

    );
  }
}

export default Tweet;
