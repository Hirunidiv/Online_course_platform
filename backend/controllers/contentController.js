const contentService = require('../services/contentService');

exports.createContent = async (req, res, next) => {
  try {
    const content = await contentService.createContent(req.body);
    res.status(201).json(content);
  } catch (err) {
    next(err);
  }
};

exports.getContentById = async (req, res, next) => {
  try {
    const content = await contentService.getContentById(req.params.id);
    res.json(content);
  } catch (err) {
    next(err);
  }
};

exports.getAllContents = async (req, res, next) => {
  try {
    const contents = await contentService.getAllContents();
    res.json(contents);
  } catch (err) {
    next(err);
  }
};
