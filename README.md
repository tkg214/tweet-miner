Tweet Miner

A simple twitter stream using Node, React, a Web Socket, and Flux.
Please add a config.js file to the server folder with a Twitter API key like so:

module.exports = {
  twitter: {
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key: 'YOUR_ACCESS_TOKEN',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
  }
}

To start, please run npm start on both the client server and the server server after installing dependencies.

TODO:
* Add data visualization component
* Add Go Button to restart stream
* Save tweets that have been categorized as high importance (over 10000 followers)

