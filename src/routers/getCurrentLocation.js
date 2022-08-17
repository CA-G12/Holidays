const router = require('express').Router();
const getCurrentLocation = require('../controllers/currentLocation');

router.get('/currentLocation', getCurrentLocation);

module.exports = router;
