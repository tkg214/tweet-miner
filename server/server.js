const express = require('express');
const SocketServer = require('ws').Server;
const twitter = require('twitter');
const config = require('./config')
const streamerHandler = require('./utils/streamerHandler');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const tweet = new twitter(config.twitter);

const wss = new SocketServer({ server });

const query = 'america'

wss.on('connection', (ws) => {
  console.log('Client connected');

  tweet.stream('statuses/filter', {track: query}, (stream) => {
    streamerHandler(stream, wss);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  })

});
