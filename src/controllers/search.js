const fetch = require('node-fetch');

const search = (req, res) => {
  const { params } = req;
  console.log(params);
  const holidaysURL = `https://holidays.abstractapi.com/v1/?api_key=${process.env.HOLIDAYS_API_KEY}&country=US&year=2015&month=12&day=25`;
  //  return
  console.log(process.env.HOLIDAYS_API_KEY);
  fetch(holidaysURL)
    .then((data) => data.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};
module.exports = search;
