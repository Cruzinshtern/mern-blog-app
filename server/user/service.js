const User = require('../models/user-schema')
const bcrypt = require('bcrypt');

class UserService {

    async createUser(req) {
        const hashedPassword = await bcrypt.hash(req.body.password)
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        try {
            return await newUser.save();
        } catch (e) {
            return { message: e.message }
        }
    }

}

module.exports = new UserService;
