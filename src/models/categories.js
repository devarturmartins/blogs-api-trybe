const CategoriesSchema = (sequelize, DataTypes) => {
    const Categories = sequelize.define('category', {
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });

    Categories.associate = (models) => {
        Categories.hasMany(models.postCategories, { foreignKey: 'categoryId', as: 'categories' });
    };

    return Categories;
}

module.exports = CategoriesSchema;