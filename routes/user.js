const express = require('express');
const passport = require('passport');

const router = express.Router();
const userController = require('../controllers/user_controller');

// using passport as a middleware to authenticate
router.post('/login',passport.authenticate('local', { failureRedirect: '/login' }),userController.createSession);
router.get('/logout',userController.destroySession);

module.exports = router;
