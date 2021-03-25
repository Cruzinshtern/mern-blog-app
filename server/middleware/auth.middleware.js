const User = require('../models/User');
const jwt = require('jsonwebtoken');
require("dotenv/config");

async function isAuthorized(req, res, next) {
    const token = req.headers['authorization'];
    if(!token) {
        res.status(500).json({ message: 'Login first' })
    }
    const parsedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(parsedToken.data._id)
    if(!user) {
        res.status(500).json({ message: 'Unauthorized' })
    } else {
        req.user = user;
        next()
    }
}

module.exports = isAuthorized;
