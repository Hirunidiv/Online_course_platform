const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.get('/:id', auth, userController.getUserById);

// Example restricted routes
router.post('/create-course', auth, requireRole('INSTRUCTOR', 'ADMIN'), (req, res) => {
  res.json({ message: "Course created successfully" });
});

router.get('/all-users', auth, requireRole('ADMIN'), (req, res) => {
  res.json({ message: "List of all users" });
});

router.post('/submit-assignment', auth, requireRole('STUDENT'), (req, res) => {
  res.json({ message: "Assignment submitted successfully" });
});

module.exports = router;
