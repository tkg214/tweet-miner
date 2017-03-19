import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class TweetStore extends EventEmitter {

  constructor() {
    super();
    this.tweets = [
      {
        twid: '',
        name: '',
        screen_name: '',
        followers_count: 0,
        location: ''
      }
    ];
    this.count = 0;
  }

  getAll() {
    return this.tweets;
  }

  addTweet(tweet) {
    if (this.tweets.length > 20) {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      this.tweets.unshift(tweet);
      this.tweets.pop();
    } else {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      this.tweets.unshift(tweet);
    }
  }

  isDuplicateTweet(newTweet) {
    this.tweets.forEach( (tweet) => {
      if (newTweet.twid === tweet.twid) {
        return true;
      }
    });
  }

  getCount() {
    return this.count;
  }

  addCount() {
    this.count++;
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
        break;
      }
    }
  }
}

const tweetStore = new TweetStore;
dispatcher.register(tweetStore.handleActions.bind(tweetStore));

export default tweetStore;
