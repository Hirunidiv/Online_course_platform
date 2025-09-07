const profileService = require('../services/profileService');

exports.createProfile = async (req, res, next) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
};

exports.getProfileById = async (req, res, next) => {
  try {
    const profile = await profileService.getProfileById(req.params.id);
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

exports.getAllProfiles = async (req, res, next) => {
  try {
    const profiles = await profileService.getAllProfiles();
    res.json(profiles);
  } catch (err) {
    next(err);
  }
};
