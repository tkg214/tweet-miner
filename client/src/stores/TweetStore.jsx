import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TweetStore extends EventEmitter {

  constructor() {
    super();
    this.tweets = [
      {
        twid: 1234,
        author: 'ken',
        screenname: 'takagi',
        // avatar: data.user.profile_image_url,
        body: data.text
        // date: data.created_at,
        // location: data.user.location
      },
      {
        twid: 1235,
        author: 'ken',
        screenname: 'takagi',
        // avatar: data.user.profile_image_url,
        body: 'test test test test'
        // date: data.created_at,
        // location: data.user.location
      }
    ];
  }

  getAll() {
    return this.tweets;
  }

  addTweet(tweet) {
    this.tweets.unshift(tweet);
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVE_TWEETS': {
        this.tweets = action.tweets;
        this.emit('change');
        break;
      }
    }
  }
}

const tweetStore = new TweetStore;
dispatcher.register(tweetStore.handleActions.bind(tweetStore));

export default tweetStore;
