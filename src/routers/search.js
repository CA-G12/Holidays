const router = require('express').Router();
const search = require('../controllers/search');

router.get('/search/:countryyearmonthday', search);

module.exports = router;
