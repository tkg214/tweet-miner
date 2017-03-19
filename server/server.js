const express = require('express');
const SocketServer = require('ws').Server;
const twitter = require('twitter');
const config = require('./config')
const streamerHandler = require('./utils/streamerHandler');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

const query = 'donald trump'

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    // query = message
    new twitter(config.twitter).stream('statuses/filter', {track: query}, (stream) => {
      streamerHandler(stream, ws);
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

});
