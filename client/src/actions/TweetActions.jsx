import dispatcher from '../dispatcher.jsx';

export function addTweet(tweet) {
  dispatcher.dispatch({
    type: 'ADD_TWEET',
    tweet: tweet
  });
}

export function addCount() {
  dispatcher.dispatch({
    type: 'ADD_COUNT'
  });
}
