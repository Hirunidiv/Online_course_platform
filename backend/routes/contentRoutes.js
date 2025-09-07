const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, contentController.createContent);
router.get('/:id', contentController.getContentById);
router.get('/', contentController.getAllContents);

module.exports = router;
