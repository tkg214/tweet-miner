import React, {Component} from 'react';

class App extends Component {


  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/socketserver');
    this.socket.onopen = (event) => {
      console.log('Connected to Server');
    };
  }

  render() {
    return (
      <div>
        <h1>Works!</h1>
      </div>
    );
  }
};

export default App;
