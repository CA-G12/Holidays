const fetch = require('node-fetch');

const getCountries = (req, res) => {
  // using promises
  const conutriesAPIurl = `https://holidayapi.com/v1/countries?pretty&key=${process.env.COUNTRIES_API_KEY}`;
  return fetch(conutriesAPIurl)
    .then((data) => data.json())
    .then((data) => {
      res.json(data.countries);
    })
    .catch((err) => console.log(err));
};
module.exports = getCountries;
