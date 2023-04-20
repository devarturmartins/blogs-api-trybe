const { postService } = require('../services');

const createPost = async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const userId = req.user;
        const post = await postService.createPost(title, content, categoryIds, userId);
        if (post.message) return res.status(400).json(post);
        return res.status(201).json(post);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

module.exports = {
    createPost,
};