const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Melissa Chorba');
});

module.exports = routes;
