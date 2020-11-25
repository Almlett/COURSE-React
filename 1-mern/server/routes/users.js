// User paths
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { check } = require('express-validator');

// Create user
// api/usuarios

router.post('/', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Add valid email').isEmail(),
        check('password', 'The password requires 6 characters minimum').isLength({ min: 6})
    ],
    userController.createUser
);

module.exports = router; 