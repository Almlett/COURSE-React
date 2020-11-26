const User = require('../models/User.js');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {

    const errors = validationResult(req);
    if( !errors.isEmpty ()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password} = req.body;

    try {
        // revisar que sea usuario registrado

        let user = await User.findOne({ email });
        if (!user){
            return res.status(400).json({msg:'user dont exist'});
        }

        const correctPass = await bcryptjs.compare(password, user.password)

        if (!correctPass){
            return res.status(400).json({msg:'invalid password'});
        }

        // create
        const payload = {
            user:{
                id:user.id
            }
        };

        // sign token
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        })


    } catch (error) {
        console.log(error)
    }
}

// get user auntethicated

exports.getUserAuthenticated = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error'})
    }
}