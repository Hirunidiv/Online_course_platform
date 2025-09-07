const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, forumController.createForum);
router.get('/:id', forumController.getForumById);
router.get('/', forumController.getAllForums);

module.exports = router;
