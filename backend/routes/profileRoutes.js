const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, profileController.createProfile);
router.get('/:id', profileController.getProfileById);
router.get('/', profileController.getAllProfiles);

module.exports = router;
