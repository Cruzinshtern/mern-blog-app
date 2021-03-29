const express = require('express');
const router = express.Router();
const userService = require('./service');
const { check, validationResult } = require('express-validator');
const isAuthorized = require('../middleware/auth.middleware.js')


router.post('/register',
    [
        check('email', 'wrong type of email').isEmail(),
        check('password', 'Min password length is 4 symbols').isLength({min: 4})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({message: 'Wrong data'})
        }
        const data = await userService.createUser(req);
        res.json(data);
    })

router.post('/login',
    [
        check('email', 'Wrong email').normalizeEmail().isEmail(),
        check('password', 'Min password length is 4 symbols').isLength({min: 4}).exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({message: 'Wrong data'})
        }
        const data = await userService.login(req);
        res.json(data);
    })

// add isAuthorized here
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
