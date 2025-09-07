const messageService = require('../services/messageService');

exports.createMessage = async (req, res, next) => {
  try {
    const message = await messageService.createMessage(req.body);
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
};

exports.getMessageById = async (req, res, next) => {
  try {
    const message = await messageService.getMessageById(req.params.id);
    res.json(message);
  } catch (err) {
    next(err);
  }
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await messageService.getAllMessages();
    res.json(messages);
  } catch (err) {
    next(err);
  }
};
