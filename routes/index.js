const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loaded');

router.get('/', homeController.home);
router.get('/login',homeController.login);
//router.get('/about', homeController.about);

router.use('/users', require('./user'));

module.exports = router;