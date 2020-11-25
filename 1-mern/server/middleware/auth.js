const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // get token
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({msg: ' No token'});
    }

    try {
        const encryption = jwt.verify(token, process.env.SECRET);
        req.user = encryption.user;
        next();
    } catch (error) {
        res.status(401).json({msg:"No valid Token"});
    }

}