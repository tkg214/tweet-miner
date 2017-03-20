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
        location: '',
        importance: ''
      }
    ];
    this.count = 0;
    this.totalFollowers = 0;
  }

  getAll() {
    return this.tweets;
  }

  addTweet(tweet) {
    if (this.tweets.length > 20) {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      tweet.importance = this.categorizeTweet(tweet.followers_count)
      this.tweets.unshift(tweet);
      this.tweets.pop();
      this.totalFollowers += tweet.followers_count;
      this.count++;
    } else {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      tweet.importance = this.categorizeTweet(tweet.followers_count)
      this.tweets.unshift(tweet);
      this.count++;
      this.totalFollowers += tweet.followers_count;
    }
  }

  isDuplicateTweet(newTweet) {
    this.tweets.forEach( (tweet) => {
      if (newTweet.twid === tweet.twid) {
        return true;
      }
    });
  }

  categorizeTweet(followers) {
    if (followers > 10000) {
      return 'high';
    } else {
      return 'low';
    }
  }

  getCount() {
    return this.count;
  }

  getTotalFollowers() {
    return this.totalFollowers;
  }

  handleActions(action) {
    switch(action.type) {
      case 'ADD_TWEET': {
        this.addTweet(action.tweet);
        this.emit('change');
        break;
      }
    }
  }
}

const tweetStore = new TweetStore;
dispatcher.register(tweetStore.handleActions.bind(tweetStore));

export default tweetStore;
