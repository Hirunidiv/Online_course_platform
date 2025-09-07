const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, notificationController.createNotification);
router.get('/:id', notificationController.getNotificationById);
router.get('/', notificationController.getAllNotifications);

module.exports = router;
