const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    });
    
    BlogPost.associate = (models) => {
        BlogPost.belongsToMany(models.User, { foreignKey: 'userId', as: 'user' });
        BlogPost.hasOne(models.postCategories, { foreignKey: 'postId', as: 'post' });
    };
    
    return BlogPost;
}