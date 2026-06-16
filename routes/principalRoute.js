const express = require('express');
const router = express.Router();
const { registerPrincipal, loginPrincipal } = require('../controllers/principalController');

router.post('/register', registerPrincipal);
router.post('/login', loginPrincipal);

module.exports = router;
