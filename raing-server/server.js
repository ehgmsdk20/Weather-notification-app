require('dotenv').config();
require('./credentials').inject(); // loading credentials
const app = require('./app');

const port = process.env.PORT || 4080;

const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
})

module.exports = server;