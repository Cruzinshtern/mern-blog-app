const express = require('express');
const router = express.Router();
const userService = require('./service')

router.post('/register', async (req, res) => {
    const data = await userService.createUser(req);
    res.json(data);
})

router.get('/', async (req, res) => {
    const data = await userService.findAllUsers(req);
    res.json(data);
})

router.get('/:id', async (req, res) => {
    const data = await userService.findOneUser(req);
    res.json(data);
})

router.delete('/:id', async (req, res) => {
    const data = await userService.deleteUser(req);
    res.json(data)
})

router.patch('/:id', async (req, res) => {
    const data = await userService.updateUser(req);
    res.json(data);
})


module.exports = router;
