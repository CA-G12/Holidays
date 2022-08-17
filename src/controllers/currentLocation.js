const fetch = require('node-fetch');

const getCurrentLocation = (req, res) => {
  // using promises
  const infoAPIurl = `https://ipinfo.io?token=${process.env.TOKEN}`;
  return fetch(infoAPIurl)
    .then((data) => data.json())
    .then((data) => {
      console.log(data.country, 44);
      res.json(data.country);
    })
    .catch((err) => console.log(err));
};
module.exports = getCurrentLocation;
