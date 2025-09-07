const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, certificateController.createCertificate);
router.get('/:id', certificateController.getCertificateById);
router.get('/', certificateController.getAllCertificates);

module.exports = router;
