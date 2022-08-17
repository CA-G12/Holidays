const router = require('express').Router();
const getCountries = require('../controllers/countries');

router.get('/countries', getCountries);

module.exports = router;
