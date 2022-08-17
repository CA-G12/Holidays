const path = require('path');

const handleClientErrors = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '400.html'));
};

const handleServerErrors = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'errors', '500.html'));
};
module.exports = { handleClientErrors, handleServerErrors };
