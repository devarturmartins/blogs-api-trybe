const { Router } = require('express');
const { postController } = require('../controllers');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.post('/', authMiddleware, postController.createPost);

module.exports = router;