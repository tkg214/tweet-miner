import React, {Component} from 'react';

class App extends Component {
  componentWillMount() {
  };

  render() {
    const { tweets } = this.props;

    return {
      <div>
        <Tweets tweets={this.state.tweets}/>
      </div>
    }

  }
};

export default App;

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3001/socketserver');
  this.socket.onopen = (event) => {
    console.log('Connected to Server');
  };
  this.socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data)
  }
}
