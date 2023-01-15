const routes = require('express').Router();

const myController = require('../controllers');

// routes.get('/', (req, res) => {
//   res.send('Melissa Chorba');
// });

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);
routes.get('/contacts', myController.getMongoData);

module.exports = routes;
