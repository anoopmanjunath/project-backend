const express = require('express');
const router = express.Router();

const { categoriesController } = require('../app/controllers/categorie-controller');

const { usersController } = require('../app/controllers/user-controller');

const { vendorsController } = require('../app/controllers/vendor-controller');

const { hallController } = require('../app/controllers/hall-controllers')

router.use('/categories', categoriesController);
 
router.use('/users', usersController);

router.use('/vendors', vendorsController);

router.use('/hall', hallController);


module.exports = {
    routes : router
}