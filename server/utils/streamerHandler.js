module.exports = function(stream, ws) {

  stream.on('data', (data) => {
    const tweet = {
      twid: data.id_str,
      name: data.user.name ? data.user.name : '',
      screen_name: data.user.screen_name ? data.user.screen_name : '',
      profile_image_url: data.user.profile_image_url ? data.user.profile_image_url : '',
      followers_count: data.user.followers_count,
      text: data.text ? data.text : '',
      location: data.location ? data.location : ''
    }
    ws.send(JSON.stringify(tweet));
  });

  stream.on('error', (error) => {
    console.log(error);
  });
}
