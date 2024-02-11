const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/auth.controller')

router.post('/login', clientController.login);
router.delete('/register', clientController.register);

module.exports = router;
