const { categoryService } = require('../services');

const addCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const category = await categoryService.addCategory(name);

        if (category.status) {
            return res.status(category.status).json({ message: category.message });
        }

        return res.status(201).json(category);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();

        return res.status(200).json(categories);
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
};

module.exports = {
    addCategory,
    getAllCategories,
};