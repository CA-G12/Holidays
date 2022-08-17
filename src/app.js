const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const router = require('./routers');

const {
  handleClientErrors,
  handleServerErrors,
} = require('./controllers/errors');

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router.countries);
app.use(router.currentLocation);
app.use(router.serachRouter);

app.use(handleClientErrors);
app.use(handleServerErrors);
app.listen(app.get('port'), () => {
  console.log(`App running at http://localhost:${app.get('port')}`);
});
