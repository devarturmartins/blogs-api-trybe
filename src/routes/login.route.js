const { Router } = require('express');
const { loginController } = require('../controllers');

const router = Router();

router.post('/', loginController.loginss);

module.exports = router;