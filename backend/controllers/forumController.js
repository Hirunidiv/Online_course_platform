const forumService = require('../services/forumService');

exports.createForum = async (req, res, next) => {
  try {
    const forum = await forumService.createForum(req.body);
    res.status(201).json(forum);
  } catch (err) {
    next(err);
  }
};

exports.getForumById = async (req, res, next) => {
  try {
    const forum = await forumService.getForumById(req.params.id);
    res.json(forum);
  } catch (err) {
    next(err);
  }
};

exports.getAllForums = async (req, res, next) => {
  try {
    const forums = await forumService.getAllForums();
    res.json(forums);
  } catch (err) {
    next(err);
  }
};
