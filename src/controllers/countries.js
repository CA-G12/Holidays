const fetch = require('node-fetch');
const getCountries = (req, res) => {
  // using promises
  const conutriesAPIurl = `https://holidayapi.com/v1/countries?pretty&key=${process.env.API_KEY}`;
  return fetch(conutriesAPIurl)
    .then((data) => data.json())
    .then((data) => {
      console.log(data, 44);
      res.json(data);
    })
    .catch((err) => console.log(err));
};
module.exports = getCountries;
