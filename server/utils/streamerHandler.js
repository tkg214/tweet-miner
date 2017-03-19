module.exports = function(stream, ws) {

  stream.on('data', (data) => {
    const tweet = {
      twid: data.id_str
      // country_code: data.place.country_code
    }

    ws.send(JSON.stringify(tweet));
  });

  stream.on('error', (error) => {
    console.log(error);
  });
}
