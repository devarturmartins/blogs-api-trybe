const { BlogPost, Category, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
        const categories = await Category.findAll({ where: { id: categoryIds } });
        if (categories.length !== categoryIds.length) {
            return { message: 'one or more "categoryIds" not found' };
        }
        if (!title || !content) {
            return { message: 'Some required fields are missing' };
        }
        const post = await BlogPost.create({
            title,
            content,
            userId: userId.id,
            published: new Date(),
            updated: new Date(),
        });
        const pCategories = categoryIds.map((e) => ({ postId: post.dataValues.id, categoryId: e }));
        await PostCategory.bulkCreate(pCategories);
        return post;
    };

module.exports = {
    createPost,
};