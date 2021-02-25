const fetch = require('node-fetch');

fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure')
  .then(function(res) {

    console.log(res);

  })
  .catch(error => {
    console.error(error);
  })