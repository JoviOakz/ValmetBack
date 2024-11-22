const express = require('express');
const route = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../controllers/AuthController');

route
    .post('/register', UserController.register)
    .post('/login', UserController.login)
    .put('/update', authMiddleware, UserController.updatePassword)
    .delete('/delete/:id', authMiddleware, UserController.delete)

module.exports = route;