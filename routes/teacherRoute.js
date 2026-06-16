const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addTeacher, getTeachers } = require('../controllers/teacherController');

// Protected
router.post('/add', auth, addTeacher);
router.get('/all', auth, getTeachers);

module.exports = router;
