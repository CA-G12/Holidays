const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(app.get('port'), () => {
  console.log(`App running at http://localhost:${app.get('port')}`);
});
