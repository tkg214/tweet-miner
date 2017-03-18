import dispatcher from '../dispatcher.jsx';

export function addTweet(tweet) {
  dispatcher.dispatch({
    type: 'ADD_TWEET',
    tweet: tweet
  });
}

export function loadTweets() {
  dispatcher.dispatch({type: 'FETCH_TWEET'});
}
