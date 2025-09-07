const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, messageController.createMessage);
router.get('/:id', messageController.getMessageById);
router.get('/', messageController.getAllMessages);

module.exports = router;
