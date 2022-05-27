const express       = require('express');
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeController');
const DislikesController = require('./Controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);

module.exports = routes;