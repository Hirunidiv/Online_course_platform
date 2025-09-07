const express = require('express');
const router = express.Router();
const submissionController = require('../controllers/submissionController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, submissionController.createSubmission);
router.get('/:id', submissionController.getSubmissionById);
router.get('/', submissionController.getAllSubmissions);

module.exports = router;
