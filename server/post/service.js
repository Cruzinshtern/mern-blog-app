const Post = require('../models/Post.js')
const helpers = require('../helpers/helpers.js')

class PostService {

    async createPost(req) {
        try {
            const isMatch = await Post.findOne({ title: req.body.title })
            if(isMatch) {
                return { message: 'This post title already exists' }
            }
            const newPost = new Post({
                title: req.body.title,
                description: req.body.description,
                body: req.body.body,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
            return await newPost.save();
        } catch (e) {
            return { message: e.message };
        }
    }

    async findAllPosts(req) {
        try {
            const length = await Post.find().countDocuments();
            const paginate = helpers.paginate(req)
            const data = await Post.find().limit(paginate.itemsPerPage).skip(paginate.offset);
            if(data) {
                const response = {
                    items: data.length ? data : [],
                    currentPage: paginate.currentPage,
                    itemsPerPage: paginate.itemsPerPage,
                    totalItems: length,
                };
                return response;
            }
        } catch (e) {
            return { message: e.message };
        }
    }

    async findOnePost(req) {
        try {
            return await Post.findById(req.params.id);
        } catch (e) {
            return { message: 'No such post' };
        }
    }

    async deletePost(req) {
        try {
            await Post.findByIdAndDelete(req.params.id);
            return { message: 'Post has been deleted' };
        } catch (e) {
            return { message: 'Post has not been deleted' };
        }
    }

    async updatePost(req) {
        try {
            await Post.updateOne(
                { _id: req.params.id },
                { $set: {
                        title: req.body.title,
                        description: req.body.description,
                        body: req.body.body,
                    }}
            );
            return { message: 'Post has been updated' };
        } catch (e) {
            return { message: 'Something went wrong' };
        }
    }
}

module.exports = new PostService;
