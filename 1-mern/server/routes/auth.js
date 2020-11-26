// Auth paths
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController.js');
const auth = require('../middleware/auth.js');

// login
// api/auth
router.post('/', 
    [
        check('email', 'Add valid email').isEmail(),
        check('password', 'The password requires 6 characters minimum').isLength({ min: 6})
    ],
    authController.authUser
);

router.get('/',
    auth,
    authController.getUserAuthenticated
);
module.exports = router; 