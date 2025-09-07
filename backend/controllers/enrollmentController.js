const enrollmentService = require('../services/enrollmentService');

exports.enroll = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.enroll(req.body);
    res.status(201).json(enrollment);
  } catch (err) {
    next(err);
  }
};

exports.getEnrollmentById = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentById(req.params.id);
    res.json(enrollment);
  } catch (err) {
    next(err);
  }
};

exports.getUserEnrollments = async (req, res, next) => {
  try {
    const enrollments = await enrollmentService.getUserEnrollments(req.user.id);
    res.json(enrollments);
  } catch (err) {
    next(err);
  }
};

// ...other enrollment controller methods
