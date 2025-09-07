const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, courseController.createCourse);
router.get('/:id', courseController.getCourseById);
router.get('/', courseController.getAllCourses);
// ...other course routes

module.exports = router;
