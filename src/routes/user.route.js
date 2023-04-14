const { Router } = require('express');
const { userController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/', userController.addUser);

module.exports = router;