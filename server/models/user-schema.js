const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,

});

module.exports = mongoose.model("User", user);
