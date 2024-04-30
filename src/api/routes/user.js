const usersRoutes = require('express').Router();

const { register } = require('../controllers/user');

usersRoutes.post('/register', register);

module.exports = usersRoutes;
