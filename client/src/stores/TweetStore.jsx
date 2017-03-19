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
    this.totalFollowers = 0;
    this.categories = {
      over1000: {
        twid: '', // + A
        name: '',
        screen_name: '',
        followers_count: 0,
        location: ''
      },
      over10000: {
        twid: '', // + A
        name: '',
        screen_name: '',
        followers_count: 0,
        location: ''
      },
      over50000: {
        twid: '', // + A
        name: '',
        screen_name: '',
        followers_count: 0,
        location: ''
      },
      over100000: {
        twid: '', // + A
        name: '',
        screen_name: '',
        followers_count: 0,
        location: ''
      }
    }
  }

  getTweet() {
    return this.tweets;
  }

  addTweet(tweet) {
    if (this.tweets.length > 50) {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      this.tweets.unshift(tweet);
      this.tweets.pop();
      this.updateTotalFollowers(tweet.followers_count);
      this.categorizeTweetOnFollowers(tweet.followers_count);
    } else {
      if (this.isDuplicateTweet(tweet)) {
        return;
      }
      this.tweets.unshift(tweet);
      this.updateTotalFollowers(tweet.followers_count);
      this.categorizeTweetOnFollowers(tweet.followers_count)
    }
  }

  updateTotalFollowers(followers) {
    const updatedTotalFollowers = this.totalFollowers + followers;
    this.totalFollowers = updatedTotalFollowers;
  }

  isDuplicateTweet(newTweet) {
    this.tweets.forEach( (tweet) => {
      if (newTweet.twid === tweet.twid) {
        return true;
      }
    });
  }

  categorizeTweetOnFollowers(count) {
    if (count > 10000) console.log('over 9000!', this.totalFollowers)
    // switch(count) {
    //   case count > 2000: {
    //     console.log('over 9000! ', this.totalFollowers)
    //     break;
    //   }
    // }
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
