const fetch = require('node-fetch');

const search = (req, res) => {
  console.log(req.query, 'queryyyyy');
  const holidaysURL = `https://holidays.abstractapi.com/v1/?api_key=${process.env.HOLIDAYS_API_KEY}&country=${req.query.country}&year=${req.query.year}&month=${req.query.month}&day=${req.query.day}`;
  //  return
  return fetch(holidaysURL)
    .then((data) => data.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};
module.exports = search;
