const assignmentService = require('../services/assignmentService');

exports.createAssignment = async (req, res, next) => {
  try {
    const assignment = await assignmentService.createAssignment(req.body);
    res.status(201).json(assignment);
  } catch (err) {
    next(err);
  }
};

exports.getAssignmentById = async (req, res, next) => {
  try {
    const assignment = await assignmentService.getAssignmentById(req.params.id);
    res.json(assignment);
  } catch (err) {
    next(err);
  }
};

exports.getAllAssignments = async (req, res, next) => {
  try {
    const assignments = await assignmentService.getAllAssignments();
    res.json(assignments);
  } catch (err) {
    next(err);
  }
};
