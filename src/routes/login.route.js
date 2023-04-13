const { Router } = require('express');
const { loginController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/login', authMiddleware, loginController.loginss);

module.exports = router;