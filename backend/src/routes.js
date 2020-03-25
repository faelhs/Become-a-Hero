const express = require('express');

const routes = express.Router();
const ongController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session',SessionController.create);
routes.delete('/session',SessionController.destroy);

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;