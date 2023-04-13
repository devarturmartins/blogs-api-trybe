const postCategoriesSchema = (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('postCategories', {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'post_categories',
    });

    // PostCategories.associate = (models) => {
    // };

    return PostCategories;
}