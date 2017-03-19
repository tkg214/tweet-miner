import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class TweetStore extends EventEmitter {

  constructor() {
    super();
    this.tweets = [
      {
        twid: '',
        country_code: ''
      }
    ];
    this.count = 0;
  }

  getAll() {
    return this.tweets;
  }

  getCount() {
    return this.count;
  }

  addCount() {
    this.count++;
  }

  addTweet(tweet) {
    this.tweets.unshift(tweet);
    //
  }

  handleActions(action) {
    switch(action.type) {
      case 'ADD_TWEET': {
        this.addTweet(action.tweet);
        break;
      }

      case 'ADD_COUNT': {
        this.addCount();
        this.emit('change');
      }
    }
  }
}

const tweetStore = new TweetStore;
dispatcher.register(tweetStore.handleActions.bind(tweetStore));

export default tweetStore;
