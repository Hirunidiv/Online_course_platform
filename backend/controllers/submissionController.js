const submissionService = require('../services/submissionService');

exports.createSubmission = async (req, res, next) => {
  try {
    const submission = await submissionService.createSubmission(req.body);
    res.status(201).json(submission);
  } catch (err) {
    next(err);
  }
};

exports.getSubmissionById = async (req, res, next) => {
  try {
    const submission = await submissionService.getSubmissionById(req.params.id);
    res.json(submission);
  } catch (err) {
    next(err);
  }
};

exports.getAllSubmissions = async (req, res, next) => {
  try {
    const submissions = await submissionService.getAllSubmissions();
    res.json(submissions);
  } catch (err) {
    next(err);
  }
};
