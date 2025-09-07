const quizService = require('../services/quizService');

exports.createQuiz = async (req, res, next) => {
  try {
    const quiz = await quizService.createQuiz(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    next(err);
  }
};

exports.getQuizById = async (req, res, next) => {
  try {
    const quiz = await quizService.getQuizById(req.params.id);
    res.json(quiz);
  } catch (err) {
    next(err);
  }
};

exports.getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await quizService.getAllQuizzes();
    res.json(quizzes);
  } catch (err) {
    next(err);
  }
};
