'use strict';

const TeamController = require('../controllers/team-controller'),
      tc = new TeamController(),
      express = require('express'),
      router = express.Router();

router
    .get('/team',tc.getAll)
    .get('/agregar',tc.addForm)
    .post('/team',tc.save)
    .get('/team/:id',tc.getOne)
    .put('/team/:id',tc.save)
    .delete('/team/:id',tc.delete)
    .use(tc.error404);

module.exports = router;


