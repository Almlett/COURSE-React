// Auth paths
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController.js');

// api/auth
router.post('/', 
    [
        check('email', 'Add valid email').isEmail(),
        check('password', 'The password requires 6 characters minimum').isLength({ min: 6})
    ],
    authController.authUser
);

module.exports = router; 