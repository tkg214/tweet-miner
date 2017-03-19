import React, { Component } from 'react';

class Tweet extends Component {
  constructor(props) {
    super()
  }

  render() {

    return (
      <div>
        {this.props.tweets.map( (tweet) => {
          return <li key={tweet.twid}>{tweet.country_code}</li>
        })};
      </div>

    );
  }
}

export default Tweet;
