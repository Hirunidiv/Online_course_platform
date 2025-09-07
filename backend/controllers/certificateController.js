const certificateService = require('../services/certificateService');

exports.createCertificate = async (req, res, next) => {
  try {
    const certificate = await certificateService.createCertificate(req.body);
    res.status(201).json(certificate);
  } catch (err) {
    next(err);
  }
};

exports.getCertificateById = async (req, res, next) => {
  try {
    const certificate = await certificateService.getCertificateById(req.params.id);
    res.json(certificate);
  } catch (err) {
    next(err);
  }
};

exports.getAllCertificates = async (req, res, next) => {
  try {
    const certificates = await certificateService.getAllCertificates();
    res.json(certificates);
  } catch (err) {
    next(err);
  }
};
