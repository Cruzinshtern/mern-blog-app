const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose')
const users = require('./user/routes.js');
const posts = require('./post/routes.js');

require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECTION = process.env.DB_CONNECTION;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/posts', posts);
app.use('/users', users);


mongoose.connect(DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB has been connected to...'))



app.listen(PORT, () => console.log(`Server started on ${PORT}...`))
