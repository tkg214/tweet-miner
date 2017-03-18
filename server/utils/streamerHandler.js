module.exports = function(stream, wss) {

  // tweet.stream('statuses/filter', {track: 'tokyo'}, (stream) => {
    stream.on('data', (data) => {
      const tweet = {
        twid: data.id,
        author: data.user.name,
        screenname: data.user.screen_name,
        avatar: data.user.profile_image_url,
        body: data.text,
        date: data.created_at,
        location: data.user.location
      }

      wss.clients.forEach( (client) => {
        client.send(JSON.stringify(tweet));
      });

    });

    stream.on('error', (error) => {
      console.log(error);
    });
  // });
}
