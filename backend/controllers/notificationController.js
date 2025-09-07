const notificationService = require('../services/notificationService');

exports.createNotification = async (req, res, next) => {
  try {
    const notification = await notificationService.createNotification(req.body);
    res.status(201).json(notification);
  } catch (err) {
    next(err);
  }
};

exports.getNotificationById = async (req, res, next) => {
  try {
    const notification = await notificationService.getNotificationById(req.params.id);
    res.json(notification);
  } catch (err) {
    next(err);
  }
};

exports.getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getAllNotifications();
    res.json(notifications);
  } catch (err) {
    next(err);
  }
};
