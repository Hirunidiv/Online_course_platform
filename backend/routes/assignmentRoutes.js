const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, assignmentController.createAssignment);
router.get('/:id', assignmentController.getAssignmentById);
router.get('/', assignmentController.getAllAssignments);

module.exports = router;
