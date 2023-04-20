const { BlogPost, Category, PostCategory } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
    try {
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
        const postCategories = categoryIds.map((categoryId) => ({
            postId: post.dataValues.id,
            categoryId,
        }));
        await PostCategory.bulkCreate(postCategories);
        return post;
    } catch (e) {
        return e;
    }
    };

module.exports = {
    createPost,
};