const express = require('express');
const router = express.Router();
const postService = require('./service.js')
const isAuthorized = require('../middleware/auth.middleware')

router.post('/',async (req, res) => {
        const data = await postService.createPost(req);
        res.json(data);
    })
//add isAuthorized here
router.get('/', async (req, res) => {
    const data = await postService.findAllPosts(req);
    res.json(data);
})

router.get('/:id', async (req, res) => {
    const data = await postService.findOnePost(req);
    res.json(data);
})

router.delete('/:id', async (req, res) => {
    const data = await postService.deletePost(req);
    res.json(data)
})

router.patch('/:id', async (req, res) => {
    const data = await postService.updatePost(req);
    res.json(data);
})

module.exports = router;
