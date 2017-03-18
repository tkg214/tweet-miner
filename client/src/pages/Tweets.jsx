import Tweet from '../components/Tweet.jsx';
import * as TweetActions from '../actions/TweetActions.jsx';
import TweetStore from '../stores/TweetStore.jsx'

class Tweets extends Component {

  constructor() {
    super();
    this.getTweets = this.getTweets.bind(this);
    this.state = {
      tweets: TweetStore.getAll()
    };
  }

  componentWillMount() {
    TweetStore.on('change', this.getTweets);
  }

  componentWillUnmount() {
    TweetStore.removeListener('change', this.getTweets);
  }

  getTweets() {
    this.SetState({
      tweets: TweetStore.getAll(),
    });
  }

  loadTweets() {
    TweetActions.loadTweets();
  }

  render() {
    const { tweets } = this.state;
    const TweetComponents = tweets.map( (tweet) => {
      return <Tweet key={tweet.twid} {...tweet}/>
    });

    return {
      <div>
        <button onClick={this.loadTweets.bind(this)}>Load Tweets</button>
        <ul>{TweetComponents}</ul>
      </div>
    }
  }

}

// componentDidMount() {
//   const self = this;
//
//   this.socket = new WebSocket('ws://localhost:3001/socketserver');
//   this.socket.onopen = (event) => {
//     console.log('Connected to Server');
//   };
//   this.socket.onmessage = (event) => {
//     const data = JSON.parse(event.data);
//     self.addTweet(data);
//   }
// }
//
// addTweet(tweet) {
//   const newTweets = this.state.newTweets;
//   newTweets.unshift(tweet);
//   this.setState({ newTweets });
// }
//
// this.state = {
//   tweets: [],
//   count: 0,
//   newTweets: []
