const mongoose = require('mongoose');
const { Schema } = mongoose;

const post = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: Date,
    updatedAt: Date,

});

module.exports = mongoose.model("Post", post);
