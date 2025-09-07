const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, quizController.createQuiz);
router.get('/:id', quizController.getQuizById);
router.get('/', quizController.getAllQuizzes);

module.exports = router;
