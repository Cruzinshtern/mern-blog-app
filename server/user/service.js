const User = require('../models/user-schema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv/config");

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

    async findAllUsers(req) {
        try {
            const length = await User.find().countDocuments();
            const currentPage = parseInt(req.query.page) || process.env.DEFAULT_PAGE;
            const itemsPerPage = parseInt(req.query.limit) || process.env.DEFAULT_LIMIT;
            const offset = (currentPage - 1) * itemsPerPage;

            const data = await User.find().limit(itemsPerPage).skip(offset);
            console.log(data);
            if(data) {
                const response = {
                    items: data.length ? data : [],
                    currentPage: currentPage,
                    itemsPerPage: itemsPerPage,
                    totalItems: length,
                };
                return response;
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
                { _id: req.params.id },
                { $set: {
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

    async login(req) {
        const userToLogin = await User.findOne({ email: req.body.email });
        if(!userToLogin) {
            return { message: 'Such user does not exist' }
        }
        const token = jwt.sign(
            { data: userToLogin },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        return {token};
    }



}
module.exports = new UserService;
