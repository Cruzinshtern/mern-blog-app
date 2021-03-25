const User = require('../models/user-schema')
const bcrypt = require('bcrypt');

class UserService {

    async hashed(password) {
        return await bcrypt.hash(password, 10)
    }


    async createUser(req) {
        try {
            const isMatch = await User.findOne({ email: req.body.email })
            if(isMatch) {
                return { message: 'This email already exists' }
            }
            const hashedPassword = await this.hashed(req.body.password);
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            })
            return await newUser.save();
        } catch (e) {
            return { message: e.message };
        }
    }

    async findAllUsers() {
        try {
            const users = await User.find();
            if(users) {
                return users;
            }
        } catch (e) {
            return { message: e.message };
        }
    }

    async findOneUser(req) {
        try {
            return await User.findById(req.params.id);
        } catch (e) {
            return { message: 'No such user' };
        }
    }

    async deleteUser(req) {
        try {
            await User.findByIdAndDelete(req.params.id);
            return { message: 'User has been deleted' };
        } catch (e) {
            return { message: 'User has not been deleted' };
        }
    }

    async updateUser(req) {
        try {
            const hashedPassword = await this.hashed(req.body.password);
            await User.updateOne(
                {_id: req.params.id},
                {$set: {
                    name: req.body.name,
                    username: req.body.username,
                    password: hashedPassword,
                }}
            );
            return { message: 'User has been updated' };
        } catch (e) {
            return { message: 'Something went wrong' };
        }
    }



}

module.exports = new UserService;
