const User = require('../models/User')
const jwt = require('jsonwebtoken');
const helpers = require('../helpers/helpers.js')
require("dotenv/config");

class UserService {

    async createUser(req) {
        try {
            const isMatch = await User.findOne({ email: req.body.email })
            if(isMatch) {
                return { message: 'This email already exists' }
            }
            const hashedPassword = await helpers.hashed(req.body.password)
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
        const usernameToFind = req.query.username;
        const sortByUsername = req.query.sort;
        try {
            const length = await User.find().countDocuments();
            const paginate = helpers.paginate(req);
            if (!usernameToFind) {
                const data = await User.find().limit(paginate.itemsPerPage).skip(paginate.offset).sort({ username: sortByUsername })
                if (data) {
                    const response = {
                        items: data.length ? data : [],
                        currentPage: paginate.currentPage,
                        itemsPerPage: paginate.itemsPerPage,
                        totalItems: length,
                        totalPages: Math.ceil(length / paginate.itemsPerPage),
                    };
                    console.log(req.query);
                    return response;
                }
            } else {
                const data = await User.find({ username: { $regex: usernameToFind } }).limit(paginate.itemsPerPage).skip(paginate.offset).sort({ username: sortByUsername })
                const response = {
                    items: data.length ? data : [],
                    currentPage: paginate.currentPage,
                    itemsPerPage: paginate.itemsPerPage,
                    totalItems: length,
                    totalPages: Math.ceil(length / paginate.itemsPerPage),
                };
                return response;
            }
        } catch (e) {
            return {message: e.message};
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
