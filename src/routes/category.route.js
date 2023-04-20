const { Router } = require('express');
const { categoryController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/', authMiddleware, categoryController.addCategory);
router.get('/', authMiddleware, categoryController.getAllCategories);

module.exports = router;