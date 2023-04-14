module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
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
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
        BlogPost.hasMany(models.PostCategory, { foreignKey: 'postId', as: 'post' });
    };
    
    return BlogPost;
}