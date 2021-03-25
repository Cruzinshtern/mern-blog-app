const express = require('express');
const router = express.Router();
const userService = require('./service')

router.get('/', (req, res) => {
    res.send('hello')
})

router.post('/register', async (req, res) => {
    const newUser = await userService.createUser(req);
    res.json(newUser)
})


module.exports = router;
