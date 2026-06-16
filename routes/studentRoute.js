const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addStudent, getStudents } = require('../controllers/studentControllers');

router.post('/add', auth, addStudent);
router.get('/all', auth, getStudents);

module.exports = router;
