module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });

    Categories.associate = (models) => {
        Categories.hasMany(models.PostCategory, { foreignKey: 'categoryId', as: 'postCategories' });
    };

    return Categories;
};