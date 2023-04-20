const { Router } = require('express');
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/', userController.addUser);
router.get('/', authMiddleware, userController.getAllUsers);
router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;