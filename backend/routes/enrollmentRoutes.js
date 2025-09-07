const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, enrollmentController.enroll);
router.get('/:id', auth, enrollmentController.getEnrollmentById);
router.get('/user/me', auth, enrollmentController.getUserEnrollments);
// ...other enrollment routes

module.exports = router;
