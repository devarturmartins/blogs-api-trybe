module.exports = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('PostCategory', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'post_categories',
    });

    PostCategories.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'categories',
            foreignKey: 'categoryId',
            otherKey: 'postId',
            through: 'PostCategory',
        });
        models.BlogPost.belongsToMany(models.Category, {
            as: 'posts',
            foreignKey: 'postId',
            otherKey: 'categoryId',
            through: 'PostCategory',
        });

    };

    return PostCategories;
}